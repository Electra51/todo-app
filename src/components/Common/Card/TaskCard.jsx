import React from "react";
import { Card } from "antd";
import moment from "moment";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com">
        Edit
      </a>
    ),
    icon: <EditOutlined />,
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com">
        Delete
      </a>
    ),
    icon: <DeleteOutlined />,
  },
];
const TaskCard = ({ item }) => (
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
    <p>{item?.deadline}</p>
  </Card>
);
export default TaskCard;
