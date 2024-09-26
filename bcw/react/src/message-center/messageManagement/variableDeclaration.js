import React, { useState } from "react";
import {
  Collapse,
  Tooltip,
  Table
} from "antd";
const {Panel}=Collapse
const VariableDeclaration = (props) => {
    const { data } = props;
  //mouse hover提示信息
  const mouseTipInfo = (text, styleClass) => {
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
        <span className={styleClass || ""}>{text}</span>
      </Tooltip>
    );
  };
  const columns = [
    {
      title: "变量",
      dataIndex: "code",
      render: (text, record, index) => {
        return mouseTipInfo(text);
      },
    },
    {
      title: "说明",
      dataIndex: "name",
      render: (text, record, index) => {
        return mouseTipInfo(text);
      },
    },
    {
      title: "示例",
      dataIndex: "desc",
      render: (text, record, index) => {
        return mouseTipInfo(text);
      },
    },
  ];
  const [pagination, setPagination] = useState({
    current: 1,
        pageSize: 5,
        showTotal: total => `全部共 ${total} 条`,
        total: data.length,
});
const [isPagination, setIsPagination] = useState(data.length > 5)
  const [dataSource, setDataSource] = useState(
    data.length < 6 ? data : data.filter((item, index) => index < 5)
  );
  const tableChange = (pagination) => {
    
    const { current, pageSize } = pagination;
    setPagination(pagination);
    setDataSource(
      data.filter(
        (item, index) =>
          index < current * pageSize && index > (current - 1) * pageSize - 1
      )
    );
  };
  return (
    <div>
      <Collapse bordered={false} defaultActiveKey={["1"]}>
        <Panel header={"消息变量说明"} key="1">
          <Table
            size="small"
            rowKey={(record) => record.code}
            dataSource={dataSource}
            columns={columns}
            onChange={(value) => {
              tableChange(value);
            }}
            pagination={!isPagination ? isPagination : pagination}
          />
        </Panel>
      </Collapse>
    </div>
  );
};
export default VariableDeclaration;
