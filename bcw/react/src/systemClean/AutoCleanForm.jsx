import React from "react";
import { Form, Checkbox, InputNumber, Tooltip, TimePicker, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import "./AutoCleanForm.less";
import dayjs from "dayjs";
const AutoCleanForm = () => {
  const [saveAutoCleanConfig, setSaveAutoCleanConfig] = React.useState(false);
  const locale = localStorage.getItem("language");
  // 表单项布局
  const formItemLayout = {
    labelCol: {
      xs: { span: 1 },
      sm: { span: locale === "zh-cn" ? 10 : 6 },
    },
    wrapperCol: {
      xs: { span: 1 },
      sm: { span: locale === "zh-cn" ? 14 : 18 },
    },
  };
  const [form] = Form.useForm();
  // 表单提交处理函数
  const onFinish = (values) => {
    console.log("Success:", values);
  };
    // 当 Checkbox 状态改变时，重置 remainDays 值
    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setSaveAutoCleanConfig(checked);
    
        form.setFieldsValue({autoCleanEnabled:checked})
        
      };
  return (
    <div>
      <Form
        {...formItemLayout}
        className="t-auto-cleanup-form mt8"
        labelAlign="left"
        onFinish={onFinish}
        form={form}
      >
        <div className="t-item-title">
          <span>自动清理</span>
        </div>
        <div className="ml20 mt20">
          <Form.Item label="清理策略" >
            <div className="flex-box">
              <Form.Item
                name="autoCleanEnabled" // 为 Checkbox 绑定 name
                valuePropName="checked" // 让 Form 处理 checked 状态
                style={{ marginBottom: 0 }}
                rules={[{ required: true, message: "请选择" }]}
              >
                <Checkbox
                  onChange={handleCheckboxChange }
                />
                <span className="ml8">日志留存超过</span>
              </Form.Item>
             
              <Form.Item
                style={{ marginBottom: 0 }}
                name="remainDays"
                rules={[{ required: true, message: "请输入天数" }]}
              >
                <InputNumber
                  min={180}
                  max={999}
                  placeholder="请输入"
                  onChange={(value)=>{
                    form.setFieldsValue( { remainDays: value });
                  }}
                  precision={0}
                   
                  disabled={!saveAutoCleanConfig} // 控制输入框是否可用
                />{" "}
                <span>
                  天{" "}
                  <Tooltip title="文件留存时间达到既定天数，即使磁盘剩余空间充足，也会被清理。">
                    <QuestionCircleOutlined className="ml8" />
                  </Tooltip>
                </span>
              </Form.Item>
            </div>
          </Form.Item>
          <Form.Item
            label="清理时间"
            name="cleanTime"
            rules={[{ required: true, message: "请选择清理时间" }]}
          >
            <TimePicker format="HH:mm:ss" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="mr16" htmlType="submit">
              保存
            </Button>
            <Button onClick={() => form.resetFields()}>重置</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AutoCleanForm;
