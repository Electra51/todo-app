import React, { useState } from "react";
import { Modal, Form, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../redux/features/tasksSlice";

const EditTaskModal = ({ visible, onCancel, task }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    dispatch(updateTask({ id: task.id, ...values }));
    setLoading(false);
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      title="Edit Task"
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={form.submit}>
          Save
        </Button>,
      ]}>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={{ ...task }}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input the title!" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Priority" name="priority">
          <Select>
            <Select.Option value="high">High</Select.Option>
            <Select.Option value="medium">Medium</Select.Option>
            <Select.Option value="low">Low</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditTaskModal;
