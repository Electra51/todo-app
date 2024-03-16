import React, { useState } from "react";
import {
  Typography,
  Button,
  Divider,
  Tabs,
  Row,
  Col,
  Select,
  Space,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import TaskCard from "../../components/Common/Card/TaskCard";
import AddTaskModal from "../../components/Common/AllModal/AddTaskModal";
import { setPriorityFilter } from "../../redux/features/tasksSlice";
import { Grid } from "antd";
import HelmetComponent from "../../components/utils/HelmetComponent";

const { useBreakpoint } = Grid;
const { Title } = Typography;
const { Option } = Select;

const TaskListPage = () => {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { tasks, selectedPriority } = useSelector((state) => state.tasksSlice);

  //priority change function
  const handlePriorityChange = (value) => {
    dispatch(setPriorityFilter(value));
  };

  const onChange = (key) => {
    console.log(key);
  };

  //filter function based on priority
  const filteredAllTasks =
    selectedPriority === "all"
      ? tasks
      : tasks.filter((task) => task.priority === selectedPriority);

  //col based on screen size
  const getColSpan = () => {
    if (screens.xs) {
      return 24; // For small devices, display one card per row
    } else {
      return 6; // For larger devices, display four cards per row
    }
  };

  return (
    <>
      <HelmetComponent title={"Task List | Todo-App"} />
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: `${screens.xs ? "column" : "row"}`,
            justifyContent: `${screens.xs ? "center" : "space-between"}`,
          }}>
          <div style={{ marginBottom: "20px" }}>
            <Space
              direction="vertical"
              align={`${screens.xs ? "center" : "start"}`}>
              <Title style={{ fontSize: "20px" }}>All Tasks List</Title>
              <Title
                style={{
                  fontSize: "14px",
                  color: "#36454F",
                  fontWeight: "400",
                  marginTop: "-10px",
                }}>
                Lorem ipsum is a placeholder text commonly
              </Title>
            </Space>
          </div>
          <Button
            type="primary"
            style={{ fontWeight: "600" }}
            onClick={() => setOpen(true)}>
            Add new task
          </Button>
        </div>
        <Divider orientation="left" />

        {/* priority select filter */}
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

        {/* tab for complete and incomplete task */}
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <Tabs.TabPane tab={`All Task (${filteredAllTasks.length})`} key="1">
            <Row gutter={[16, 16]}>
              {filteredAllTasks.map((task) => (
                <Col span={getColSpan()} key={task.id}>
                  <TaskCard item={task} />
                </Col>
              ))}
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={`Incompleted Tasks (${
              filteredAllTasks.filter((task) => task.status === "Not Completed")
                .length
            })`}
            key="2">
            <Row gutter={[16, 16]}>
              {filteredAllTasks
                .filter((task) => task.status === "Not Completed")
                .map((task) => (
                  <Col span={getColSpan()} key={task.id}>
                    <TaskCard item={task} />
                  </Col>
                ))}
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={`Completed Tasks (${
              filteredAllTasks.filter((task) => task.status === "Completed")
                .length
            })`}
            key="3">
            <Row gutter={[16, 16]}>
              {filteredAllTasks
                .filter((task) => task.status === "Completed")
                .map((task) => (
                  <Col span={getColSpan()} key={task.id}>
                    <TaskCard item={task} />
                  </Col>
                ))}
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </div>

      {/* task add modal */}
      <AddTaskModal setOpen={setOpen} open={open} />
    </>
  );
};

export default TaskListPage;
