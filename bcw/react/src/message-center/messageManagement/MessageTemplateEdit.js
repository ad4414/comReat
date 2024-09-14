import React from "react";
import {
  Form,
  Input,
  Select,
  Modal,
  TreeSelect,
  Tooltip,
  Slider,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import VariableDeclaration from "./variableDeclaration";
const { SHOW_PARENT } = TreeSelect;
const MessageTemplateEdit = (props) => {
  const formatTreeData = (data, isDisabled) => {
    if (!data) {
      return [];
    }

    return data.map((item) => {
      if (item.children && item.children.length > 0) {
        return {
          key: item.code,
          value: item.code,
          title: item.name,
          disabled: isDisabled,
          children: formatTreeData(item.children, isDisabled),
        };
      } else {
        return {
          key: item.code,
          value: item.code,
          title: item.name,
          disabled: isDisabled,
          children: [],
        };
      }
    });
  };

  let {
    visible,
    title,
    onCancel,
    formData,
    levelArr,
    scenesCodeArr,
    sendTypeArr,
    mailListArr,
    syslogListArr,
    dictCodeTree,
    hideOutboundChannel,
  } = props;
  // 获取祖先节点
  const findAncestors = (treeData, targetKey) => {
    const ancestorKeys = [];

    function searchAncestors(nodes, path = []) {
      for (let node of nodes) {
        if (node.code === targetKey) {
          // 目标节点找到，将当前路径上的所有节点的id加入结果数组
          ancestorKeys.push(...path);
          return true; // 结束递归
        }
        if (node.children && node.children.length > 0) {
          // 递归搜索子节点，将当前节点的id添加到路径中
          if (searchAncestors(node.children, [...path, node.code])) {
            // 如果在子树中找到了目标节点，当前节点的id也应该加入结果数组
            !ancestorKeys.includes(node.code) && ancestorKeys.push(node.code);
            return true;
          }
        }
      }
      return false;
    }

    searchAncestors(treeData);
    return ancestorKeys.reverse();
  };
  //表单项布局
  const locale = localStorage.getItem("language");
  const formItemLayout = {
    labelCol: {
      xs: { span: 1 },
      sm: { span: locale === "zh-cn" ? 4 : 6 },
    },
    wrapperCol: {
      xs: { span: 1 },
      sm: { span: locale === "zh-cn" ? 19 : 17 },
    },
  };
  const { isCopyTemplate, isPreset } = formData;
  const isDisabled = !isCopyTemplate && isPreset;
  let defaultValues = formData.dictCodeList || [];
  //默认展开
  let defaultExpandedKeys = [];
  formData.dictCodeList &&
    formData.dictCodeList.length &&
    formData.dictCodeList.forEach((itemCode) => {
      defaultExpandedKeys = findAncestors(dictCodeTree, itemCode);
    });
  const treeProps = {
    treeDefaultExpandedKeys: defaultExpandedKeys,
    showSearch: !isDisabled, // 当禁用时，不显示搜索框
    treeData: formatTreeData(dictCodeTree, isDisabled),
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    searchPlaceholder: "请选择",
    maxTagCount: 5,
    style: {
      width: "100%",
    },
  };
  // 处理消息级别
  const marks = {};
  levelArr &&
    levelArr.length &&
    levelArr.map((item) => {
        if(item.dictCode!=="7"){
      return (marks[item.dictCode] = `${item.dictCode}(${item.dictValue})`);}
    });
    
  const [form] = Form.useForm();
  return (
    <Modal
      width="850px"
      maskClosable={false}
      destroyOnClose={true}
      open={visible}
      title={title}
      cancelText={"取消"}
      okText={"确定"}
      onCancel={onCancel}
    >
      <Form
        className="t-message-template-edit-form"
        autoComplete="off"
        form={form}
      >
        <Form.Item
          {...formItemLayout}
          label={"模板名称"}
          name="scenesCode"
          initialValue={formData.scenesCode}
          rules={[
            {
              required: true,
              message: "请选择模板名称",
            },
          ]}
        >
          <Select
            disabled={isDisabled}
            placeholder={"请选择模板名称"}
            options={scenesCodeArr}
          />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label={"模板类型"}
          name="name"
          initialValue={formData.name}
          rules={[
            {
              required: true,
              message: "请选择模板类型",
            },
            { max: 20, message: "模板类型最多20个字符" },
          ]}
        >
          <Input disabled={isDisabled} placeholder={"请输入"} />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label={"消息规则"}
          name={"dictCodeList"}
          initialValue={defaultValues}
          rules={[
            {
              required: true,
              message: "请选择消息规则",
            },
          ]}
        >
          <TreeSelect
            allowClear={!isDisabled}
            popupClassName="tree-select"
            {...treeProps}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label={
            <span>
              消息级别
              <Tooltip
                title={
                  "消息级别设置，将重新筛选已选择的消息规则。例如，消息规则中您已选择了“CPU占用率过高”规则，这一消息类型被指定为4级，而您在此处选择了仅接收1至3级的消息，“CPU占用率过高”这条消息将不会推送给用户。消息级别的详情请参考产品文档。"
                }
              >
                <QuestionCircleOutlined style={{ color: "#999" }} />
              </Tooltip>
            </span>
          }
          name="levelLevelTo"
          initialValue={[formData.level, formData.levelTo]}
          rules={[
            {
              required: true,
              message: "请选择消息级别",
            },
          ]}
        >
          <Slider
            style={{ width: "92%", marginLeft: "23px" }}
            disabled={isDisabled}
            tooltip={false}
            min={0}
            max={6}
            marks={marks}
            range
          />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="消息类型说明"
          name="desc"
          initialValue={formData.desc}
          rules={[
            { max: 50, message: "消息类型说明最多50个字符" },
            { required: false, message: "请输入消息类型说明" },
          ]}
        >
          <Input.TextArea rows={3} placeholder={"请输入"} />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="消息内容"
          name="template"
          initialValue={formData.template}
          rules={[
            { required: true, message: "请输入消息内容" },
            { max: 200, message: "消息内容最多200个字符" },
          ]}
        >
          <Input.TextArea rows={3} placeholder={"请输入"} />
        </Form.Item>
        <Form.Item {...formItemLayout} label="变量说明">
            <VariableDeclaration
            data={formData.variables}
            />


        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="外发方式"
          className={hideOutboundChannel ? "hide" : ""}
          name="sendType"
          initialValue={
            formData.sendType
              ? formData.sendType
              : sendTypeArr && sendTypeArr.length
              ? sendTypeArr[0].dictCode
              : "NOTIFY"
          }
          rules={[{ required: true, message: "请选择外发方式" }]}
        >
          <Select placeholder="请选择" placement="topLeft">
            {sendTypeArr.length
              ? sendTypeArr.map((item) => (
                  <Select.Option key={item.dictCode} value={item.dictCode}>
                    {item.dictValue}
                  </Select.Option>
                ))
              : null}
          </Select>
        </Form.Item>
        {hideOutboundChannel && (
          <>
            {form.getFieldValue("sendType") === "MAIL" && (
              <Form.Item
                {...formItemLayout}
                name="mailList"
                initialValue={formData.mailList}
                rules={[{ required: true, message: "请输入收件人邮箱" }]}
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
            {form.getFieldValue("sendType") === "SYSLOG" && (
              <Form.Item
                {...formItemLayout}
                label="SYSLOG"
                name="syslogList"
                initialValue={formData.syslogList}
                rules={[{ required: true, message: "请选择" }]}
              >
                <Select mode="multiple" placeholder="请选择">
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
          </>
        )}
      </Form>
    </Modal>
  );
};

export default MessageTemplateEdit;
