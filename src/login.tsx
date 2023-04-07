// import * as React from "react";

// import 'antd/dist/reset.css';
// import { Button } from 'antd';
import Indexpage from "./components/Narbar_menu";


// export default function Login() {
//     // let isLoggedIn: boolean;
//     const [email, setemail] = useState('')
//     const [password, setpassword] = useState('')
//     const [isLoading, setisLoading] = useState('')
//     const [isLoggedIn, setisLoggedIn] = useState('')
//     const navigate = useNavigate();

//     const handlechange = (event: { target: { value: any } }) => {
//         setemail(event.target.value);
//     }
//     const handlechange2 = (event: { target: { value: any } }) => {
//         setpassword(event.target.value);
//     }
//     // const api = async () => {
//     const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setisLoading('TRUE');

//         setTimeout(() => {
//             const fd = new FormData();
//             fd.append('email', email);
//             fd.append('password', password);
//             fetch(`https://kpi.vandapac.com/auth_api`, {
//                 method: 'POST',
//                 body: fd
//             })
//                 .then(data => data.json())
//                 .then(data => {
//                     if (data.logged_in === "TRUE") {
//                         seterror('Login successfully')
//                         setisLoggedIn(data.logged_in);
//                         let session = JSON.stringify(data);
//                         sessionStorage.setItem("data", session);
//                         navigate("/Loginsuccess");
//                     } else {
//                     }
//                 });
//             setisLoading('FALSE');
//         }, 1000);
//     };

//     return (
//         <div className="App">
//             {isLoggedIn === "TRUE" ? (
//                 <>
//                     <Indexpage />
//                 </>
//             ) : (
//                 <div className="App">
//                     <div className="login-container">
//                         <form className="form" onSubmit={onSubmit}>
//                             <p> PLease Login!</p>
//                             <input
//                                 type="text"
//                                 id="email"
//                                 placeholder="username"
//                                 value={email}
//                                 onChange={handlechange}
//                             />
//                             <input
//                                 type="password"
//                                 id="password"
//                                 placeholder="password"
//                                 autoComplete="new-password"
//                                 value={password}
//                                 onChange={handlechange2}
//                             />
//                             {/* <button type="submit" className="submit" >
//                                 {isLoading === "TRUE" ? "Loggin in....." : "Login In"}
//                             </button> */}
//                             <button type="submit">{isLoading === "TRUE" ? "Loggin in....." : "Login In"}</button>
//                         </form>
//                     </div>
//                 </div>
//             )
//             }
//         </div >
//     );
// }
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css'


// const [isLoggedIn, setisLoggedIn] = useState('')



const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

// const App: React.FC = () => (
function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    const [isLoggedIn, setisLoggedIn] = useState('')
    const navigate = useNavigate();
    const [error, seterror] = useState('')
    const [isLoading, setisLoading] = useState('')
    const onFinish = (values: any) => {
        setisLoading('TRUE');
        setTimeout(() => {
            const fd = new FormData();
            fd.append('email', values.username);
            fd.append('password', values.password);
            fetch(`https://kpi.vandapac.com/auth_api`, {
                method: 'POST',
                body: fd
            })
                .then(data => data.json())
                .then(data => {
                    if (data.logged_in === "TRUE") {
                        let session = JSON.stringify(data);
                        sessionStorage.setItem("data", session);
                        setisLoggedIn(data.logged_in)
                        navigate("/Loginsuccess");
                        console.log(data)
                    } else {
                        seterror('Incorrect username or password!')
                    }
                });
            setisLoading('FALSE');
        }, 1000);
    };
    return (
        < >
            {isLoggedIn === "TRUE" ? (
                <>
                    <Indexpage />
                </>
            ) : (
                <div className='AppLogin' >
                    {/* <p>{!data ? "Loading..." : data}</p> */}
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 800 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {error && <p className="error">{error}</p>}
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                {isLoading === "TRUE" ? "Sign In....." : "Sign In"}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            )}
        </>
    );
}

export default App;