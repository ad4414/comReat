import React from "react";
import { Switch, Row, Col, Tooltip } from "antd";
import { levelArr } from "../data";
const MessageTemplate = (props) => {
  const {
    data,
    operation,   
    hideOutboundChannel = true,
    mailListArr,
  } = props;
  console.log(levelArr);
  const {
    id,
    name,
    enable,
    isPreset,
    template,
    level,
    levelTo,
    sendType,
    roleList = [],
  } = data;
  let {
    syslogList,
    mailList,
    subcategoryNameList,
    moduleNameList,
    briefNameList,
  } = data;
  const subcategoryText = subcategoryNameList.length
    ? subcategoryNameList.join(",")
    : "";
  const moduleText = moduleNameList.length ? moduleNameList.join(",") : "全部";
  const levelValue = (levelArr.find((item) => item.dictCode == level) || {})
    .dictValue;
    console.log(levelValue);
    
  const levelToValue = (levelArr.find((item) => item.dictCode == levelTo) || {})
    .dictValue;
  const levelText = levelValue
    ? `${level}（${levelValue}）${
        !levelToValue || levelTo === level
          ? ""
          : `- ${levelTo}（${levelToValue}）`
      }`
    : "";
  const briefText = briefNameList.length ? briefNameList.join(",") : "全部";
  const mailValue = mailList
    .map(
      (item) =>
        (mailListArr.find((mailItem) => mailItem.id === item) || {})
          .groupName || ""
    )
    .filter((item) => !!item);
  const mailListText = mailValue.length
    ? `邮件（${mailValue.join(",")}）`
    : "邮件";
  const syslogListText = syslogList.length
    ? `SYSLOG（${syslogList.join(",")}）`
    : "SYSLOG";
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
  return (
    <div className="message-template-item">
      <div className="message-template-title">
        <div className="message-template-item-text">
          <span className="mr8">{name}</span>
          {isPreset && <span className="is-preset">内置</span>}
        </div>
        <Switch
          size="small"
          checked={enable}
          onChange={(value) => operation.onOpenMessage(id, value)}
        ></Switch>
      </div>
      <div className="message-template-content">
        <Row className="row">
          <Col span={12} className="row-info">
            <span className="content-title">类别</span>
            <span className="content-content">{subcategoryText}</span>
          </Col>
        </Row>
        <Row className="row">
          <Col span={12} className="row-info">
            <span className="content-title">模板</span>
            <span className="content-content">{mouseTipInfo(moduleText)}</span>
          </Col>
          <Col span={12} className="row-info">
            <span className="content-title">级别</span>
            <span className="content-content">{mouseTipInfo(levelText)}</span>
          </Col>
        </Row>
        <Row className="row">
          <Col span={!hideOutboundChannel ? 12 : 24} className="row-info">
            <span className="content-title"> 简类</span>
            <span className="content-content">{mouseTipInfo(briefText)}</span>
          </Col>
          {!hideOutboundChannel && (
            <Col span={12} className="row-info">
              <span className="content-title">外发渠道</span>
              {(sendType === "MAIL" || sendType === "SYSLOG") && (
                <span className="content-content">
                  {sendType === "MAIL" && mouseTipInfo(mailListText)}
                  {sendType === "SYSLOG" && mouseTipInfo(syslogListText)}
                </span>
              )}
              {sendType === "NOTIFY" && (
                <span className="content-content">
                  系统
                  <a
                    className="m18"
                    onClick={() => operation.showRoleModal(id, roleList)}
                  >
                    编辑角色
                  </a>
                </span>
              )}
            </Col>
          )}
        </Row>
        <Row className="row">
          <Col span={24} className="row-info template">
            <div className="content-title">消息内容</div>
            <div className="template-text">{mouseTipInfo(template)}</div>
          </Col>
        </Row>
      </div>
      <div className="message-template-operation">
        <Row className="row-operation">
          <Col span={8} className="col-operation">
            <a onClick={() => operation.editCopyDeleteShow("copy", id, data)}>
              复制
            </a>
            <div className="operation-divider"></div>
          </Col>
          <Col span={8} className="col-operation">
            <a
              onClick={() => {
                operation.editCopyDeleteShow("edit", id, data);
              }}
            >
              编辑
            </a>
            <div className="operation-divider"></div>
          </Col>
          <Col span={8} className="col-operation">
            {isPreset ? (
              <a style={{ color: "#999" }}>删除</a>
            ) : (
              <a
                onClick={() => {
                  operation.editCopyDeleteShow("delete", id);
                }}
              >
                删除
              </a>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default MessageTemplate;
