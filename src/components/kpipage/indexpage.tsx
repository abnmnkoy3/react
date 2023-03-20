import React, { useState, useEffect } from 'react';
import { Divider, Table, Steps } from 'antd';
import { useLocation } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';

function Table_data() {
    const { state } = useLocation();
    const { query } = state;
    let datas: string = sessionStorage.getItem("data") || '{}';
    let session_check = JSON.parse(datas);
    const fdata = new FormData();
    fdata.append('position_id', session_check['position_id']);
    fdata.append('dept', session_check['dept_id']);

    interface DataType {
        key: React.Key;
        MTD_Objective: any;
        MTD_Objective_Type: string;
        MTD_Weight: string;
        MTD_Weight_Type: string;
        month_1: string;
        month_2: string;
        month_3: string;
        month_4: string;
        month_5: string;
        month_6: string;
        month_7: string;
        month_8: string;
        month_9: string;
        month_10: string;
        month_11: string;
        month_12: string;
        KPI_Actual: string;
        KPI_Result: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'หัวข้อ',
            dataIndex: 'MTD_Objective',
            key: 'MTD_Objective',
            fixed: 'left',
        },
        {
            title: 'เงื่อนไข',
            dataIndex: 'MTD_Objective_Type',
            key: 'MTD_Objective_Type',
            fixed: 'left',
        },
        {
            title: 'คะแนน',
            dataIndex: 'MTD_Weight',
            key: 'MTD_Weight',

        },
        {
            title: 'ประเภทคะแนน',
            dataIndex: 'MTD_Weight_Type',
            key: 'MTD_Weight_Type',

        },
        {
            title: 'ม.ค.',
            dataIndex: 'month_1',
            key: 'month_1',

        },
        {
            title: 'ก.พ.',
            dataIndex: 'month_2',
            key: 'month_2',

        },
        {
            title: 'มี.ค.',
            dataIndex: 'month_3',
            key: 'month_3',

        },
        {
            title: 'เม.ย.',
            dataIndex: 'month_4',
            key: 'month_4',

        },
        {
            title: 'พ.ค.',
            dataIndex: 'month_5',
            key: 'month_5',

        },
        {
            title: 'มิ.ย.',
            dataIndex: 'month_6',
            key: 'month_6',

        },
        {
            title: 'ก.ค.',
            dataIndex: 'month_7',
            key: 'month_7',

        },
        {
            title: 'ส.ค.',
            dataIndex: 'month_8',
            key: 'month_8',

        },
        {
            title: 'ก.ย.',
            dataIndex: 'month_9',
            key: 'month_9',

        },
        {
            title: 'ต.ค.',
            dataIndex: 'month_10',
            key: 'month_10',

        },
        {
            title: 'พ.ย.',
            dataIndex: 'month_11',
            key: 'month_11',

        },
        {
            title: 'ธ.ค.',
            dataIndex: 'month_12',
            key: 'month_12',

        },
        {
            title: 'Actual',
            dataIndex: 'KPI_Actual',
            key: 'KPI_Actual',

        },
        {
            title: 'Result(%)',
            dataIndex: 'KPI_Result',
            key: 'KPI_Result',
        },
        // {
        //     title: 'Action',
        //     key: 'operation',
        //     fixed: 'right',
        //     render: () => <a>action</a>,
        // },
    ];
    const data_table: DataType[] = [];
    fetch('https://kpi.vandapac.com/data_kpi_objective', {
        method: 'POST',
        body: fdata,
    })
        .then((res) => res.json())
        .then((res) => {
            for (let i = 0; i < res.length - 1; i++) {
                data_table.push({
                    key: i,
                    MTD_Objective: res[i].MTD_Objective,
                    MTD_Objective_Type: res[i].MTD_Objective_Type,
                    MTD_Weight: res[i].MTD_Weight,
                    MTD_Weight_Type: res[i].MTD_Weight_Type,
                    month_1: res[i].month_1,
                    month_2: res[i].month_2,
                    month_3: res[i].month_3,
                    month_4: res[i].month_4,
                    month_5: res[i].month_5,
                    month_6: res[i].month_6,
                    month_7: res[i].month_7,
                    month_8: res[i].month_8,
                    month_9: res[i].month_9,
                    month_10: res[i].month_10,
                    month_11: res[i].month_11,
                    month_12: res[i].month_12,
                    KPI_Actual: res[i].KPI_Actual,
                    KPI_Result: res[i].KPI_Result,
                });
            }
            console.log(data_table)
        });
    return (
        <div>
            <>
                <Table columns={columns} dataSource={data_table} />
            </>
        </div>
    );

}


// function Table_data() {
//     interface DataType {
//         key: React.Key;
//         name: string;
//         age: number;
//         address: string;
//     }

//     const columns: ColumnsType<DataType> = [
//         {
//             title: 'Full Name',
//             width: 100,
//             dataIndex: 'name',
//             key: 'name',
//         },
//         {
//             title: 'Age',
//             width: 100,
//             dataIndex: 'age',
//             key: 'age',
//         },
//         {
//             title: 'Column 1',
//             dataIndex: 'address',
//             key: '1',
//             width: 150,
//         },
//         {
//             title: 'Column 2',
//             dataIndex: 'address',
//             key: '2',
//             width: 150,
//         },
//         {
//             title: 'Column 3',
//             dataIndex: 'address',
//             key: '3',
//             width: 150,
//         },
//         {
//             title: 'Column 4',
//             dataIndex: 'address',
//             key: '4',
//             width: 150,
//         },
//         {
//             title: 'Column 5',
//             dataIndex: 'address',
//             key: '5',
//             width: 150,
//         },
//         {
//             title: 'Column 6',
//             dataIndex: 'address',
//             key: '6',
//             width: 150,
//         },
//         {
//             title: 'Column 7',
//             dataIndex: 'address',
//             key: '7',
//             width: 150,
//         },
//         {
//             title: 'Column 8',
//             dataIndex: 'address',
//             key: '8',
//             width: 150,
//         },
//         {
//             title: 'Column 9',
//             dataIndex: 'address',
//             key: '9',
//             width: 150,
//         },
//         {
//             title: 'Action',
//             key: 'operation',
//             fixed: 'right',
//             width: 100,
//             render: () => <a>action</a>,
//         },
//     ];

//     const data: DataType[] = [];
//     for (let i = 0; i < 100; i++) {
//         data.push({
//             key: i,
//             name: `Edward ${i}`,
//             age: 32,
//             address: `London Park no. ${i}`,
//         });
//     }

//     return (
//         <Table columns={columns} dataSource={data} scroll={{ x: 2000, y: 500 }} />
//     );
// }
function Indexpage() {
    return (
        <div style={{}}>
            <Table_data />
        </div>
    )
}

export default Indexpage;