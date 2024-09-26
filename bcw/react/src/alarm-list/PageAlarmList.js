import SearchConditionForm from "./SearchConditionForm";
import React, { useState } from "react";
import { Table } from "antd";
import "./index.less";
const PageAudit = (props) => {
  const {
    showTableTooltip,
    operation,
    alarmLevels,
    logClassifyArr,
    audData,
    columns,
  } = props;

  let [dataSource, setDataSource] = useState(audData);
  const defaultCheckedColumns = [
    "logClassify",
    "eventType",
    "eventLevel",
    "createTime",
    "eventMessage",
    "module",
    "userName",
    "ip",
  ];
  const [pagination, setPagination] = useState({
    showSizeChanger: true,
    showTotal: (total) => "总共" + ` ${total} ` + "条",
    pageSizeOptions: ["5", "10", "15", "20"],
    total: 0,
  });
  const onSearch = (data) => {
    console.log(data);
    if (data.level) {
      data = dataSource.filter((item) => {
        return item.eventLevelCode === data.level;
      });
      setDataSource(data);
    } else if (data.logClassify) {
      let label = logClassifyArr.filter((item) => {
        return item.value === data.logClassify;
      });
      data = dataSource.filter((item) => {
        return item.logClassify === label[0].label;
      });
      setDataSource(data);
    } else if (data.time) {
      data = dataSource.filter((item) => {
        return (
          item.createTime >= data.time[0] && item.createTime <= data.time[1]
        );
      });
      setDataSource(data);
    }else{
      setDataSource(audData);
    }
  };
  const [checkedList, setCheckedList] = useState(
    columns.map((item) => item.key)
  );
  const handChange = (checkedList) => {
    setCheckedList(checkedList);
  };
  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key),
  }));
  return (
    <div className="t-alarm-list-page">
      <div className="t-common-box">
        <div className="t-common-search-box">
          <SearchConditionForm
            onSearch={onSearch}
            logClassifyArr={logClassifyArr}
            columns={columns}
            operation={operation}
            alarmLevels={alarmLevels}
            handChangeList={handChange}
          />
        </div>
        {showTableTooltip ? (
          <div className="T-BTN FR">
            <Table
              columns={newColumns}
              dataSource={dataSource}
              rowKey={(record) => record.id}
              pagination={pagination}
              defaultCheckedColumns={defaultCheckedColumns}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default PageAudit;
