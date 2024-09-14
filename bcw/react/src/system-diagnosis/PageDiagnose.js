import React, { useRef, useState } from "react";
import { Form, Button, Input, Select, Spin, InputNumber } from "antd";
import "./PageDiagnose.less";
import LogCollection from "./LogCollection";
const PageDiagnose = () => {
  const locale = localStorage.getItem("language");
  let typeList = [
    { value: "1", label: "内核" },
    { value: "2", label: "CPU&&MEM" },
    { value: "3", label: "磁盘" },
    { value: "4", label: "网卡" },
    { value: "5", label: "磁盘IO" },
    // { code: '6', value: I18n("systemDiagnose.port") }, // 后端接口没有实现
    // { code: '7', value: I18n("systemDiagnose.dpdk") }, // 后端接口没有实现
    { value: "10", label: "PING" },
    { value: "13", label: "TCPDUMP" },
    // { code: "14", value: I18n("systemDiagnose.infoCollect") }, //移入底部功能
    { value: "15", label: "NSLOOKUP" },
    { value: "16", label: "TELENT" }, // ip 端口
    { value: "17", label: "TRACEROUTE" },
    { value: "18", label: "NETSTAT" },
  ];
  //表单项布局
  const formItemLayout = {
    labelCol: {
      xs: { span: 1 },
      sm: { span: locale === "en" ? 4 : 2 },
    },
    wrapperCol: {
      xs: { span: 1 },
      sm: { span: 14 },
    },
  };
  const formItemLayoutWithoutLabel = {
    labelCol: {
      xs: { span: 1 },
      sm: { span: locale === "en" ? 4 : 2 },
    },
    wrapperCol: {
      xs: { span: 1 },
      sm: {
        span: locale === "en" ? 18 : 22,
        offset: locale === "en" ? 4 : 2,
      },
    },
  };
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  console.log(form1);
  const [value, setValue] = useState("");
  const [type, setType] = useState("1");
  console.log(type);
  const isIpType = ["10", "15", "16", "17"].includes(type);
  console.log(isIpType);

  const handChange = (val) => {
    console.log(val);
    form.setFieldsValue({ type: val });
    setType(val);
  };
  const [exportContent, setExportContent] = useState(true);
  const [finished, setFinished] = useState(false);
  const [collect, setCollect] = useState(true);
  const [collectDownload, setCollectDownload] = useState(true);
  const handData = (msg) => {
    setValue(msg);
  };
  const ref=useRef('')
  console.log(ref.current);
  
  return (
    <div className="page-system-diagnose">
      <div className="">
        <Spin spinning={false}>
          <div className="fw600">实施诊断</div>
          <Form
            className="t-diagnose-box"
            autoCapitalize="off"
            form={form}
            initialValues={{ type: "1" }}
            onFinish={(values) => {
              console.log(values);
            }}
          >
            <Form.Item
              {...formItemLayout}
              label="诊断命令"
              name="type"
              rules={[{ required: false }]}
            >
              <Select
                disabled={false}
                className="t-diagnose-select"
                options={typeList}
                onChange={handChange}
              />

              {!isIpType && type !== "13" && (
                <Button type="primary" className="ml16 mb16" htmlType="submit">
                  执行
                </Button>
              )}
            </Form.Item>
            {isIpType && (
              <>
                <Form.Item
                  {...formItemLayoutWithoutLabel}
                  name="ip"
                  rules={[
                    { required: true, message: "请输入IP" },
                    { max: 100, message: "最多输入100个字符" },
                    {
                      pattern:
                        /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/,
                      message: "请输入正确的IP",
                    },
                  ]}
                >
                  <Input className="t-diagnose-select" placeholder="请输入IP" />
                </Form.Item>
              </>
            )}
            {type === "16" && (
              <Form.Item
                {...formItemLayoutWithoutLabel}
                name="port"
                rules={[{ required: true, message: "请输入端口" }]}
              >
                <InputNumber
                  min={0}
                  max={65535}
                  precision={0}
                  placeholder="请输入端口"
                />
              </Form.Item>
            )}
            {type === "13" && (
              <Form.Item
                {...formItemLayoutWithoutLabel}
                name="content"
                rules={[
                  { required: true, message: "请输入命令" },
                  { max: 200, message: "最多输入200个字符" },
                ]}
              >
                <Input
                  className="t-diagnose-select"
                  placeholder="请输入命令"
                  style={{ width: 400 }}
                />
              </Form.Item>
            )}
            {(isIpType || type === "13") && (
              <Form.Item {...formItemLayoutWithoutLabel}>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            )}
            <Form.Item {...formItemLayoutWithoutLabel}>
              <div className="t-download-box">
                <div className="t-download-input" />
                {exportContent && type !== "14" ? (
                  <Button type="default" className="fr">
                    调试日志下载
                  </Button>
                ) : (
                  finished && (
                    <Button type="default" className="fr">
                      下载
                    </Button>
                  )
                )}
              </div>
            </Form.Item>
          </Form>
        </Spin>
        {(collect || collectDownload) && (
          <>
            <div className="fw600">诊断日志采集</div>
            <div className="diagnostic-log-collection">
              {collect && <LogCollection form={form1} collect={collect} collectDownload={collectDownload} onData={handData} />}
              
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default PageDiagnose;
