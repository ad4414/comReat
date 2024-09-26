import React, { useState } from "react";
import {
  Form,
  Select,
  DatePicker,
  Space,
  Input,
  Popover,
  Dropdown,
  Checkbox
} from "antd";
import {
  ReloadOutlined,
  SettingOutlined,
  ColumnWidthOutlined,
} from "@ant-design/icons";
const { Option } = Select;
import "./index.less";
const SearchConditionForm = (props) => {
  const { logClassifyArr, operation, alarmLevels, columns } = props;
  const [form] = Form.useForm();
  const [key, setKey] = useState("");
  const addBefore = (
    <Select
      className="t-field-name"
      defaultValue={"操作账号"}
      getPopupContainer={(trigger) => trigger.parentNode}
      onChange={(value) => {
        setKey(value);
      }}
    >
      {operation.map((item) => {
        return (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        );
      })}
    </Select>
  );
  const [checkList, setCheckList] = useState(
    columns.map(({ key }) => {
      return key;
    })
  );
  const checkAll = columns.length === checkList.length;
  const indeterminate =
    checkList.length > 0 && checkList.length < columns.length;
  const onChange = (checkedList) => {
    console.log(checkedList);
    setCheckList(checkedList);
    props.handChangeList(checkedList);
  };
  const content = (
    <div>
      <Checkbox.Group
        options={props.columns.map(({ title, key }) => {
          return { label: title, value: key };
        })}
        value={checkList}
        style={{ display: "grid" }}
        onChange={onChange}
      />
    </div>
  );
  const onCheckAllChange = (e) => {
    setCheckList(e.target.checked ? columns.map((item) => item.key) : []);
    props.handChangeList(
      e.target.checked ? columns.map((item) => item.key) : []
    );
  };
  const title = (
    <div>
      <Checkbox
        indeterminate={indeterminate}
        checked={checkAll}
        onChange={onCheckAllChange}
      >
        展示列
      </Checkbox>
    </div>
  );
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          中等
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          默认
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          大
        </a>
      ),
    },
  ];
  return (
    <Form className="t-common-search-form" layout="inline" form={form}>
      <Form.Item name="level">
        <Select
          style={{ width: 150 }}
          getPopupContainer={(trigger) => trigger.parentNode}
          placeholder={"请选择"}
          allowClear
          options={alarmLevels}
          onChange={(value) => {
            props.onSearch({ level: value });
          }}
        />
      </Form.Item>
      <Form.Item name="logClassify">
        <Select
          style={{ width: 150 }}
          getPopupContainer={(trigger) => trigger.parentNode}
          placeholder={"请选择"}
          allowClear
          options={logClassifyArr}
          onChange={(value) => {
            props.onSearch({ logClassify: value });
          }}
        />
      </Form.Item>
      <Form.Item name="time">
        <DatePicker.RangePicker
          popupClassName="time-range"
          showTime={{
            hideDisabledOptions: true,
          }}
          placeholder={["开始时间", "结束时间"]}
          format={"YYYY-MM-DD HH:mm:ss"}
          onChange={(time) => {
            props.onSearch({ time: time });
          }}
        />
      </Form.Item>
      <Form.Item className="t-input-group" name="key">
        <Space.Compact>
          <Input.Search
            addonBefore={addBefore}
            onSearch={(value) => {
              props.onSearch({
                key: key,
                value: value,
              });
            }}
          ></Input.Search>
        </Space.Compact>
      </Form.Item>
      <span className="t-table-tooltip">
        <Popover
          trigger="click"
          overlayClassName="t-table-tooltip-set"
          placement="bottomLeft"
        >
          <ReloadOutlined
            style={{ fontSize: "26px" }}
            onClick={() => {
              window.location.reload();
            }}
          />
        </Popover>
        <Popover
          title={title}
          content={content}
          trigger="click"
          overlayClassName="t-table-tooltip-set"
        >
          <SettingOutlined style={{ fontSize: "26px" }} />
        </Popover>
        <Dropdown menu={{ items }}>
          <ColumnWidthOutlined style={{ fontSize: "26px" }} rotate={90} />
        </Dropdown>
      </span>
    </Form>
  );
};
export default SearchConditionForm;
