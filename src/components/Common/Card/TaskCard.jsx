import React, { useState } from "react";
import { Button, Card } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { IoCheckmarkDone } from "react-icons/io5";
import { deleteTask, updateStatus } from "../../../redux/features/tasksSlice";
import EditTaskModal from "../AllModal/EditTaskModal";

const TaskCard = ({ item }) => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const handleEditTask = () => {
    setEditModalVisible(true);
  };
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  const updateStatusText =
    item.status === "Not Completed" ? "Completed" : "Completed";

  const priorityColor =
    item.priority === "high"
      ? "#FFEDED"
      : item.priority === "medium"
      ? "#FFFFAD"
      : "#EDFFFF";

  const items = [
    {
      key: "1",
      label: <a onClick={handleEditTask}>Edit</a>,
      icon: <EditOutlined />,
    },
    {
      key: "2",
      label: <a>Delete</a>,
      icon: <DeleteOutlined />,
      onClick: () => handleDeleteTask(item.id),
    },
  ];

  return (
    <Card
      title={item?.title}
      bordered={false}
      extra={
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight">
          <a href="/#" onClick={(e) => e.preventDefault()}>
            <Space>
              <BsThreeDotsVertical />
            </Space>
          </a>
        </Dropdown>
      }
      style={{
        position: "relative",
        width: 300,
        backgroundColor: priorityColor,
      }}>
      <p>{item?.description}</p>
      <p style={{ fontWeight: "600", marginTop: "7px" }}>Deadline:</p>
      <div style={{ display: "flex ", justifyContent: "space-between" }}>
        <p>{item?.deadline}</p>
        {item.status === "Completed" ? (
          // <span style={{ fontSize: "12px" }}>Completed</span>
          <Button type="primary" size="small" danger>
            Completed
          </Button>
        ) : (
          <div
            onClick={() =>
              dispatch(updateStatus({ id: item.id, status: updateStatusText }))
            }
            style={{
              display: "flex",
              justifyContent: "normal",
              alignItems: "center",
              gap: "3px",
              cursor: "pointer",
              color: "#1876FD",
            }}>
            <IoCheckmarkDone />
            <p style={{ fontSize: "12px" }} className="mark">
              Mark as Completed
            </p>
          </div>
        )}
      </div>
      <EditTaskModal
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        task={item}
      />
    </Card>
  );
};

export default TaskCard;
