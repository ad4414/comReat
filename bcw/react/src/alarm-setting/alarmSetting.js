import React, { useState } from "react";
import { Table } from "antd";
import { data, expandedColumn, expandedColumn_LICENSE } from "./data";
import AlarmModal from "./alarmModal";
import "./alarm.less"
const AlarmSetting = (props) => {
  const { alarmSettingColumn } = props;
  const [visible, setVisible] = useState(false);
  const [editIs_LICENSE, setEditIs_LICENSE] = useState(false);
  const [alarmData, setAlarmData] = useState({});
  const operate = (type, data) => {
    switch (type) {
      case "LICENSE":
      case "edit": {
        setEditIs_LICENSE(type === "LICENSE");
        setVisible(!visible);
        setAlarmData(data);
        break;
      }
    }
  };
  const isOpen=(isTrue)=>{
    setVisible(isTrue)
  }
  const expandedColumns_LICENSE = expandedColumn_LICENSE(operate);
  const expandedColumns = expandedColumn(operate);
  return (
    <div className="t-page-alarm-setting">
      <div className="t-btn-box">告警设置</div>
      <Table
        size="small"
        pagination={false}
        rowKey={(recordRow) => recordRow.id}
        columns={alarmSettingColumn}
        dataSource={data}
        expandable={{
          expandedRowRender: (recordRow) => {
            return (
              <Table
                size={"small"}
                columns={
                  recordRow.name === "LICENSE"
                    ? expandedColumns_LICENSE
                    : expandedColumns
                }
                rowKey={(record) => record.id}
                dataSource={recordRow.systemAlarmConfigTOList}
                pagination={false}
              />
            );
          },
        }}
      />
      <AlarmModal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
          isOpen={isOpen}
        editIs_LICENSE={editIs_LICENSE}
        formData={alarmData}
      />
    </div>
  );
};

export default AlarmSetting;
