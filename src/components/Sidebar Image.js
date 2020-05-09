import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import API from "../pages/API";
import { UserOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [image, setImage] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      let result = await API.get("/notifikasi", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
    };

    fetchData();
  }, []);

  return (
    <div id="sidebar-image">
      <Avatar
        size={80}
        icon={
          image == null ? <UserOutlined /> : <img src={image} />
        }
      />
    </div>
  );
}
