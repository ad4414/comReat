import SearchConditionForm from "./SearchConditionForm";
import React, { useState } from "react";
import { Table } from "antd";
import dayjs from "dayjs";
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
  const [searchFormData, setSearchFormData] = useState({});
  const [pagination, setPagination] = useState({
    showSizeChanger: true,
    showTotal: (total) => "总共" + ` ${total} ` + "条",
    pageSizeOptions: ["5", "10", "15", "20"],
    total: 0,
  });
  const onSearch = (data) => {
    let nowData = dataSource ? dataSource : audData;
    console.log(nowData);
    if (data.level) {
      let currentData = nowData.filter((item) => {
        return item.eventLevelCode === data.level;
      });
      setDataSource(currentData);
    } else if (data.logClassify) {
      let label;
      logClassifyArr.forEach((item) => {
        if (item.value === data.logClassify) {
          label = item.label;
        }
      });
      console.log(label);
      let currentData = nowData.filter((item) => {
        return item.logClassify === label;
      });
      setDataSource(currentData ? currentData : audData);
    } else if (data.time) {
      data.time = data.time.map((item) => {
        item = dayjs(item).format("YYYY-MM-DD HH:mm:ss");
        console.log(new Date(item).getTime());
        return new Date(item).getTime();
      });
      console.log(data.time);
      let currentData = dataSource.filter((item) => {
        return (
          item.createTime >= data.time[0] && item.createTime <= data.time[1]
        );
      });
      setDataSource(currentData);
    } else {
      setDataSource(audData);
    }
    setSearchFormData(data);
  };
 
  const [checkedList,setCheckedList] = useState(columns.map(item=>item.key));
  const handChange=(checkedList)=>{
    setCheckedList(checkedList);
  }
  console.log(checkedList);
  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key),
  }));
  console.log(newColumns);
  
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
