import React, { useState } from "react";
import { Modal, Form, InputNumber, Select, Space } from "antd";

const AlarmModal = (props) => {
  const { visible, onCancel, editIs_LICENSE, formData,isOpen } = props;
  console.log(formData);

  const alarmLevelArr = [
    {
      dictCode: "0",
      dictValue: "紧急",
    },
    {
      dictCode: "1",
      dictValue: "警报",
    },
    {
      dictCode: "2",
      dictValue: "严重",
    },
    {
      dictCode: "3",
      dictValue: "错误",
    },
    {
      dictCode: "4",
      dictValue: "警告",
    },
    {
      dictCode: "5",
      dictValue: "通知",
    },
    {
      dictCode: "6",
      dictValue: "信息",
    },
  ];
  const alarmLevel = alarmLevelArr.map((item) => ({
    value: item.dictCode,
    label: item.dictValue,
  }));
  const locale = localStorage.getItem("language");
  const formItemLayout = {
    labelCol: {
      xs: { span: 1 },
      sm: {
        span:
          locale === "zh-cn"
            ? editIs_LICENSE
              ? 5
              : 3
            : editIs_LICENSE
            ? 8
            : 5,
      },
    },
    wrapperCol: {
      xs: { span: 1 },
      sm: {
        span:
          locale === "zh-cn"
            ? editIs_LICENSE
              ? 19
              : 21
            : editIs_LICENSE
            ? 16
            : 19,
      },
    },
  };
  const [currentData, setCurrentData] = useState(formData);
  const [form] = Form.useForm();
  const onOk = () => {
    form.validateFields().then((values) => {
    const { alarmThreshold, alarmLevel,alarmCondition }=values
    const data={
      id:currentData.id,
      alarmThreshold,
      alarmLevel,
      alarmCondition,
      ...formData
    }
    setCurrentData(data)
      console.log(values);
      console.log(currentData);
    });
    isOpen(false)
  };
  return (
    <Modal
      open={visible}
      title="编辑"
      width="700px"
      maskClosable={false}
      destroyOnClose={true}
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form
        labelAlign="right"
        className="t-page-alarm-setting-edit"
        autoComplete="off"
        initialValues={{
          alarmThreshold: formData.alarmThreshold,
          alarmCondition: formData.alarmCondition,
        }}
        form={form}
      >
        <Form.Item {...formItemLayout} label="告警说明">
          <span>{formData.alarmExplan}</span>
        </Form.Item>
        {editIs_LICENSE && (
          <Form.Item
            {...formItemLayout}
            label="剩余x天开始告警"
            rules={[
              {
                required: true,
                message: "请输入",
              },
            ]}
          >
            <Form.Item
              name="alarmThreshold"
              style={{ display: "inline-block" }}
            >
              <InputNumber
                placeholder="请输入"
                autoComplete="off"
                precision={0}
                style={{ width: 150 }}
                min={1}
                max={30}
              />
            </Form.Item>{" "}
            {" " + "天"}
          </Form.Item>
        )}
        {!editIs_LICENSE && (
          <Form.Item
            {...formItemLayout}
            label="阈值"
            rules={[{ required: true, message: "请输入" }]}
          >
            <Form.Item
              name="alarmThreshold"
              style={{ display: "inline-block" }}
            >
              <InputNumber
                placeholder="请输入"
                autoComplete="off"
                precision={0}
                style={{ width: 150 }}
                min={
                  formData.alarmType === "high"
                    ? formData.otherAlarmThreshold + 1
                    : 0
                }
                max={
                  formData.alarmType === "high"
                    ? 100
                    : formData.otherAlarmThreshold - 1
                }
              />
            </Form.Item>
            %
          </Form.Item>
        )}
        <Form.Item
          {...formItemLayout}
          label="告警级别"
          name="alarmLevel"
          initialValue={
            formData.alarmLevel || formData.alarmLevel == 0
              ? formData.alarmLevel.toString()
              : undefined
          }
          rules={[{ required: true, message: "请选择" }]}
        >
          <Select options={alarmLevel} />
        </Form.Item>
        {!editIs_LICENSE && (
          <Form.Item {...formItemLayout} label="触发条件"  >
           连续检测到{" "}
            <Form.Item
              style={{ display: "inline-block",marginBottom:"15px" }}
              name="alarmCondition"
              rules={[{ required: true, message: "请输入" }]}
            >
              <InputNumber
                placeholder="请输入"
                autoComplete="off"
                style={{ width: 150  }}
                min={3}
                precision={0}
                max={10}
              />
            </Form.Item>{" "}
            次
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
};
export default AlarmModal;
