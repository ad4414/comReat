import React,{useState} from "react";
import { Form, Input, Select } from "antd";
const SearchForm = (props) => {
  const onSearch = (e) => {
 
  };
  
  return (
    <Form className="t-common-search-form" layout="inline">
      <Form.Item
        name="typeName"
        initialValue={"全部"}
        rules={[{ required: false }]}
      >
        <Select
          placeholder="消息类型:"
          showSearch
          filterOption={(inputValue, option) =>
            option.props.children
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          }
          getPopupContainer={(triggerNode) => triggerNode.parentNode}
        >
          {props.scenesTypeList.map((item) => (
            <Select.Option key={item} value={item} title={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="isRead"
        initialValue={"false"}
        rules={[{ required: false }]}
      >
        <Select
          placeholder="状态:"
          onChange={(e)=>props.isReadChange(e)}
          getPopupContainer={(trigger) => trigger.parentNode}
          
        >
          <Select.Option value="all">
            <span className="placeholder">状态: </span>全部{" "}
          </Select.Option>
          <Select.Option value={"false"}>未读</Select.Option>
          <Select.Option value={"true"}>已读</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="keywords"
        rules={[{ required: false }, { max: 50, message: "最多50个字符" }]}
      >

        <Input.Search
        allowClear
        autoComplete="off"
        onSearch={onSearch}
        placeholder="请输入关键字"
        />
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
