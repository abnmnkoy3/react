import Indexpage from "./components/Narbar_menu";
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css'

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

function App() {
    const [data, setData] = React.useState(null);

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
                        if (data.dept == 'ADMIN') {
                            navigate("/safety_page");
                        } else {
                            navigate("/Home_Division");
                        }
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