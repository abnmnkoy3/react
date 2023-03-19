import React, { useState, useEffect } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Card, MenuProps, Table } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Row, Col } from 'antd';
import { ColumnsType } from 'antd/es/table';


function Table_new() {

    interface DataType {
        key: React.Key;
        name: string;
        age: number;
        address: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'หัวข้อ',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            width: 150,
        }, {
            title: 'เงื่อนไข',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        }, {
            title: 'คะแนน',
            dataIndex: 'address',
            key: '1',
            width: 150,
        }, {
            title: 'ประเภทคะแนน',
            dataIndex: 'address',
            key: '2',
            width: 150,
        }, {
            title: 'ม.ค.',
            dataIndex: 'address',
            key: '3',
        }, {
            title: 'ก.พ.',
            dataIndex: 'address',
            key: '4',
        }, {
            title: 'มี.ค.',
            dataIndex: 'address',
            key: '5',
        }, {
            title: 'เม.ย.',
            dataIndex: 'address',
            key: '8',
        }, {
            title: 'พ.ค.',
            dataIndex: 'address',
            key: '8',
        }, {
            title: 'มิ.ย.',
            dataIndex: 'address',
            key: '8',
        }, {
            title: 'ก.ค.',
            dataIndex: 'address',
            key: '8',
        }, {
            title: 'ส.ค.',
            dataIndex: 'address',
            key: '8',
        }, {
            title: 'ก.ย.',
            dataIndex: 'address',
            key: '8',
        }, {
            title: 'ต.ค.',
            dataIndex: 'address',
            key: '8',
        }, {
            title: 'พ.ย.',
            dataIndex: 'address',
            key: '8',
        }, {
            title: 'ธ.ค.',
            dataIndex: 'address',
            key: '8',
        }, {
            title: 'Actual',
            dataIndex: 'address',
            key: '8',
        }, {
            title: 'Result(%)',
            dataIndex: 'address',
            key: '8',
        },

    ];

    const data: DataType[] = [];

    let data_session: string = sessionStorage.getItem("data") || '{}';
    let session = JSON.parse(data_session);

    const fd = new FormData();
    fd.append('position_id', session.level_user);
    fd.append('dept', session.dept_id);
    fetch(`https://kpi.vandapac.com/get_ms_data`, {
        method: 'POST',
        body: fd
    })
        .then(data_api => data_api.json())
        .then(data_api => {
            // if (data_api.logged_in === "TRUE") {
            //     let session = JSON.stringify(data_api);
            //     sessionStorage.setItem("data", session);
            //     // setisLoggedIn(data.logged_in)
            //     // navigate("/Loginsuccess");
            //     console.log(data_api)
            // } else {
            //     // seterror('Incorrect username or password!')
            // }
            console.log(data_api)
        });


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

function Home() {
    return (
        <>
            <Card>
                <h4>Hello World</h4>
            </Card>
            <br />
            <Card>
                <Table_new />
            </Card>
        </>
    );
};
export default Home;
