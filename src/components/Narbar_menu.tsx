// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Login from '../login';
// import { Link, Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";

// function BasicExample() {
//   let data: string = sessionStorage.getItem("data") || '';
//   const [isLoggenIn, setisLoggenIn] = useState('');
//   const navigate = useNavigate();
//   if (data.length > 0) {
//     // useEffect(() => {
//       let session = JSON.parse(data);
//       setisLoggenIn(session.logged_in);
//     // }, [data])
//   }
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link >
//               <Link to={"/"} >Login</Link>
//             </Nav.Link>
//             {isLoggenIn == "TRUE" ? (
//               <>
//                 <Nav.Link >
//                   <Link to={"/Loginsuccess"}>Home</Link>
//                 </Nav.Link><Nav.Link >
//                   <Link to={"/Chemical"}>Chemical</Link>
//                 </Nav.Link>
//               </>
//             ) : ('')};
//           </Nav>
//           <Nav.Link href="#deets">aa</Nav.Link>
//           <Nav>
//             <Nav.Link eventKey={2} href="#memes">
//               aa
//             </Nav.Link>
//           </Nav>

//         </Container>
//       </Navbar>

//       <Outlet />
//     </>
//   );
// }

// export default BasicExample;

import React, { useState, useEffect } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Row, Col } from 'antd';
import Login from '../login';
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes, useRoutes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Loginsuccess from './loginsuccess';
import Page from './loginsuccess'
import Chemical from './Chemical';
import { Session } from 'inspector';
import Indexpage from './kpipage/indexpage';
import Home from './kpipage/home';
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
  const [isLoggenIn, setisLoggenIn] = useState('');
  let data: string = sessionStorage.getItem("data") || '{}';
  let session = JSON.parse(data);
  const [current, setCurrent] = useState('');

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
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    if (e.key === '/signout') {
      navigate('/Login')
      sessionStorage.removeItem("data");
    }
    else if (e.key === '/Chemical') {
      sessionStorage.removeItem('edit_data');
      navigate(e.key, { state: { query: e.key } })
    }
    else if (e.key === '/Home_Division') {
      sessionStorage.setItem('division_check', session.dept);
      navigate(e.key, { state: { query: e.key } })
    }

    else {
      navigate(e.key, { state: { query: e.key } })
    }
    // if (sessionStorage.getItem('menu_edit') == 'checkMenuedit') {
    //   navigate('/Chemical', { state: { query: '/Chemical' } })
    //   console.log(sessionStorage.getItem('menu_edit'))
    //   sessionStorage.removeItem('menu_edit');
    // }
  };
  // const test1 = sessionStorage.getItem('edit_data') || '{}';

  // useEffect(() => {
  //   if(test1 != '{}'){
  //     navigate('/Chemical', { state: { query:'/Chemical' } })
  //     console.log('test1')
  //   }
  // }, [])


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
                  openKeys={['/Login']}
                  defaultSelectedKeys={['/safety_page']}
                  mode="inline"
                  theme="dark"
                  items={items_safety}
                />

              ) : (
                <Menu
                  onClick={onClick}
                  openKeys={['/Login']}
                  defaultSelectedKeys={['/Home_Division']}
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
        <Route path="/Loginsuccess" element={<Loginsuccess />}></Route>
        <Route path="/Home_Division" element={<Indexchemical />}></Route>
        <Route path="/Chemical" element={<Chemical />}></Route>
        <Route path="/signout" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;