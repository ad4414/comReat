import React, { useState } from "react";
import {
  Modal,
  Transfer,
  message,
} from "antd";
const WrappedEditRoleForm = (props) => {
  let { visible, title, roleList = [], onCancel, roleChangeId } = props;
  const [targetKeys, setTargetKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onChange = (nextTargetKeys, direction, moveKeys) => {
    setTargetKeys(nextTargetKeys);
    console.log("nextTargetKeys", nextTargetKeys);
    console.log("direction", direction);
    console.log("moveKeys", moveKeys);
  };
  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };
  const onScroll = (direction, e) => {
    console.log("direction", direction);
    console.log("target", e.target);
  };
  const onOk = (e) => {
    if (!targetKeys.length) {
      message.error("请选择角色");
      return;
    }
  };
  const dataSource = roleList.map((v) => ({
    key: v.id,
    title: v.roleName,
  }));
  return (
    <Modal
      width="600px"
      height="500px"
      maskClosable={false}
      open={visible}
      onCancel={onCancel}
      okText="确定"
      cancelText="取消"
      title={title}
    >
      <div className="message-select-role-modal">
        <Transfer
          showSearch={true}
          dataSource={dataSource}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          titles={["未选择", "已选择"]}
          onChange={onChange}
          onScroll={onScroll}
          onSelectChange={onSelectChange}
          render={(item) => item.title}
        />
      </div>
    </Modal>
  );
};
export default WrappedEditRoleForm;
