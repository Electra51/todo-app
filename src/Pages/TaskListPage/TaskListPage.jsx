import React, { useState } from "react";
import { Typography } from "antd";
import { Button } from "antd";
import AddTaskModal from "../../components/Common/AllModal/AddTaskModal";
const { Title } = Typography;
const TaskListPage = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Title
            style={{
              fontSize: "20px",
            }}>
            All Tasks List
          </Title>
          <Title
            style={{
              fontSize: "14px",
              marginTop: "-05px",
              color: "#36454F",
              fontWeight: "400",
            }}>
            Lorem ipsum is a placeholder text commonly
          </Title>
        </div>
        <Button
          type="primary"
          style={{ fontWeight: "600" }}
          onClick={showModal}>
          Add new task
        </Button>
      </div>
      <AddTaskModal setOpen={setOpen} open={open} />
    </>
  );
};

export default TaskListPage;
