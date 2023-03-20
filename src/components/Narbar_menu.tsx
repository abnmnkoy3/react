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
import Indexpage from './KPIPage/indexpage';
import Home from './KPIPage/home';
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







// function Indexpage() {
//   // let data: string = sessionStorage.getItem("data") || '{}';
//   // let session = JSON.parse(data);
//   // console.log(data)
//   return (
//     <div>
//       <div style={{ display: "flex", flexDirection: "row" }}>
//         {sessionStorage.getItem("data")? (
//           <>
//             <App />
//             <Contents />
//           </>
//         ) : ('')}
//       </div>
//     </div>
//   )
// }

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const [isLoggenIn, setisLoggenIn] = useState('');
  let data: string = sessionStorage.getItem("data") || '{}';
  let session = JSON.parse(data);
  const [current, setCurrent] = useState('/Loginsuccess');


  const items: MenuItem[] = [
    // getItem('Login', '/Login', <PieChartOutlined />),
    getItem('KPI', '/Indexpage', <DesktopOutlined />),
    getItem('HOME', '/Loginsuccess', <DesktopOutlined />),
    getItem('INDEX', '/KPI', <DesktopOutlined />),
    getItem('Chemical', '/Chemical', <FileOutlined />),
    getItem('Signout', '/signout', <FileOutlined />),
  ];
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    if (e.key === '/signout') {
      navigate('/Login')
      sessionStorage.removeItem("data");
    }
    else {
      navigate(e.key, { state: { query: e.key } })
    }
  };

  return (
    <>
      <div style={{ overflow: "auto", flexWrap: "nowrap" }}>
        <Layout style={{ minHeight: "100vh", display: "flex"}}>
          {session.logged_in == "TRUE" ? (
            <Sider collapsible theme={'dark'} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
              <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} >2023</div>
              <Menu
                onClick={onClick}
                openKeys={['/Login']}
                defaultSelectedKeys={['/Loginsuccess']}
                mode="inline"
                theme="dark"
                items={items}
              />
            </Sider>
          ) : ('')}
          <Layout className="site-layout" style={{background:"#adc6ff"}} >
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
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Indexpage" element={<Indexpage />}></Route>
      <Route path="/Loginsuccess" element={<Loginsuccess />}></Route>
      <Route path="/KPI" element={<Home />}></Route>
      <Route path="/Chemical" element={<Chemical />}></Route>
      <Route path="/signout" element={<Login />}></Route>
    </Routes>
  </div>
  );
}

export default App;