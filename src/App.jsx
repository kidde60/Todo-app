import { Layout, Avatar, Menu, Breadcrumb } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HomeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

import React, { useState, useEffect } from "react";
import { useTasks } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";
const { Header, Sider, Content: AntdContent } = Layout;

function App() {
  // todo app

  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          background: "#10393b",
          height: "50px",
        }}
      >
        <h4 style={{ color: "#f07235" }}>LOGO</h4>
        <div
          style={{
            border: "1px solid #f07235",
            height: "fit-content",
            borderRadius: "50%",
            padding: "0 2px",
          }}
        >
          <UserOutlined
            style={{
              color: "#f07235",
              fontSize: "20px",
            }}
          />
        </div>
      </div>
      <Layout>
        <Layout>
          <Sider
            collapsed={collapsed}
            onCollapse={toggleSidebar}
            style={{
              minHeight: "100vh",
              background: "#10393b",
              color: "#f07235",
              height: "50px",
            }}
          >
            <Menu
              onClick={({ key }) => {
                // navigate(key);
              }}
              defaultSelectedKeys={[window.location.pathname]}
              style={{
                background: "#10393b",
                fontFamily: "Ubuntu",
              }}
              // theme="#f07235"
            >
              <Menu.Item
                key="/"
                icon={<HomeOutlined />}
                style={{
                  color: "#f07235",
                }}
              >
                Dashboard
              </Menu.Item>
              <Menu.Item
                key="/logout"
                style={{
                  color: "#f07235",
                }}
                icon={<LogoutOutlined />}
              >
                Logout
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ background: "#fff" }}>
            <AntdContent style={{ padding: "0 48px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item
                  className="fw-bold fs-4"
                  style={{ fontFamily: "Ubuntu" }}
                >
                  <h1 className="text-2xl font-bold mb-4">To Do App </h1>
                </Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: "#fff", minHeight: "550px" }}>
                <Content />
              </div>
            </AntdContent>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

function Content() {
  const { addTask } = useTasks();

  // Fetch tasks from localStorage once,
  const handleAddTask = (text) => {
    addTask({ id: Date.now(), text });
    window.location.reload();
  };
  return (
    // <div>
    //   <Routes>
    //     <Route path="/" element={< />} />
    //   </Routes>
    // </div>
    <TaskProvider>
      <div className="max-w-lg mx-auto py-4">
        <TaskForm onSubmit={handleAddTask} />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
