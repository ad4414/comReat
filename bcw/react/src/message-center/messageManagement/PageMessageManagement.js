import React, { useState } from "react";
import {
  Tooltip,
  Divider,
  Radio,
  Select,
  Button,
  Table,
  Switch,
  Spin,
  Row,
  Col,
  Modal,
  Popover,
  Dropdown,
} from "antd";
import {
  scenesCodeArr,
  levelArr,
  maiListArr,
  sendTypeArr,
  roleList,
  dataSource,
} from "../data";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
  ColumnWidthOutlined,
  SettingOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import MessageTemplate from "./MessageTemplate";
import "./PageMessage.less";
import OutgoingChannel from "./OutgoingChannle";
import WrappedEditRoleForm from "./WrappedEditRoleForm";
import MessageTemplateEdit from "./MessageTemplateEdit";
const PageMessageManagement = (props) => {
  const {
    showEditRole,
    hideOutboundChannel,
    messageManagement,
    showTableTooltip,
  } = props;
  const [roleVisible, setRoleVisible] = useState(false);
  const [roleChangeId, setRoleChangeId] = useState(null);
  const [roleChangeIds, setRoleChangeIds] = useState([]);
  const [modelCheck, setModelCheck] = useState("1");
  const [scenesCode, setScenesCode] = useState("");
  const [messageEditCopyTitle, setMessageEditCopyTitle] = useState("");
  const [messageEditCopyVisible, setMessageEditCopyVisible] = useState(false);
  const [messageEditCopyData, setMessageEditCopyTitleData] = useState(null);
  const [isCopyTemplate, setIsCopyTemplate] = useState(false);
  const [outgoingVisible, setOutgoingVisible] = useState(false);
  const syslogListArr = [];
  const dictCodeTree = [];
  //开启关闭消息
  const onOpenMessage = (id, enable) => {
    Modal.confirm({
      icon: <QuestionCircleOutlined />,
      title: enable ? "启用" : "禁用",
      okText: "确认",
      cancelText: "取消",
      onOk() {},
      onCancel() {},
    });
  };
  //展示修改角色消息
  const showRoleModal = (roleChangeId, roleChangeIds) => {
    setRoleChangeId(roleChangeId);
    setRoleChangeIds(roleChangeIds);
    setRoleVisible(true);
  };
  const editCopyDeleteShow = async (type, id, data) => {
    switch (type) {
      case "copy":
      case "edit": {
        setMessageEditCopyVisible(true);
        setMessageEditCopyTitle(type === "copy" ? "复制" : "编辑");
        setMessageEditCopyTitleData({
          ...data,
          name: type === "copy" ? `${data.name}-复制` : data.name,
        });
        setIsCopyTemplate(type === "copy");
      }
    }
  };
  //为全部类型时，渲染方式改变
  const renderCardListData = (scenesCode, cardListData) => {
    if (!scenesCode) {
      const newData = scenesCodeArr.map((item) => {
        const data = cardListData.filter(
          (itemCard) => itemCard.scenesCode === item.scenesCode
        );
        return {
          code: item.scenesCode,
          value: item.scenesName,
          data: data,
        };
      });
      return newData
        .filter((item) => !!item.data && item.data.length)
        .map((item) => {
          return (
            <div key={item.code}>
              <div className="message-template-scenesCode">
                {item.value + `（${item.data.length}）`}
              </div>
              <Row>
                {item.data.map((item) => {
                  return (
                    <Col
                      key={item.id}
                      span={8}
                      className="message-template-padding"
                    >
                      <MessageTemplate
                        data={item}
                        levelArr={levelArr}
                        mailListArr={maiListArr}
                        hideOutboundChannel={hideOutboundChannel}
                        operation={{
                          onOpenMessage: onOpenMessage,
                          showRoleModal: showRoleModal,
                          editCopyDeleteShow: editCopyDeleteShow,
                        }}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        });
    }
  };

  const pagination = {
    showTotal: (total) => `总共 ${total} 条`,
    showSizeChanger: true,
    pageSizeOptions: ["5", "10", "20", "30"],
    total: 0,
  };
  const checkedColumns = [
    "name",
    "subcategoryNameList",
    "scenesCode",
    "moduleNameList",
    "level",
    "briefNameList",
    "enable",
    "sendType",
    "template",
  ];
  const columns = [
    {
      title: "消息类型名称",
      dataIndex: "name",
      width: 180,
      ellipsis: true,
    },
    {
      title: "所属场景",
      dataIndex: "scenesCode",
      width: 120,
      ellipsis: true,
    },
    {
      title: "归类",
      dataIndex: "subcategoryNameList",
      width: 120,
      ellipsis: true,
    },
    {
      title: "模块",
      dataIndex: "moduleNameList",
      width: 150,
      ellipsis: true,
    },
    {
      title: "简类",
      dataIndex: "briefNameList",
      width: 150,
      ellipsis: true,
    },
    {
      title: "级别",
      dataIndex: "level",
      width: 150,
      ellipsis: true,
    },
    {
      title: "状态",
      dataIndex: "enable",
      width: 100,
      ellipsis: true,
      render: (text, record, index) => {
        return <Switch size="small" checked={text} />;
      },
    },
    {
      title: "外发方式",
      dataIndex: "sendType",
      width: 150,
      ellipsis: true,
      render: (text, record, index) => {
        const syslogListText =
          record.syslogList && record.syslogList.length
            ? `SYSLOG（${record.syslogList.join(",")}）`
            : "SYSLOG";
        const mailValue = record.mailList
          .map(
            (item) =>
              (maiListArr.find((mailItem) => mailItem.id === item) || {})
                .groupName || ""
          )
          .filter((item) => !!item);
        const mailListText = mailValue.length
          ? `${邮件}（${mailValue.join(",")}）`
          : "邮件";

        return <span>{text === "NOTIFY" && <span>系统</span>}</span>;
      },
    },
    {
      title: "消息内容",
      dataIndex: "template",
      width: 200,
      ellipsis: true,
    },
    {
      title: "操作",
      key: "action2",
      width: checkedColumns.length ? "180px" : "100%",
      fixed: "right",
      render: (text, record, index) => {
        return (
          <span className="operation-btns">
            {showEditRole && (
              <>
                <Tooltip
                  placement="topLeft"
                  title={"修改角色"}
                  onClick={() => {
                    setRoleVisible(true);
                  }}
                >
                  <a>修改角色</a>
                </Tooltip>
                <Divider type="vertical" />
              </>
            )}
            <Tooltip
              placement="topLeft"
              title={"复制"}
              onClick={() => {
                editCopyDeleteShow("copy", record.id, record);
              }}
            >
              <a>复制</a>
            </Tooltip>
            {<Divider type="vertical" />}
            {
              <Tooltip
                placement="topLeft"
                title={"编辑"}
                onClick={() => {
                  editCopyDeleteShow("edit", record.id, record);
                }}
              >
                <a>编辑</a>
              </Tooltip>
            }
            {!record.isPreset && (
              <>
                <Divider type="vertical" />
                <Tooltip
                  placement="topLeft"
                  title={"删除"}
                  onClick={() => {
                    editCopyDeleteShow("delete", record.id, record);
                  }}
                >
                  <a className="delete-btn">删除</a>
                </Tooltip>
              </>
            )}
          </span>
        );
      },
    },
  ];
  
  
  // 隐藏外发渠道
  hideOutboundChannel && columns.splice(7, 1);
  // 没有管理权限，则隐藏操作项
  !messageManagement && columns.pop();
  //状态
  //过滤逻辑
  const [status,setStatus]=useState("all")
  let dataSourceArr = dataSource.filter((item) => {
    if (scenesCode !== "") {
      return item.scenesCode === scenesCode;
    } else if (status === "all") {
       return true;
    }else if(status==="true"){
      return item.enable===true
    }else {
      return item.enable===false
    }
     
  });
  return (
    <div className="message-management-box">
      <div className="mb16 btn-group">
        <Radio.Group defaultValue={scenesCodeArr}   >
          <Radio.Button value={""} onClick={(e) => {
                setScenesCode(e.target.value);
              }}>全部</Radio.Button>
          {scenesCodeArr.map((v) => (
            <Radio.Button
              key={v.scenesCode}
              value={v.scenesCode}
              onClick={(e) => {
                setScenesCode(e.target.value);
              }}
            >
              {v.scenesName || ""}
            </Radio.Button>
          ))}
        </Radio.Group>
        {!messageManagement && (
          <Button
            className="fr message-management-btn"
            onClick={() => {
              props.onChangeType("messageList");
            }}
          >
            消息列表
          </Button>
        )}
      </div>
      <div className="t-common-search-box">
        <div>
          <Select
            placeholder="状态:"
            defaultValue="all"
            style={{ width: 230 }}
            getPopupContainer={(trigger) => trigger.parentNode}
            onChange={(e) => { setStatus(e);
            }
}
          >
            <Select.Option value="all">全部</Select.Option>
            <Select.Option value="true">启用</Select.Option>
            <Select.Option value="false">停用</Select.Option>
          </Select>
        </div>
        <div className="t-btn">
          {!hideOutboundChannel && messageManagement && (
            <Button
              type="primary"
              className="mr16"
              onClick={() => {
                setOutgoingVisible(true);
              }}
            >
              修改外发渠道
            </Button>
          )}
          <Radio.Group value={modelCheck} buttonStyle="solid">
            <Radio.Button
              value="1"
              onClick={(e) => setModelCheck(e.target.value)}
            >
              <MenuFoldOutlined style={{ fontSize: "30px" }} />
            </Radio.Button>
            <Radio.Button
              value="2"
              onClick={(e) => setModelCheck(e.target.value)}
            >
              <MenuUnfoldOutlined style={{ fontSize: "30px" }} />
            </Radio.Button>
          </Radio.Group>
        </div>
      </div>
      {modelCheck === "1" ? (
        showTableTooltip && (
          <Table
            columns={columns.filter(
              ({ dataIndex }) =>
                !dataIndex || checkedColumns.includes(dataIndex)
            )}
            rowKey={(record) => record.id}
            dataSource={dataSourceArr}
            pagination={pagination}
          />
        )
      ) : (
        <div></div>
      )}
      {modelCheck === "2" && (
        <Spin spinning={false}>
          <div className="message-template">
            {!scenesCode && renderCardListData(scenesCode, dataSource)}
            {scenesCode && (
              <Row>
                {dataSource.map((item) => {
                  return (
                    <Col
                      key={item.id}
                      span={8}
                      className="message-template-padding"
                    >
                      <MessageTemplate
                        data={item}
                        editRole={editRole}
                        showEditRole={showEditRole}
                        operation={{
                          onOpenMessage: onOpenMessage,
                          showRoleModal: showRoleModal,
                          editCopyDeleteShow: editCopyDeleteShow,
                        }}
                      />
                    </Col>
                  );
                })}
              </Row>
            )}
          </div>
        </Spin>
      )}
      {!hideOutboundChannel && outgoingVisible && (
        <OutgoingChannel
          visible={outgoingVisible}
          title={"修改外发渠道"}
          onOk={(data) => {}}
          onCancel={() => {
            setOutgoingVisible(false);
          }}
          sendTypeArr={sendTypeArr}
          mailListArr={maiListArr}
          syslogListArr={syslogListArr}
        />
      )}
      {messageEditCopyVisible && (
        <MessageTemplateEdit
          visible={messageEditCopyVisible}
          title={messageEditCopyTitle}
          formData={messageEditCopyData}
          scenesCodeArr={scenesCodeArr}
          levelArr={levelArr}
          sendTypeArr={sendTypeArr}
          mailListArr={maiListArr}
          syslogListArr={syslogListArr}
          dictCodeTree={dictCodeTree}
          hideOutboundChannel={hideOutboundChannel}
          onCancel={() => {
            setMessageEditCopyVisible(false);
            setMessageEditCopyTitle("");
          }}
        />
      )}
      {roleVisible && (
        <WrappedEditRoleForm
          visible={roleVisible}
          roleChangeId={roleChangeId}
          roleChangeIds={roleChangeIds}
          title={messageEditCopyTitle}
          roleList={roleList}
          onCancel={() => {
            setRoleVisible(false);
            setRoleChangeId("");
            setRoleChangeIds([]);
          }}
        />
      )}
    </div>
  );
};
export default PageMessageManagement;
