import React, { useState } from "react";
import { Typography, Button, Divider, Tabs, Row, Col, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import TaskCard from "../../components/Common/Card/TaskCard";
import AddTaskModal from "../../components/Common/AllModal/AddTaskModal";
import { setPriorityFilter } from "../../redux/features/tasksSlice";

const { Title } = Typography;
const { Option } = Select;

const TaskListPage = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { tasks, selectedPriority } = useSelector((state) => state.tasksSlice);

  const handlePriorityChange = (value) => {
    dispatch(setPriorityFilter(value));
  };

  const onChange = (key) => {
    console.log(key);
  };

  const filteredAllTasks =
    selectedPriority === "all"
      ? tasks
      : tasks.filter((task) => task.priority === selectedPriority);

  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Title style={{ fontSize: "20px" }}>All Tasks List</Title>
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
            onClick={() => setOpen(true)}>
            Add new task
          </Button>
        </div>
        <Divider orientation="left" />
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}>
          <label style={{ fontWeight: "600", fontSize: "15px" }}>
            Select Priority:
          </label>
          <Select
            defaultValue="all"
            style={{ width: 120 }}
            onChange={handlePriorityChange}>
            <Option value="all">All</Option>
            <Option value="high">High</Option>
            <Option value="medium">Medium</Option>
            <Option value="low">Low</Option>
          </Select>
        </div>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <Tabs.TabPane tab={`All (${filteredAllTasks.length})`} key="1">
            <Row gutter={[16, 16]}>
              {filteredAllTasks.map((task) => (
                <Col span={6} key={task.id}>
                  <TaskCard item={task} />
                </Col>
              ))}
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={`Not Completed (${
              filteredAllTasks.filter((task) => task.status === "Not Completed")
                .length
            })`}
            key="2">
            <Row gutter={[16, 16]}>
              {filteredAllTasks
                .filter((task) => task.status === "Not Completed")
                .map((task) => (
                  <Col span={6} key={task.id}>
                    <TaskCard item={task} />
                  </Col>
                ))}
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={`Completed (${
              filteredAllTasks.filter((task) => task.status === "Completed")
                .length
            })`}
            key="3">
            <Row gutter={[16, 16]}>
              {filteredAllTasks
                .filter((task) => task.status === "Completed")
                .map((task) => (
                  <Col span={6} key={task.id}>
                    <TaskCard item={task} />
                  </Col>
                ))}
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </div>
      <AddTaskModal setOpen={setOpen} open={open} />
    </>
  );
};

export default TaskListPage;
