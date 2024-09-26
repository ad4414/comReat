import React from "react";
import ReactDOM from "react-dom/client";
import Alert from "../src/timeset";
import AutoCleanForm from "../src/systemClean/AutoCleanForm";
import PageDiagnose from "../src/system-diagnosis/PageDiagnose";
import App from "../src/test/register";
import PageAudit from "../src/alarm-list/PageAlarmList";
import { audData, columns } from "../src/alarm-list/data";
import AlarmSetting from "../src/alarm-setting/alarmSetting";
import { alarmSettingColumn } from "../src/alarm-setting/data";
import PageMessage from "../src/message-center/PageMessage";
import PageCaughtDownload from "../src/caught/PageCaughDownload";
const root = ReactDOM.createRoot(document.getElementById("root"));
const operation = [
  {
    value: "userName",
    label: "操作账号",
  },
  {
    value: "ip",
    label: "操作IP",
  },
  {
    value: "type",
    label: "日志说明",
  },
  {
    value: "message",
    label: "日志信息",
  },
];
const alarmLevels = [
  {
    value: "0",
    label: "紧急",
  },
  {
    value: "1",
    label: "警报",
  },
  {
    value: "2",
    label: "严重",
  },
  {
    value: "3",
    label: "错误",
  },
  {
    value: "4",
    label: "警告",
  },
  {
    value: "5",
    label: "通知",
  },
  {
    value: "6",
    label: "信息",
  },
];
const logClassifyArr = [
  {
    value: "1",
    label: "登录日志",
  },
  {
    value: "2",
    label: "系统日志",
  },
  {
    value: "3",
    label: "配置日志",
  },
];
root.render(
   <React.StrictMode>
       {/*  <PageAudit
      showTableTooltip={true}
      operation={operation}
      alarmLevels={alarmLevels}
      logClassifyArr={logClassifyArr}
      columns={columns}
      audData={audData}
    />  */}
    {/* <AlarmSetting alarmSettingColumn={alarmSettingColumn} /> */}
    
{/*     <PageMessage   showEditRole={true}
      PageMessageManagement={false}
      hideOutboundChannel={false}
      showTableTooltip={true}
      messageManagement={true}/>  */}
      <PageCaughtDownload del={true} download={true} excute={true}/>
  </React.StrictMode>
);
