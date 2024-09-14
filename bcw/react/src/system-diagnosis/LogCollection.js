import React from "react";
import { Form, DatePicker, InputNumber, Button } from "antd";
import "./PageDiagnose.less";
const LogCollection = ({ onData, collect, collectDownload }) => {
  return (
    <Form
      className="log-collection-form"
      layout={"inline"}
      onFinish={(values) => {
        onData(values);
        console.log(values);
      }}
    >
      <Form.Item label="采集" colon={false}>
        <Form.Item name="time" rules={[{ required: false, message: "请选择" }]}>
          <DatePicker.RangePicker
            popupClassName="time-range"
            allowClear={true}
            format={"YYYY-MM-DD HH:mm"}
            placeholder={["开始时间", "结束时间"]}
            showTime={{ format: "HH:mm" }}
          />
          <span className="m18">的诊断日志，总文件不超过</span>
        </Form.Item>
        <Form.Item
          name="fileCap"
          initialValue={10}
          rules={[{ required: false, message: "请输入" }]}
        >
          <InputNumber
            min={1}
            max={100}
            precision={0}
            placeholder="请输入"
            style={{ width: 80 }}
          />
          <span className="m18">MB</span>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <div className="collectionRes">
          {collect && (
            <Button type="primary" className="" htmlType="submit">
              采集
            </Button>
          )}
          {collectDownload && (
            <Button type="primary" className="ml16">
              下载
            </Button>
          )}
        </div>
      </Form.Item>
    </Form>
  );
};
export default LogCollection;
