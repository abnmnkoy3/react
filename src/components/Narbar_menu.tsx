import React, { useState, useEffect } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Row, Col } from 'antd';
import Login from '../login';
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes, useRoutes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Loginsuccess from './loginsuccess';
import Page from './loginsuccess'
import Chemical from './Chemical';
import Indexchemical from './Pagesteps/Home_division';
import Safety_page from './Pagesteps/safety_page';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  let data: string = sessionStorage.getItem("data") || '{}';
  let session = JSON.parse(data);
  const [current, setCurrent] = useState('/safety_page');
  const items_safety: MenuItem[] = [
    getItem('SAFETY PAGE', '/safety_page', <DesktopOutlined />),
    getItem('HOME DIVISION', '/Home_Division', <FileOutlined />),
    getItem('Chemical', '/Chemical', <FileOutlined />),
    getItem('Signout', '/signout', <FileOutlined />),

  ];

  const items_more: MenuItem[] = [
    getItem('HOME DIVISION', '/Home_Division', <FileOutlined />),
    getItem('Chemical', '/Chemical', <FileOutlined />),
    getItem('Signout', '/signout', <FileOutlined />),

  ];

  const menu_edit: string = localStorage.getItem('menu_edit') || 'null';
  const safety_manage: string = localStorage.getItem('safety_manage') || 'null';
  const update_reject_ok: string = localStorage.getItem('update_reject_ok') || 'null';
  const update_ok: string = localStorage.getItem('update_ok') || 'null';
  const insert_ok: string = localStorage.getItem('insert_ok') || 'null';

  const onClick: MenuProps['onClick'] = (e) => {

    if (e.key === '/signout') {
      navigate('/Login')
      sessionStorage.removeItem("data");
    }
    else if (e.key === '/Chemical') {
      sessionStorage.removeItem('edit_data');
      sessionStorage.removeItem('menu_edit');
      navigate(e.key, { state: { query: e.key } })
      setCurrent(e.key)
    }
    else if (e.key === '/safety_page') {
      navigate(e.key, { state: { query: e.key } })
      setCurrent(e.key)
    }
    else if (e.key === '/Home_Division') {

      sessionStorage.setItem('division_check', session.dept);
      navigate(e.key, { state: { query: e.key } })
      setCurrent(e.key)
    }
    else {
      if (menu_edit !== 'null') {
        navigate(menu_edit, { state: { query: menu_edit } })
      }
      else if (safety_manage !== 'null') {
        navigate('/Chemical', { state: { query: '/Chemical' } })
      } else if (update_reject_ok !== 'null') {
        navigate(update_reject_ok, { state: { query: update_reject_ok } })
      }
      else if (update_ok !== 'null') {
        navigate(update_ok, { state: { query: update_ok } })
      }
      else if (insert_ok !== 'null') {
        navigate(insert_ok, { state: { query: insert_ok } })
      } else {
        navigate(e.key, { state: { query: e.key } })
      }
    }
  };
  useEffect(() => {
    if (menu_edit !== 'null') {
      setCurrent(menu_edit)
      localStorage.removeItem('menu_edit');
    }
  }, [menu_edit])

  useEffect(() => {
    if (safety_manage !== 'null') {
      setCurrent('/Chemical')
      localStorage.removeItem('safety_manage');
    }
  }, [safety_manage])

  useEffect(() => {
    if (update_reject_ok !== 'null') {
      setCurrent(update_reject_ok)
      localStorage.removeItem('update_reject_ok');
    }
  }, [update_reject_ok])

  useEffect(() => {
    if (update_ok !== 'null') {
      setCurrent(update_ok)
      localStorage.removeItem('update_ok');
    }
  }, [update_ok])

  useEffect(() => {
    if (insert_ok !== 'null') {
      setCurrent(insert_ok)
      localStorage.removeItem('insert_ok');
    }
  }, [insert_ok])

  // console.log(current)

  return (
    <>
      <div style={{ overflow: "auto", flexWrap: "nowrap" }}>
        <Layout style={{ minHeight: "100vh", display: "flex" }}>
          {session.logged_in == "TRUE" ? (
            <Sider collapsible theme={'dark'} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
              <div style={{ height: 32, margin: 16, textAlign: "center", color: "#ffffff", background: 'rgba(255, 255, 255, 0.2)' }} >2023</div>
              {session.dept == "ADMIN" ? (
                <Menu
                  onClick={onClick}
                  defaultOpenKeys={['/safety_page']}
                  selectedKeys={[current]}
                  mode="inline"
                  theme="dark"
                  items={items_safety}
                />
              ) : (
                <Menu
                  onClick={onClick}
                  defaultOpenKeys={['/Home_Division']}
                  selectedKeys={[current]}
                  mode="inline"
                  theme="dark"
                  items={items_more}
                />
              )}
            </Sider>
          ) : ('')}
          <Layout className="site-layout" style={{ background: "#adc6ff" }} >
            <Content style={{ margin: '0', padding: "20px" }}>
              <Contents />
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
function Contents() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/safety_page" element={<Safety_page />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Loginsuccess" element={<Loginsuccess />}></Route>
        <Route path="/Home_Division" element={<Indexchemical />}></Route>
        <Route path="/Chemical" element={<Chemical />}></Route>
        <Route path="/signout" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;