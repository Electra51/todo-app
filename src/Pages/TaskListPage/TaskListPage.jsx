import React, { useState } from "react";
import { Typography } from "antd";
import { Button } from "antd";
import AddTaskModal from "../../components/Common/AllModal/AddTaskModal";
import { useSelector } from "react-redux";
import { Col, Divider, Row } from "antd";
import TaskCard from "../../components/Common/Card/TaskCard";
import { Tabs } from "antd";
const { Title } = Typography;
const TaskListPage = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const { tasks } = useSelector((state) => state.tasksSlice);
  console.log("tasks", tasks);
  const onChange = (key) => {
    console.log(key);
  };

  const completedTasks = tasks.filter((item) => item.status === "Completed");
  const notCompletedTasks = tasks.filter(
    (item) => item.status === "Not Completed"
  );
  const items = [
    {
      key: "1",
      label: `All (${tasks.length})`,
      children: (
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          {tasks?.map((task, i) => {
            return (
              <Col className="gutter-row" span={6}>
                <TaskCard item={task} key={i} />
              </Col>
            );
          })}
        </Row>
      ),
    },
    {
      key: "2",
      label: `Not Completed (${notCompletedTasks.length})`,
      children: (
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          {notCompletedTasks?.map((task, i) => {
            return (
              <Col className="gutter-row" span={6}>
                <TaskCard item={task} key={i} />
              </Col>
            );
          })}
        </Row>
      ),
    },
    {
      key: "3",
      label: `Completed (${completedTasks.length})`,
      children: (
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          {completedTasks?.map((task, i) => {
            return (
              <Col className="gutter-row" span={6}>
                <TaskCard item={task} key={i} />
              </Col>
            );
          })}
        </Row>
      ),
    },
  ];
  return (
    <>
      <div>
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
        <Divider orientation="left"></Divider>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
      <AddTaskModal setOpen={setOpen} open={open} />
    </>
  );
};

export default TaskListPage;
