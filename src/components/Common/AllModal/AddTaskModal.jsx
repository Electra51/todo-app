import React, { useState } from "react";
import CommonModal from "./CommonModal";
import { Button, Form, Input, Select, DatePicker, Alert } from "antd";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/features/tasksSlice";

const { TextArea } = Input;

const AddTaskModal = ({ setOpen, open }) => {
  const [addData, setAddData] = useState({
    title: "",
    description: "",
    deadline: null,
    priority: "high",
  });
  const [submitWithoutFilling, setSubmitWithoutFilling] = useState(false);
  const dispatch = useDispatch();

  // onsubmit function
  const onSubmit = () => {
    if (
      addData.title === "" &&
      addData.description === "" &&
      !addData.deadline
    ) {
      setSubmitWithoutFilling(true);
      return;
    }
    dispatch(addTask(addData));
    setOpen(false);
    setSubmitWithoutFilling(false);
    setAddData({
      title: "",
      description: "",
      deadline: null,
      priority: " ",
    });
  };

  return (
    <CommonModal setOpen={setOpen} open={open} title={"Add Task"}>
      <Form
        onFinish={onSubmit}
        labelCol={{
          span: 4,
        }}
        layout="vertical"
        style={{
          maxWidth: 600,
        }}>
        {submitWithoutFilling && (
          <Alert message="Please fill in any field." type="error" showIcon />
        )}
        <Form.Item label="Title" name="title">
          <Input
            value={addData.title}
            onChange={(e) => setAddData({ ...addData, title: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea
            rows={4}
            value={addData.description}
            onChange={(e) =>
              setAddData({ ...addData, description: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Deadline" name="deadline">
          <DatePicker
            value={addData.deadline}
            onChange={(date, dateString) =>
              setAddData({ ...addData, deadline: dateString })
            }
          />
        </Form.Item>
        <Form.Item label="Priority" name="priority">
          <Select
            value={addData.priority}
            onChange={(value) => setAddData({ ...addData, priority: value })}>
            <Select.Option value="high">High</Select.Option>
            <Select.Option value="medium">Medium</Select.Option>
            <Select.Option value="low">Low</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </CommonModal>
  );
};

export default AddTaskModal;
