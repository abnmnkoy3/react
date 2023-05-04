import React, { Children } from 'react';
import { Alert, Button, Dropdown, MenuProps, Space, Table, Tag } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { useState, useEffect } from 'react';
import './chemical.scss';
import { Image } from 'antd';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
function Indexchemical() {
    const [Data_chemical, setData_chemical] = useState<DataType[]>();
    const [visible, setVisible] = useState(false);
    const [valimg, setValimg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [id_manage, set_id_manage] = useState('');
    const [check_status, set_check_status] = useState(false);
    const [check_status_remake, set_check_status_remake] = useState(false);
    const [check_status_rejected, set_check_status_rejected] = useState(false);
    const [check_status_delete, set_check_status_delete] = useState(false);


    interface DataType {
        // id: React.Key;
        ssds: any;
        id_ssds: string;
        division: string;
        coden_coder: string;
        list_chemical_products: string;
        chemical_name: string;
        cas_no: string;
        un_no: string;
        purpose_use: string;
        substance: string;
        characteristics: string;
        concentration: string;
        density: string;
        control: string;
        component: string;
        un_class: string;
        ghs_physical: string;
        ghs_health: string;
        ghs_environmental: string;
        storage_type: string;
        total_year: string;
        unit_1: string;
        maximum_storage: string;
        unit_2: string;
        container_type: string;
        container_capacity: string;
        container_quantity: string;
        extinguishing: string;
        storage_location: string;
        area_of_use: string;
        ordered_month: string;
        according_the_list_1: string;
        according_the_list_2: string;
        delivery_status: string;
        delivery_date: any;
        order_report: string;
        order_announcement: string;
        hazardous_chemicals: string;
        measurement_record: any;
        select_6_2: string;
        select_6_21: string;
        select_6_23: string;
        select_6_32: string;
        select_9_20: string;
        select_9_22: string;
        select_9_41: string;
        related_laws: string;
        legal_compliance: string;
        management: string;
        fm_sh_17: any;
        note: string;
        status: string;
    }

    const items: MenuProps['items'] = [
        {
            label:
                <>
                    <a id={id_manage} onClick={function (e) {
                        axios.post("http://localhost:3001/data_edit", {
                            id: e.currentTarget.id
                        }).then((res) => {
                            if (res) {
                                let session = JSON.stringify(res);
                                localStorage.setItem("safety_manage", session);
                                sessionStorage.setItem('reject_change', 'reject');
                                localStorage.setItem('menu_edit', '/Chemical');
                                navigate("/Chemical", { state: true });
                            } else {
                                console.log('error')
                            }
                        })
                    }}>แก้ไข</a>
                </>,
            key: '5',
            disabled: check_status_rejected,
        },
        {
            label:
                <>
                    <a id={id_manage} onClick={function (e) {
                        axios.post("http://localhost:3001/disabled_chemical", {
                            id: e.currentTarget.id
                        }).then((res) => {
                            if (res) {
                                alert('ยกเลิกใช้งานสารเคมีเรียบร้อย')
                                fetchData()
                                navigate("/Home_Division");
                            } else {
                                console.log('error')
                            }
                        })
                    }}>ยกเลิกใช้งาน</a>
                </>,
            key: '1',
            disabled: check_status,
        },
        {
            type: 'divider',
        },
        { //#1677ff
            label:
                <>
                    <a id={id_manage} onClick={function (e) {
                        axios.post("http://localhost:3001/remake_chemical", {
                            id: e.currentTarget.id
                        }).then((res) => {
                            if (res) {
                                alert('รอดำเนินการนำกลับมาใช้')
                                fetchData()
                                navigate("/Home_Division");
                            } else {
                                console.log('error')
                            }
                        })
                    }}>นำกลับมาใช้</a>
                </>,
            key: '0',
            disabled: check_status_remake,
        },
        {
            type: 'divider',
        },
        {
            label: <a id={id_manage} onClick={
                function (e) {
                    axios.post("http://localhost:3001/delete_chemical", {
                        id: e.currentTarget.id
                    }).then((res) => {
                        if (res) {
                            alert('ลบข้อมูลเสร็จสิ้น')
                            fetchData()
                            navigate("/Home_Division");
                        } else {
                            console.log('error')
                        }
                    })
                }
            } > ลบข้อมูล</a>,
            key: '2',
            disabled: check_status_delete
        },
    ];

    const columns: ColumnsType<DataType> = [
        {
            title: 'Attached : SDS',
            width: 250,
            dataIndex: 'ssds',
            key: 'name',
            fixed: 'left',
            render: (text) => {
                var index = text.indexOf('.');
                let check = text.substr(index) === '.jpg' || '.png' || '.jpeg' ? '1' : '';
                if (text.substr(index) === '.jpg' || text.substr(index) === '.png' || text.substr(index) === '.jpeg') {
                    return (
                        <>
                            <u style={{ color: '#0958d9' }}><a style={{ color: '#0958d9' }} id={text} onClick={() => {
                                setVisible(true)
                                setValimg(text)

                            }}>{text}</a></u>
                            <Image
                                width={200}
                                key={text}
                                style={{ display: 'none' }}
                                preview={{
                                    visible,
                                    src: `http://localhost/ImageSave/${valimg}`,
                                    onVisibleChange: (value: boolean) => {
                                        setVisible(value);
                                    },
                                }}
                            />
                        </>
                    );
                } else {
                    let url = `http://localhost/ImageSave/${text}`;
                    return (
                        <>
                            <u style={{ color: '#0958d9' }}><a id={text} onClick={() => {
                                window.open(url)
                            }}>{text}</a></u>
                        </>
                    );
                }
            },
        },
        {
            title: 'KEY',
            width: 90,
            dataIndex: 'id_ssds',
            key: 'age',
        },
        { width: 122, title: 'แผนกที่ใช้งาน', dataIndex: 'division', key: '1' },
        { width: 124, title: 'CodeR/CodeN', dataIndex: 'coden_coder', key: '2' },
        { width: 225, title: 'รายชื่อผลิตภัณฑ์เคมี (ตาม PR)', dataIndex: 'list_chemical_products', key: '3' },
        { width: 255, title: 'ชื่อสารเคมีอันตราย / ชื่อทางการค้า', dataIndex: 'chemical_name', key: '4' },
        { width: 90, title: 'CAS No.', dataIndex: 'cas_no', key: '5' },
        { width: 85, title: 'UN No.', dataIndex: 'un_no', key: '6' },
        { width: 175, title: 'วัตถุประสงค์การใช้งาน', dataIndex: 'purpose_use', key: '7' },
        { width: 100, title: 'สถานะสาร', dataIndex: 'substance', key: '8' },
        { width: 106, title: 'ลักษณะสาร', dataIndex: 'characteristics', key: '9' },
        { width: 173, title: 'ความเข้มข้น (%/W/W)', dataIndex: 'concentration', key: '10' },
        { width: 179, title: 'ความหนาแน่น ( g/cm3)', dataIndex: 'density', key: '11' },
        { width: 247, title: 'การควบคุม (ระบุชนิดวัตถุอันตราย)', dataIndex: 'control', key: '12' },
        { width: 110, title: 'องค์ประกอบ', dataIndex: 'component', key: '13' },
        { width: 278, title: 'การจำแนกความเป็นอันตราย : UN  Class', dataIndex: 'un_class', key: '14' },
        { width: 334, title: 'การจำแนกความเป็นอันตราย : GHS  ด้านกายภาพ', dataIndex: 'ghs_physical', key: '15' },
        { width: 327, title: 'การจำแนกความเป็นอันตราย : GHS  ด้านสุขภาพ', dataIndex: 'ghs_health', key: '16' },
        { width: 349, title: 'การจำแนกความเป็นอันตราย : GHS  ด้านสิ่งแวดล้อม', dataIndex: 'ghs_environmental', key: '17' },
        { width: 336, title: 'การจำแนกความเป็นอันตราย : ประเภทการจัดเก็บ', dataIndex: 'storage_type', key: '18' },
        { width: 174, title: 'ปริมาณการใช้รวมต่อปี', dataIndex: 'total_year', key: '19' },
        { width: 69, title: 'หน่วย', dataIndex: 'unit_1', key: '20' },
        { width: 182, title: 'ปริมาณการจัดเก็บสูงสุด', dataIndex: 'maximum_storage', key: '21' },
        { width: 69, title: 'หน่วย', dataIndex: 'unit_2', key: '22' },
        { width: 199, title: 'ลักษณะภาชนะบรรจุ : ชนิด', dataIndex: 'container_type', key: '23' },
        { width: 212, title: 'ลักษณะภาชนะบรรจุ : ความจุ', dataIndex: 'container_capacity', key: '24' },
        { width: 212, title: 'ลักษณะภาชนะบรรจุ : จำนวน', dataIndex: 'container_quantity', key: '25' },
        { width: 135, title: 'สารที่ใช้ดับเพลิง', dataIndex: 'extinguishing', key: '26' },
        { width: 120, title: 'สถานที่จัดเก็บ', dataIndex: 'storage_location', key: '27' },
        { width: 105, title: 'พื้นที่ใช้งาน', dataIndex: 'area_of_use', key: '28' },
        { width: 166, title: 'ปริมาณที่สั่งซื้อ/เดือน', dataIndex: 'ordered_month', key: '29' },
        { width: 332, title: 'ลำดับที่ตามตารางบัญชีรายชื่อสารเคมีอันตราย/1', dataIndex: 'according_the_list_1', key: '30' },
        { width: 513, title: 'ลำดับที่ตามบัญชีรายชื่อวัตถุอันตรายแนบท้ายประกาศกระทรวงอุตสาหกรรม/2', dataIndex: 'according_the_list_2', key: '31' },
        { width: 146, title: 'สถานะการส่ง สอ.1', dataIndex: 'delivery_status', key: '32' },
        { width: 107, title: 'วันที่ส่ง สอ.1', dataIndex: 'delivery_date', key: '33' },
        { width: 292, title: 'ลำดับที่ยื่นส่งรายงาน สอ.1 ตาม FM-SH-72', dataIndex: 'order_report', key: '34' },
        { width: 416, title: 'ลำดับที่ตามประกาศ ฯ เรื่อง การให้แจ้งข้อเท็จจริง (วอ./อก.7)/3', dataIndex: 'order_announcement', key: '35' },
        { width: 219, title: 'สารเคมีอันตรายที่ต้องตรวจวัด', dataIndex: 'hazardous_chemicals', key: '36' },
        { width: 146, title: 'บันทึกการตรวจวัด', dataIndex: 'measurement_record', key: '37' },
        { width: 807, title: '6.2ประกาศ เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นำเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครอง ซึ่งวัตถุอันตรายที่กรมฯ พ.ศ. 2547', dataIndex: 'select_6_2', key: '38' },
        { width: 673, title: '6.21ประกาศกระทรวง เรื่อง ระบบการจำแนกและการสื่อสารความเป็นอันตรายของวัตถุอันตราย พ.ศ. 2555', dataIndex: 'select_6_21', key: '39' },
        { width: 508, title: '6.22กฎกระทรวง ฉบับที่ 4 พ.ศ.2555 (ออกตามความใน พรบ.วัตถุอัตราย 2535)', dataIndex: 'select_6_22', key: '40' },
        { width: 502, align: 'center', title: '6.23 ประกาศกระทรวงอุตสาหกรรม เรื่องบัญชีรายชื่อวัตถุอันตราย พ.ศ. 2556', dataIndex: 'select_6_23', key: '41' },
        { width: 660, title: '6.32 ประกาศกระทรวงอุตสาหกรรม เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นาเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครองซึ่งวัตถุอันตรายที่กรมโรงงานอุตสาหกรรมมีอานาจหน้าที่รับผิดชอบ (ฉบับที่ 2) พ.ศ. 2563', dataIndex: 'select_6_32', key: '42' },
        { width: 600, title: '9.20 กฎกระทรวงกำหนดมาตรฐานในการบริหารจัดการ และ ดำเนินการด้านความปลอดภัยอาชีวอนามัย และ สภาพแวดล้อมในการทำงานเกี่ยวกับสารเคมีอันตราย พ.ศ. 2556', dataIndex: 'select_9_20', key: '43' },
        { width: 600, title: '9.22 เรื่อง แบบบัญชีรายชื่อสารเคมีอันตรายและรายละเอียดข้อมูลความปลอดภัยของสารเคมีอันตราย สอ.1 2556', dataIndex: 'select_9_22', key: '44' },
        { width: 600, title: '9.41 ประกาศกระทรวงอุตสาหกรรมเรื่อง มาตรการความปลอดภัยเกี่ยวกับการจัดการสารเคมีในโรงงานอุตสาหกรรม พ.ศ. 2565', dataIndex: 'select_9_41', key: '45' },
        { width: 155, title: 'กฏหมายที่เกี่ยวข้อง', dataIndex: 'related_laws', key: '46' },
        { width: 177, title: 'การปฎิบัติตามกฎหมาย', dataIndex: 'legal_compliance', key: '47' },
        { width: 151, title: 'การจัดการ/ควบคุม', dataIndex: 'management', key: '49' },
        { width: 290, title: 'วันที่ทบทวนสารเคมี ตาม FM-SH-17 ล่าสุด', dataIndex: 'fm_sh_17', key: '50' },
        { width: 93, title: 'หมายเหตุ', dataIndex: 'note', key: '51' },
        {
            title: 'Action',
            key: 'status',
            fixed: 'right',
            align: 'center',
            width: 211,
            render: (status) => {
                let color;
                let text_status;
                if (status.status === '1') {
                    color = '#d4b106';
                    text_status = 'รอดำเนินการ'
                } else if (status.status === '2') {
                    color = '#389e0d';
                    text_status = 'ขึ้นทะเบียนแล้ว'
                } else if (status.status === '3') {
                    color = '#13c2c2';
                    text_status = 'Rejected'
                }
                else if (status.status === '4') {
                    color = '#cf1322';
                    text_status = 'ยกเลิกใช้งาน'
                }
                return (
                    <Space align="center">
                        {status.status == "3" ? (
                            <>
                                <Tag color={color} >
                                    Rejected
                                </Tag>
                                <Tag color={'#595959'}>
                                    <>
                                        { }
                                        <Dropdown menu={{ items }} trigger={['click']}>

                                            <a id={status.id} style={{ color: '#ffffff' }} onClick={
                                                (e) => {
                                                    e.preventDefault()
                                                    set_id_manage(status.id)
                                                    set_check_status(true)
                                                    set_check_status_remake(true)
                                                    set_check_status_rejected(false)
                                                    set_check_status_delete(false)
                                                }
                                            }>
                                                จัดการ
                                            </a>
                                        </Dropdown>
                                    </>
                                </Tag>
                            </>
                        ) : (
                            <>
                                <Tag color={color} >
                                    {text_status}
                                </Tag>
                                {status.status == "2" ? (
                                    <Tag color={'#595959'}>
                                        <>
                                            <Dropdown menu={{ items }} trigger={['click']}>

                                                <a id={status.id} style={{ color: '#ffffff' }} onClick={
                                                    (e) => {
                                                        e.preventDefault()
                                                        set_id_manage(status.id)
                                                        set_check_status(false)
                                                        set_check_status_remake(true)
                                                        set_check_status_rejected(false)
                                                        set_check_status_delete(true)
                                                    }
                                                }>
                                                    จัดการ
                                                </a>
                                            </Dropdown>
                                        </>
                                    </Tag>
                                ) : (
                                    <>
                                        <Tag color={'#595959'}>
                                            {status.status == "4" ? (
                                                <>
                                                    <Dropdown menu={{ items }} trigger={['click']}>

                                                        <a id={status.id} style={{ color: '#ffffff' }} onClick={
                                                            (e) => {
                                                                e.preventDefault()
                                                                set_id_manage(status.id)
                                                                set_check_status(true)
                                                                set_check_status_remake(false)
                                                                set_check_status_rejected(false)
                                                                set_check_status_delete(false)

                                                            }
                                                        }>
                                                            จัดการ
                                                        </a>
                                                    </Dropdown>
                                                </>
                                            ) : (
                                                <>

                                                    <Dropdown menu={{ items }} trigger={['click']}>

                                                        <a id={status.id} style={{ color: '#ffffff' }} onClick={
                                                            (e) => {
                                                                e.preventDefault()
                                                                set_id_manage(status.id)
                                                                set_check_status(true)
                                                                set_check_status_remake(true)
                                                                set_check_status_rejected(true)
                                                                set_check_status_delete(false)
                                                            }
                                                        }>
                                                            จัดการ
                                                        </a>
                                                    </Dropdown>
                                                </>
                                            )}
                                        </Tag>
                                    </>
                                )}
                            </>
                        )}

                    </Space>
                );
            },
        },
    ];

    const data: DataType[] = [];
    const fetchData = () => {
        setLoading(true);
        var division_check_2 = sessionStorage.getItem('division_check') || '{ }';
        const customHeaders = {
            "Content-Type": "application/json",
        }
        const data_table: DataType[] = [];
        fetch('http://localhost:3001/get_chemical_all', {
            method: 'post',
            headers: customHeaders,
            body: JSON.stringify({ division_check: division_check_2 }),
        })
            .then((res) => res.json())
            .then((res) => {
                for (let i = 0; i < res.length; i++) {
                    setData_chemical(res);
                    setLoading(false);
                }
            }, (error) => {
                setLoading(false);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Table
            rowClassName={(record, index) => {
                if (record.status === '3') {
                    return 'row-light';
                } else if (record.status === '4') {
                    return 'row-dark';
                } else {
                    return 'row-default';
                }
            }
            }
            columns={columns} dataSource={Data_chemical} scroll={{ x: 1300 }} />
    );
}

export default Indexchemical;

