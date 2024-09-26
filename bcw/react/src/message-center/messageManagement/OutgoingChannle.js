import React from "react";
import { Modal, Form, Alert, Select } from "antd";
const OutgoingChannel = (props) => {
  let { visible, title, onCancel, sendTypeArr, mailListArr, syslogListArr } =
    props;

  console.log(sendTypeArr);

  //表单项布局
  const locale = localStorage.getItem("language");
  const formItemLayout = {
    labelCol: {
      xs: { span: 1 },
      sm: { span: locale === "zh-cn" ? 4 : 6 },
    },
    wrapperCol: {
      xs: { span: 1 },
      sm: { span: locale === "zh-cn" ? 20 : 18 },
    },
  };
  const onOk = () => {
    form.validateFields().then((values) => {
      console.log(values);
    });
  };
  const [form] = Form.useForm();
  return (
    <Modal
      width="600px"
      maskClosable={false}
      destroyOnClose={true}
      cancelText="取消"
      okText="确定"
      title={title}
      onCancel={onCancel}
      open={visible}
      onOk={onOk}
    >
      <Form className="t-message-template-form" form={form}>
        <Alert type="info" showIcon message="为所有消息类型修改外发方式" />
        <Form.Item {...formItemLayout}></Form.Item>
        <Form.Item
          {...formItemLayout}
          label="外发方式"
          name="sendType"
          rules={[{ required: true, message: "请选择外发方式" }]}
        >
          <Select placeholder={"请选择"} >

          {sendTypeArr.map((item) => (
            <Select.Option key={item.dictCode} value={item.dictCode}>
              {item.dictValue}
            </Select.Option>
          ))}
          </Select>
        </Form.Item>
        {form.getFieldValue("sendType") === "MAIL" && (
          <Form.Item
            {...formItemLayout}
            label={"邮箱"}
            name="mailList"
            rules={[{ required: true, message: "请选择" }]}
          >
            <Select mode="multiple" placeholder="请选择">
              {mailListArr.length
                ? mailListArr.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.groupName}
                    </Select.Option>
                  ))
                : null}
            </Select>
          </Form.Item>
        )}
        {form.getFieldValue("sendType") === "SYSLOG " && (
          <Form.Item
            {...formItemLayout}
            label="系统日志"
            name="syslogList"
            rules={[{ required: true, message: "请选择" }]}
          >
            <Select>
              {syslogListArr.length
                ? syslogListArr.map((item) => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))
                : null}
            </Select>
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
};

export default OutgoingChannel;
