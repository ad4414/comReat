import React from "react";
import { Modal, Button, Row, Col } from "antd";
const DetailModal = (props) => {
  let { visible, title, onCancel, formData } = props;

  return (
    <Modal
      width="600px"
      height={"500px"}
      maskClosable={false}
      open={visible}
      title={title}
      onCancel={onCancel}
      footer={
        <div style={{ overflow: "hidden" }}>
          <Button className="fr" onClick={onCancel}>
            关闭
          </Button>
        </div>
      }
    >
      <div className="modal-message-detail-box">
        <Row className="mb16">
          <Col span={12} className="message-title">
            {formData.typeName}
          </Col>
          <Col span={12} className="text-right">
            {formData.createTime || "-"}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div
              dangerouslySetInnerHTML={{ __html: formData.content || "" }}
            ></div>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default DetailModal;
