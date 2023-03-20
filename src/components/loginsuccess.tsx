import React from "react";
// import 'bootstrap/dist/css/bootstrap.css'
// import { Card } from "react-bootstrap";
// import { Card } from 'antd';
import { Space, Typography, Table, Tag } from 'antd';
import { Col, Row } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from "react";

function Table_new() {
    interface DataType {
        key: React.Key;
        name: string;
        age: number;
        address: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Full Name',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },

        {
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Column 1',
            dataIndex: 'address',
            key: '1',
            width: 150,
        },
        {
            title: 'Column 2',
            dataIndex: 'address',
            key: '2',
            width: 150,
        },
        {
            title: 'Column 3',
            dataIndex: 'address',
            key: '3',
            width: 150,
        },
        {
            title: 'Column 4',
            dataIndex: 'address',
            key: '4',
            width: 150,
        },
        {
            title: 'Column 5',
            dataIndex: 'address',
            key: '5',
            width: 150,
        },
        {
            title: 'Column 8',
            dataIndex: 'address',
            key: '8',
            width: 150,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            render: () => <a>action</a>,
        },
    ];

    const data: DataType[] = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edward ${i}`,
            age: 32,
            address: `London Park no. ${i}`,
        });
    }
    return (
        <Table columns={columns} dataSource={data} scroll={{ y: 500 }} />
    );
}

function Loginsuccess() {
    const { Text, Link } = Typography;
    let data: string = sessionStorage.getItem("data") || '';
    let session = JSON.parse(data);
    // console.log(session);
    return (
        <>

            <div className="">
                <div className="">
                    <Text>ชื่อพนักงาน: {session.name_title} {session.firstname} {session.lastname}</Text><br />
                    <Text>แผนก: {session.dept} </Text><br />
                    <Text>ส่วนงาน: {session.dvs_sub_name}</Text><br />
                    <Text>ส่วนงาน: {session.dvs_sub_name}</Text><br />
                </div>
            </div>
        </>
    )
}

function Page() {
    return (
        <div>
            <Table_new />
        </div>
    )
}

export default Page