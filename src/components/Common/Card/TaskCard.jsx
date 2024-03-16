import React from "react";
import { Card } from "antd";
import moment from "moment";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { IoCheckmarkDone } from "react-icons/io5";
import { updateStatus } from "../../../redux/features/tasksSlice";
const TaskCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch(deleteTask(id));
  };
  const updateStatusText = item.status === "Not Completed" ? "Completed" : "";
  const items = [
    {
      key: "1",
      label: <a>Edit</a>,
      icon: <EditOutlined />,
    },
    {
      key: "2",
      label: <a>Delete</a>,
      icon: <DeleteOutlined onClick={() => handleDeleteTodo(item.id)} />,
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
      style={{ position: "relative", width: 300 }}>
      <p>{item?.description}</p>
      <p style={{ fontWeight: "600", marginTop: "7px" }}>Deadline:</p>
      <div style={{ display: "flex ", justifyContent: "space-between" }}>
        <p>{item?.deadline}</p>
        <IoCheckmarkDone
          onClick={() =>
            dispatch(updateStatus({ id: item.id, status: updateStatusText }))
          } // Corrected action creator usage
        />
      </div>
    </Card>
  );
};

export default TaskCard;
