import React, { useState } from "react";
import CommonModal from "./CommonModal";
import { Button, Form, Input, Select, DatePicker } from "antd";
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
  const dispatch = useDispatch();
  const onSubmit = () => {
    console.log(addData);
    dispatch(addTask(addData));
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
