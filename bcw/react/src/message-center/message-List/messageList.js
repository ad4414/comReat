import React, { useState } from "react";
import { Button, Tabs, Modal, Table, message, Tooltip } from "antd";
const { TabPane } = Tabs;
import { scenesCodeArr, messageList } from "../data";
import SearchForm from "./SearchForm";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Circle from "./Circle";
import DetailModal from "./DetailModal";
const PageMessageList = (props) => {
  const [checkedColumns, setCheckedColumns] = useState([
    "content",
    "createTime",
    "typeName",
  ]);
  const { messageManagement } = props;
  const [currentTab, setCurrentTab] = useState("");
  const [searchFormData, setSearchFormData] = useState({});
  const [scenesTypeList, setScenesTypeList] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState(true);
  const [readMessage, setReadMessage] = useState(true);
  const [readAllMessage, setReadAllMessage] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [visible, setVisible] = useState(false);
  const [recordData, setRecordData] = useState({});
  const [isRead, setIsRead] = useState(false);
  const [pangation, setPangation] = useState({
    showTotal: (total) => ` 总共 ${total} 条`,
    showSizeChanger: true,
    pageSizeOptions: ["15", "30", "40", "50"],
    total: 0,
  });
  const isReadChange = (s) => {
    setIsRead(s);
  };
  //过滤数据
  let messageListArr = messageList.filter((item) => {
    if (isRead === "all") {
      return true;
    } else if (isRead === "false") {
      return item.isRead === false;
    } else {
      return item.isRead === true;
    }
  });

  const customMouseTipInfo = (text, styleClass) => {
    let tipText = (
      <span
        className="min-w120"
        dangerouslySetInnerHTML={{ __html: text || "-" }}
      ></span>
    );
    return (
      <Tooltip placement="topLeft" title={tipText}>
        <span dangerouslySetInnerHTML={{ __html: text || "-" }}></span>
      </Tooltip>
    );
  };
  const mouseTipInfo = (text) => {
    text = !text ? "-" : text;
    if (text === "-" || text === "--") {
      return (
        <Tooltip title={null}>
          <span>{text}</span>
        </Tooltip>
      );
    }
    let tipText = <span className="min-w120">{text}</span>;
    return (
      <Tooltip placement="topLeft" title={tipText}>
        <span>{text}</span>
      </Tooltip>
    );
  };
  const showModal = (record) => {
    setVisible(true);
    setRecordData(record);
  };
  const columns = [
    {
      title: "消息内容",
      dataIndex: "content",
      ellipsis: true,
      render: (text, record, index) => {
        return (
          <>
            {record.isRead === false && <Circle color={"blue"} />}
            <span onClick={() => showModal(record)} className="pointer">
              {customMouseTipInfo(text)}
            </span>
          </>
        );
      },
    },
    {
      title: "时间",
      dataIndex: "createTime",
      width: "25%",
      render: (text, record, index) => {
        return text;
      },
    },
    {
      title: "消息类型",
      dataIndex: "typeName",
      width: 200,
      render: (text) => {
        return mouseTipInfo(text);
      },
    },
  ];
  const onValueChange = (changeValues, allValues) => {
    setSearchFormData(allValues);
  };
  //过滤数据
  const [key, setKey] = useState("");
  const onChangeTab = (key) => {
    console.log(key);
    setKey(key);
  };
  const onOperation = (type) => {
    console.log(type);
    if (type !== "allread" && !selectedRowKeys.length) {
      message.warning("请选择要操作的消息");
      return;
    }
    let ids = selectedRowKeys.join(",");
    let title = "";
    switch (type) {
      case "delete":
        title = "确定删除所选消息吗？";
        break;
      case "read":
        title = "确定标记所选消息为已读吗？";
        break;
      case "allRead":
        title = "确定标记全部消息为已读吗？";
        break;
      default:
        break;
    }
    Modal.confirm({
      icon: <QuestionCircleOutlined />,
      title: title,
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        if (type === "delete") {
          console.log("delete");
        } else if (type === "read") {
          console.log("read");
        } else if (type === "allRead") {
          console.log("allRead");
        }
      },
    });
  };
  const onSelectRowsChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    columnWidth: 60,
    fixed: true,
    selectedRowKeys: selectedRowKeys,
    onChange: onSelectRowsChange,
  };
  const handleCancel = () => {
    setVisible(false);
    setRecordData({});
  };
  
  return (
    <>
      <div className="message-list-header">
        <Tabs onChange={onChangeTab} accessKey={currentTab}>
          <TabPane tab="全部"></TabPane>
          {scenesCodeArr.map((item, index) => {
            return <TabPane tab={item.scenesName} key={index}></TabPane>;
          })}
        </Tabs>
        {messageManagement && (
          <Button
            className="fr message-management-btn"
            onClick={() => {
              props.onChangeType("messageManagement");
            }}
          >
            消息管理
          </Button>
        )}
      </div>
      <div className="t-common-search-box">
        <SearchForm
          currentTab={currentTab}
          searchFormData={searchFormData}
          scenesTypeList={scenesTypeList}
          changeValues={onValueChange}
          isReadChange={isReadChange}
        />
        <div>
          {deleteMessage && (
            <Button onClick={() => onOperation("delete")}> 删除</Button>
          )}
          {readMessage && (
            <Button className="ml16" onClick={() => onOperation("read")}>
              标记已读
            </Button>
          )}
          {readAllMessage && (
            <Button className="ml16" onClick={() => onOperation("allRead")}>
              全部已读
            </Button>
          )}
        </div>
      </div>
      <Table
        size="small"
        columns={columns.filter(
          ({ dataIndex }) => !dataIndex || checkedColumns.includes(dataIndex)
        )}
        dataSource={messageListArr}
        rowSelection={rowSelection}
        pagination={pangation}
        rowKey={(record) => record.id}
      />
      <DetailModal
        visible={visible}
        title={"消息详情"}
        formData={recordData}
        onCancel={handleCancel}
      />
    </>
  );
};
export default PageMessageList;
