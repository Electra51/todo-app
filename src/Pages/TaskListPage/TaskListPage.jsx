import React from "react";
import { Typography } from "antd";
import { Button, Flex } from "antd";
const { Title } = Typography;
const TaskListPage = () => {
  return (
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
      <Button type="primary" style={{ fontWeight: "600" }}>
        Add new task
      </Button>
    </div>
  );
};

export default TaskListPage;
