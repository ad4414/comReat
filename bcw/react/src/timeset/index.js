import React, { useEffect } from "react";
import "./index.less";
import { Form, Radio, Input, DatePicker, Row, Col, Button, Modal } from "antd";
import dayjs from "dayjs";
import { WarningTwoTone } from "@ant-design/icons";
import { useState } from "react";
const Alert = () => {
  const [datetime, setDatetime] = useState("");
  const [timeSetEdit, setTimeSetEdit] = useState(true);
  const [resetLoading, setResetLoading] = useState(false);
  const [searchForm] = Form.useForm();

  let restoreDefault = () => {
    searchForm.resetFields();
    setTimeout(() => {
      setResetLoading(false);
    }, 1500);
    setResetLoading(!resetLoading);
  };
  useEffect(() => {
    setInterval(() => {
      const date = dayjs();
      let datetime = date.format("YYYY-MM-DD hh:mm:ss");
      setDatetime(datetime);
    }, 1000);
  });
  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
    setValue(e.target.value);
  };
  const [value, setValue] = useState(1);
  //表单项布局
  const formItemLayout = {
    labelCol: {
      xs: { span: 1 },
      sm: { span: 5, pull: 1 },
    },
    wrapperCol: {
      xs: { span: 1 },
      sm: { span: 16, pull: 1 },
    },
  };
  const onFinish = (values) => {
    Modal.confirm({
      title:
        "Please restart the service after modifying the system time, otherwise some functions will not take effect.",
      icon: <WarningTwoTone style={{ color: "red" }} />,
      onOk: () => {
        //保存
        console.log("saveSystemInfo", values);
      },
      onCancel: () => {
        //取消
        return;
      },
    });
  };

  return (
    <div className="page-time-set">
      <div className="t-title-row">
        <span className="t-title">Check System Time</span>
      </div>
      <Form
        labelAlign="right"
        className="time-set-form"
        onFinish={onFinish}
        initialValues={{ type: 1 }}
        form={searchForm}
      >
        <Form.Item {...formItemLayout} label="Current Time">
          {datetime}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Set Time" name="type">
          <Radio.Group onChange={onChange}>
            <Radio value={1}>Obtain system time through network</Radio>
            <Radio value={2}>Manually set System Time</Radio>
          </Radio.Group>
        </Form.Item>
        {value === 1 ? (
          <Form.Item
            {...formItemLayout}
            label="NTP Server Address"
            name="ntpServerAddress"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Please input NTP Server Address",
              },{
                pattern: /^(?=.{1,255}$)[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*\.[A-Za-z]{2,}$/,
                message: "Please input correct domain name"
              },{
                max:50,
                message: "Please input more than 50 characters"
              }
            ]}
          >
            <Input
              placeholder="Please input NTP Server Address"
              disabled={!timeSetEdit}
              style={{ width: "400px" }}
              onBlur={(e) => console.log(e.target.value)}
            />
          </Form.Item>
        ) : (
          <Form.Item
            {...formItemLayout}
            label="Set Date and Time"
            name="setDateAndTime"
            rules={[
              {
                required: true,
                message: "Please input Set Date and Time",
              }, 
            ]}
          >
            <DatePicker
              onChange={(e) => console.log(e)}
              onOk={(e) => console.log(e)}
              placeholder="Please input Set Date and Time"
              style={{ width: "400px" }}
            />
          </Form.Item>
        )}
        <Form.Item>
          <Row className="t-btn-row">
            <Col span={4}>
              <Col span={16}>
                {timeSetEdit && (
                  <>
                    <Button type="primary" className="mr16" htmlType="submit">
                      Save
                    </Button>
                    <Button
                      type="default"
                      onClick={() => {
                        restoreDefault();
                      }}
                      loading={resetLoading}
                    >
                      Restore Default
                    </Button>
                  </>
                )}
              </Col>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Alert;
