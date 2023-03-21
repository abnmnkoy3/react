import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { useLocation } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';

function Indexpage() {
    const { state } = useLocation();
    const { query } = state;
    let datas: string = sessionStorage.getItem("data") || '{}';
    let session_check = JSON.parse(datas);
    const fdata = new FormData();
    fdata.append('position_id', session_check['position_id']);
    fdata.append('dept', session_check['dept_id']);
    fdata.append('number', session_check['number']);
    const [data_ind, setData_ind] = useState<DataType[]>();
    const [loading, setLoading] = useState(false);
    interface DataType {
        key: React.Key;
        MTD_Objective: any;
        MTD_Objective_Type: any;
        MTD_Weight: any;
        MTD_Weight_Type: any;
        month_1: any;
        month_2: any;
        month_3: any;
        month_4: any;
        month_5: any;
        month_6: any;
        month_7: any;
        month_8: any;
        month_9: any;
        month_10: any;
        month_11: any;
        month_12: any;
        KPI_Actual: any;
        KPI_Result: any;
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
    ];
    const fetchData = () => {
        setLoading(true);
        const data_table: DataType[] = [];
        fetch('https://kpi.vandapac.com/data_kpi_objective', {
            method: 'POST',
            body: fdata,
        })
            .then((res) => res.json())
            .then((res) => {
                for (let i = 0; i < res.length; i++) {
                    if (res[i].MTD_Objective_Type == 'Individual') {
                        setData_ind(res);
                        setLoading(false);
                    }
                }
            }, (error) => {
                setLoading(false);
            });

    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <>
                <Table columns={columns} dataSource={data_ind} loading={loading} />
            </>
        </div>
    );
}

export default Indexpage;