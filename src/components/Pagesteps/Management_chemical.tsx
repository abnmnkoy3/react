import React, { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import {
    Button,
    Form,
    Input,
    Select,
    Card,
    Empty,
} from 'antd';
import { DatePicker, } from 'antd';
import { useNavigate } from "react-router-dom";
import socketIO, { Socket } from 'socket.io-client';

import moment from "moment";
import { useContext } from 'react';

const WS = 'http://localhost:3000';
const Path = socketIO(WS);

const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 12 },
};


// export const Room_test = (socket: Socket) => {
//     socket.on('update-data', () => {
//         console.log('user update data');
//     })
// }



function Fristpage() {
    var division_check_2 = sessionStorage.getItem('division_check') || '{}';
    const [disabled, setDisabled] = useState(false);
    const [check_update, setcheck_update] = useState(false);
    let data: string = sessionStorage.getItem("data") || '{}';
    let session = JSON.parse(data);

    useEffect(() => {
        if (division_check_2 !== 'ADMIN') {
            setDisabled(true)
            console.log(division_check_2)
        } else {
            setDisabled(false)
            console.log(division_check_2)
        }
    }, [])
    const navigate = useNavigate();
    const [form] = Form.useForm();
    type SizeType = Parameters<typeof Form>[0]['size'];
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const [valname, setvalname] = useState('');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };
    const [data_ind, setData_ind] = useState<DataType[]>();
    interface DataType {
        id_check: any;
        ssds: string;
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
        select_6_22: string;
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
    }





    const onFinish = (values: any) => {
        let json_to_string = JSON.stringify(values);
        let string_to_json = JSON.parse(json_to_string);

        Object.entries(string_to_json).forEach(([key, value]) => {
            if (key === "ssds") {
                string_to_json[key] = valname;
                console.log(string_to_json[key])
            }
        });
        let json_to_string_api = JSON.stringify(string_to_json);

        const fd = new FormData();
        fd.append('data_local', json_to_string_api);

        const headers = {
            'Content-Type': 'text/plain'
        };

        if (string_to_json.id_check) {


            let reject_change: string = sessionStorage.getItem("reject_change") || '{}';
            if (reject_change !== '{}') {
                axios.post(`http://localhost:3000/update_data_reject`, {
                    data_set: string_to_json
                }).then(data => {
                    console.log('update')
                    sessionStorage.removeItem("reject_change");
                    navigate('/Home_Division')
                    localStorage.setItem('update_reject_ok', '/Home_Division');
                });
            } else {
                axios.post(`http://localhost:3000/update_data`, {
                    data_set: string_to_json
                }).then(data => {

                    Path.emit('update-data');

                    console.log('update')
                    navigate('/safety_page')
                    localStorage.setItem('update_ok', '/safety_page');

                });
            }

            /*      UPLOAD FILE         */
            const data = new FormData()
            data.append('file', filesname)
            axios.post("http://localhost:3000/upload", data, {
            }).then(res => {
                // console.log('update')
            })
        } else {
            axios.post(`http://localhost:3000/insert_data`, {
                data_set: string_to_json
            }).then(data => {
                console.log('insert')
                navigate('/Home_Division')
                localStorage.setItem('insert_ok', '/Home_Division');
            });
            const data = new FormData()
            data.append('file', filesname)
            axios.post("http://localhost:3000/upload", data, { // receive two parameter endpoint url ,form data 
            }).then(res => { // then print response status
                // console.log('insert')
            })
        }
    }

    /*           SELECT FILE           */
    const [filesname, setFilesname] = useState('');
    const [Substr, setSubstr] = useState('');
    const onChangeHandler = (e: any) => {
        setFilesname(e.target.files[0]);
        setvalname(e.target.files[0].name)

    }
    useEffect(() => {
        var index = valname.indexOf('.');
        setSubstr(valname.substr(index))
    }, [valname])

    /*           SET FILE              */
    const [file, setFile] = useState<File>();
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    let data_edit: string = localStorage.getItem("safety_manage") || '{}';
    let session_edit = JSON.parse(data_edit);

    const [filesnameedit, setFilesnameedit] = useState('');
    useEffect(() => {
        if (data_edit != '{}') {
            setvalname(session_edit.data[0].ssds)
            setcheck_update(true);
            setFilesnameedit(session_edit.data[0].ssds)
            form.setFieldsValue({
                id: session_edit.data[0].id,
                id_check: session_edit.data[0].id,
                id_ssds: session_edit.data[0].id_ssds,
                ssds_show: session_edit.data[0].ssds,
                division: session_edit.data[0].division,
                coden_coder: session_edit.data[0].coden_coder,
                list_chemical_products: session_edit.data[0].list_chemical_products,
                chemical_name: session_edit.data[0].chemical_name,
                cas_no: session_edit.data[0].cas_no,
                un_no: session_edit.data[0].un_no,
                purpose_use: session_edit.data[0].purpose_use,
                substance: session_edit.data[0].substance,
                characteristics: session_edit.data[0].characteristics,
                concentration: session_edit.data[0].concentration,
                density: session_edit.data[0].density,
                control: session_edit.data[0].control,
                component: session_edit.data[0].component,
                un_class: session_edit.data[0].un_class,
                ghs_physical: session_edit.data[0].ghs_physical,
                ghs_health: session_edit.data[0].ghs_health,
                ghs_environmental: session_edit.data[0].ghs_environmental,
                storage_type: session_edit.data[0].storage_type,
                total_year: session_edit.data[0].total_year,
                unit_1: session_edit.data[0].unit_1,
                maximum_storage: session_edit.data[0].maximum_storage,
                unit_2: session_edit.data[0].unit_2,
                container_type: session_edit.data[0].container_type,
                container_capacity: session_edit.data[0].container_capacity,
                container_quantity: session_edit.data[0].container_quantity,
                extinguishing: session_edit.data[0].extinguishing,
                storage_location: session_edit.data[0].storage_location,
                area_of_use: session_edit.data[0].area_of_use,
                ordered_month: session_edit.data[0].ordered_month,
                according_the_list_1: session_edit.data[0].according_the_list_1,
                according_the_list_2: session_edit.data[0].according_the_list_2,
                delivery_status: session_edit.data[0].delivery_status,
                delivery_date: moment(session_edit.data[0].delivery_date),
                order_report: session_edit.data[0].order_report,
                order_announcement: session_edit.data[0].order_announcement,
                hazardous_chemicals: session_edit.data[0].hazardous_chemicals,
                measurement_record: moment(session_edit.data[0].measurement_record),
                select_6_2: session_edit.data[0].select_6_2,
                select_6_21: session_edit.data[0].select_6_21,
                select_6_22: session_edit.data[0].select_6_22,
                select_6_23: session_edit.data[0].select_6_23,
                select_6_32: session_edit.data[0].select_6_32,
                select_9_20: session_edit.data[0].select_9_20,
                select_9_22: session_edit.data[0].select_9_22,
                select_9_41: session_edit.data[0].select_9_41,
                related_laws: session_edit.data[0].related_laws,
                legal_compliance: session_edit.data[0].legal_compliance,
                management: session_edit.data[0].management,
                fm_sh_17: moment(session_edit.data[0].fm_sh_17),
                note: session_edit.data[0].note,
            });
        } else {
            setcheck_update(false);
            setFilesnameedit('');
        }
    }, [])
    return (
        <>
            <div >
                <Card style={{ overflow: "auto", padding: "5px", background: "#f0f0f0" }}>
                    <Form style={{ flexWrap: "nowrap" }} form={form} name="horizontal_login" onFinish={onFinish}
                        {...formItemLayout}
                        layout="horizontal"
                        labelWrap
                        wrapperCol={{ span: 16 }}

                    >
                        {check_update === true ? (
                            <Form.Item
                                name="id_check"
                                label="id_check"
                                hidden
                                labelAlign="left"
                                rules={[{ required: false, message: 'Please input your username!' }]}
                            >
                                <Input type="text" placeholder="ID" />
                            </Form.Item>
                        ) : (<Form.Item
                            name="id_checks"
                            label="id_checks"
                            hidden
                            labelAlign="left"
                            rules={[{ required: false, message: 'Please input your username!' }]}
                        >
                            <Input type="text" placeholder="ID" />
                        </Form.Item>)}
                        {check_update === true ? (
                            <Form.Item
                                name="ssds_show"
                                label="SSDS"
                                labelAlign="left"

                                rules={[{ required: true, message: 'No data' }]}
                            >
                                <Input type="text" hidden placeholder="SSDS" value={valname} />
                                {
                                    <u style={{ color: '#0958d9' }}><a onClick={() => {
                                        window.open(`http://localhost/ImageSave/${filesnameedit}`)
                                    }}>{filesnameedit}</a></u>
                                }
                            </Form.Item>
                        ) : (
                            <Form.Item
                                name="ssds"
                                label="SSDS"
                                labelAlign="left"

                                rules={[{ required: true, message: 'Nofile' }]}
                            >
                                <Input type="file" onChange={onChangeHandler} value={valname} />
                            </Form.Item>
                        )}
                        <Form.Item
                            name="id_ssds"
                            label="ID"
                            labelAlign="left"
                            rules={[{ required: true, message: 'ID' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ID"
                            />
                        </Form.Item>
                        <Form.Item
                            name="division"
                            label="แผนก"
                            labelAlign="left"
                            rules={[{ required: true, message: 'แผนกที่ใช้งาน' }]}
                        >
                            <Select placeholder="Please select a country" >
                                <Option selected value={session.dept}>{session.dept}</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="coden_coder"
                            label="CodeR/CodeN"
                            labelAlign="left"
                            rules={[{ required: true, message: 'CodeR/CodeN' }]}
                        >
                            <Input
                                type="text"
                                placeholder="CodeR/CodeN"
                            />
                        </Form.Item>
                        <Form.Item
                            name="list_chemical_products"
                            labelAlign="left"
                            label="รายชื่อผลิตภัณฑ์เคมี"
                            rules={[{ required: true, message: 'รายชื่อผลิตภัณฑ์เคมี' }]}
                        >
                            <Input
                                type="text"
                                placeholder="รายชื่อผลิตภัณฑ์เคมี (ตาม PR)"
                            />
                        </Form.Item>
                        <Form.Item
                            name="chemical_name"
                            labelAlign="left"
                            label="ชื่อสารเคมีอันตราย / ชื่อทางการค้า"
                            rules={[{ required: true, message: 'ชื่อสารเคมีอันตราย/ชื่อทางการค้า' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ชื่อสารเคมีอันตราย / ชื่อทางการค้า"
                            />
                        </Form.Item>
                        <Form.Item
                            name="cas_no"
                            labelAlign="left"
                            label="CAS No."
                            rules={[{ required: false, message: 'CAS No.' }]}
                        >
                            <Input
                                type="text"
                                placeholder="CAS No."
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="un_no"
                            labelAlign="left"
                            label="UN No."
                            rules={[{ required: false, message: 'UN' }]}
                        >
                            <Input
                                type="text"
                                placeholder="UN No."
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="purpose_use"
                            labelAlign="left"
                            label="วัตถุประสงค์การใช้งาน"
                            rules={[{ required: false, message: 'วัตถุประสงค์การใช้งาน' }]}
                        >
                            <Input
                                type="text"
                                placeholder="วัตถุประสงค์การใช้งาน"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="substance"
                            labelAlign="left"
                            label="สถานะสาร"
                            rules={[{ required: false, message: 'สถานะสาร' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">ของแข็ง</Option>
                                <Option value="2">ของเหลว</Option>
                                <Option value="3">ก๊าซ</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="characteristics"
                            labelAlign="left"
                            label="ลักษณะสาร"
                            rules={[{ required: false, message: 'ลักษณะสาร' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลักษณะสาร"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="concentration"
                            labelAlign="left"
                            label="ความเข้มข้น (%/W/W)"
                            rules={[{ required: false, message: 'ความเข้มข้น (%/W/W)' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ความเข้มข้น (%/W/W)"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="density"
                            labelAlign="left"
                            label="ความหนาแน่น ( g/cm3)"
                            rules={[{ required: false, message: 'ความหนาแน่น ( g/cm3) ' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ความหนาแน่น ( g/cm3) "
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="control"
                            labelAlign="left"
                            label="การควบคุม (ระบุชนิดวัตถุอันตราย)"
                            rules={[{ required: false, message: 'การควบคุม (ระบุชนิดวัตถุอันตราย)' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">วัตถุอันตรายชนิดที่ 1</Option>
                                <Option value="2">วัตถุอันตรายชนิดที่ 2</Option>
                                <Option value="3">วัตถุอันตรายชนิดที่ 3</Option>
                                <Option value="4">วัตถุอันตรายชนิดที่ 4</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="component"
                            labelAlign="left"
                            label="องค์ประกอบ"
                            rules={[{ required: false, message: 'องค์ประกอบ' }]}
                        >
                            <Input
                                type="text"
                                placeholder="องค์ประกอบ"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="un_class"
                            labelAlign="left"
                            label="การจำแนกความเป็นอันตราย : UN  Class"
                            rules={[{ required: false, message: 'การจำแนกความเป็นอันตราย : UN  Class' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">ประเภท 1 - ระเบิดได้ (Explosives)</Option>
                                <Option value="2">ประเภทที่ 2 ก๊าซ (Gases)</Option>
                                <Option value="3">ประเภทที่ 3 ของเหลวไวไฟ (Flammable Liquids)</Option>
                                <Option value="4">ประเภทที่ 4 ของแข็งไวไฟ สารที่ลุกไหม้ได้เอง และสารที่สัมผัสกับน้ำแล้วให้ก๊าซไวไฟ</Option>
                                <Option value="5">ประเภทที่ 5 สารออกซิไดซ์และสารอินทรีย์เปอร์ออกไซด์</Option>
                                <Option value="6">ประเภทที่ 6 สารพิษและสารติดเชื้อ</Option>
                                <Option value="7">ประเภทที่ 7 วัสดุกัมมันตรังสี</Option>
                                <Option value="8">ประเภทที่ 8 สารกัดกร่อน</Option>
                                <Option value="9">ประเภทที่ 9 วัสดุอันตรายเบ็ดเตล็ด</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="ghs_physical"
                            labelAlign="left"
                            label="การจำแนกความเป็นอันตราย : GHS  ด้านกายภาพ"
                            rules={[{ required: false, message: 'การจำแนกความเป็นอันตราย : GHS  ด้านกายภาพ' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">1. วัตถุระเบิด (Explosives)</Option>
                                <Option value="2">2. แก๊สไวไฟ (Flammable gases)</Option>
                                <Option value="3">3. สารละอองลอยไวไฟ (Flammable aerosols)</Option>
                                <Option value="4">4. แก๊สออกซิไดซ์ (Oxidizing gases)</Option>
                                <Option value="5">5. แก๊สภายใต้ความดัน (Gases under pressure)</Option>
                                <Option value="6">6. ของเหลวไวไฟ (Flammable liquids)</Option>
                                <Option value="7">7. ของแข็งไวไฟ (Flammable solids)</Option>
                                <Option value="8">8. สารเคมีที่ทำปฏิกิริยาได้เอง (Self-reactive substances and mixtures)</Option>
                                <Option value="9">9. ของเหลวที่ลุกติดไฟได้เองในอากาศ (Pyrophoric liquids)</Option>
                                <Option value="10">10. ของแข็งที่ลุกติดไฟได้เองในอากาศ (Pyrophoric solids)</Option>
                                <Option value="11">11. สารเคมีที่เกิดความร้อนได้เอง (Self-heating substances and mixtures)</Option>
                                <Option value="12">12. สารเคมีที่สัมผัสน้ำแล้วให้แก๊สไวไฟ (Substances)</Option>
                                <Option value="13">13. ของเหลวออกซิไดซ์ (Oxidizing liquids)</Option>
                                <Option value="14">14. ของแข็งออกซิไดซ์ (Oxidizing solids)</Option>
                                <Option value="15">15. สารเปอร์ออกไซด์อินทรีย์ (Organic peroxides)</Option>
                                <Option value="16">16. สารที่กัดกร่อนโลหะ (Corrosive to metals)</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="ghs_health"
                            labelAlign="left"
                            label="การจำแนกความเป็นอันตราย : GHS  ด้านสุขภาพ"
                            rules={[{ required: false, message: 'การจำแนกความเป็นอันตราย : GHS  ด้านสุขภาพ' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">1. ความเป็นพิษเฉียบพลัน(Acute toxicity)</Option>
                                <Option value="2">2. การกัดกร่อน/ระคายเคืองผิวหนัง(Skin corrosion/irritation)</Option>
                                <Option value="3">3. การทำลายดวงตาอย่างรุนแรง/การระคายเคืองต่อดวงตา(Serious eye damage/eye irritation)</Option>
                                <Option value="4">4. การทำให้ไวต่อการกระตุ้นอาการแพ้ต่อระบบทางเดินหายใจหรือผิวหนัง(Respiratory or skin sensitization)</Option>
                                <Option value="5">5. การกลายพันธุ์ของเซลล์สืบพันธุ์(Germ cell mutagenicity)</Option>
                                <Option value="6">6. ความสามารถในการก่อมะเร็ง(Carcinogenicity)</Option>
                                <Option value="7">7. ความเป็นพิษต่อระบบสืบพันธุ์(Reproductive toxicity)</Option>
                                <Option value="8">8. ความเป็นพิษต่อระบบอวัยวะเป้าหมาย-การได้รับสัมผัสครั้งเดียว(Specific target organ toxicity - Single exposure)</Option>
                                <Option value="9">9. ความเป็นพิษต่อระบบอวัยวะเป้าหมาย-การได้รับสัมผัสซ้ำ(Specific target organ toxicity - Repeated exposure)</Option>
                                <Option value="10">10. อันตรายต่อระบบทางเดินหายใจส่วนล่างหรือทำให้ปอดอักเสบจากการสำลัก(Aspiration hazardous)</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="ghs_environmental"
                            labelAlign="left"
                            label="การจำแนกความเป็นอันตราย : GHS  ด้านสิ่งแวดล้อม"
                            rules={[{ required: false, message: 'การจำแนกความเป็นอันตราย : GHS  ด้านสิ่งแวดล้อม' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">1. ความเป็นอันตรายต่อสิ่งแวดล้อมทางน้ำ(Hazardous to the aquatic environment)</Option>
                                <Option value="2">2. ความเป็นอันตรายต่อชั้นโอโซน(Hazardous to the ozone layer)</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="storage_type"
                            labelAlign="left"
                            label="การจำแนกความเป็นอันตราย : ประเภทการจัดเก็บ"
                            rules={[{ required: false, message: 'การจำแนกความเป็นอันตราย : ประเภทการจัดเก็บ' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">1 วัตถุระเบิด</Option>
                                <Option value="2">2A ก๊าซอัด ก๊าซเหลว หรือก๊าซที่ละลายภายใต้ความดัน</Option>
                                <Option value="3">2B ก๊าซภายใต้ความดันในภาชนะบรรจุขนาดเล็ก(กระป๋องสเปรย์)</Option>
                                <Option value="4">3A ของเหลวไวไฟ จุดวาบไฟ 60 °C</Option>
                                <Option value="5">3B ของเหลวไวไฟที่มีคุณสมบัติเข้ากับน้ำไม่ได้</Option>
                                <Option value="6">4.1A ของแข็งไวไฟที่มีคุณสมบัติระเบิด</Option>
                                <Option value="7">4.1B ของแข็งไวไฟ</Option>
                                <Option value="8">4.2 สารที่มีความเสี่ยงต่อ การลุกไหม้ได้เอง</Option>
                                <Option value="9">4.3 สารที่ให้ก๊าซไวไฟเมื่อสัมผัสน้ำ</Option>
                                <Option value="10">5.1A สารออกซิไดซ์ที่มีความไวในการทําปฏิกิริยามาก</Option>
                                <Option value="11">5.1B สารออกซิไดซ์ที่มีความไวในการทําปฏิกิริยาปานกลาง</Option>
                                <Option value="12">5.2 สารอินทรีย์เปอร์ออกไซด์</Option>
                                <Option value="13">6.1A สารติดไฟได้ที่มีคุณสมบัติเป็นพิษ</Option>
                                <Option value="14">6.1B สารไม่ติดไฟที่มีคุณสมบัติเป็นพิษ</Option>
                                <Option value="15">6.2 สารติดเชื้อ</Option>
                                <Option value="16">7 สารกัมมันตรังสี</Option>
                                <Option value="17">8A สารติดไฟที่มีคุณสมบัติกัดกร่อน</Option>
                                <Option value="18">8B สารไม่ติดไฟที่มีคุณสมบัติกัดกร่อน</Option>
                                <Option value="19">10 ของเหลวตดไฟได้ ที่ไม่จัดอยู่ในประเภท3A หรือ 3B</Option>
                                <Option value="20">11 ของแข็งติดไฟได้</Option>
                                <Option value="21">12 ของเหลวไม่ติดไฟ</Option>
                                <Option value="22">13 ของแข็งไม่ติดไฟ</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="total_year"
                            labelAlign="left"
                            label="ปริมาณการใช้รวมต่อปี"
                            rules={[{ required: false, message: 'ปริมาณการใช้รวมต่อปี' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ปริมาณการใช้รวมต่อปี"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="unit_1"
                            labelAlign="left"
                            label="หน่วย"
                            rules={[{ required: false, message: 'หน่วย' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">กิโลกรัม</Option>
                                <Option value="2">ลิตร</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="maximum_storage"
                            labelAlign="left"
                            label="ปริมาณการจัดเก็บสูงสุด"
                            rules={[{ required: false, message: 'ปริมาณการจัดเก็บสูงสุด' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ปริมาณการจัดเก็บสูงสุด"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="unit_2"
                            labelAlign="left"
                            label="หน่วย"
                            rules={[{ required: false, message: 'หน่วย' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">กิโลกรัม</Option>
                                <Option value="2">ลิตร</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="container_type"
                            labelAlign="left"
                            label="ลักษณะภาชนะบรรจุ : ชนิด"
                            rules={[{ required: false, message: 'ลักษณะภาชนะบรรจุ : ชนิด' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">กระป๋อง</Option>
                                <Option value="2">ถังเหล็ก</Option>
                                <Option value="2">แกลลอนพลาสติก</Option>
                                <Option value="2">ปี๊บ</Option>
                                <Option value="2">ขวดแก้ว</Option>
                                <Option value="2">หลอด</Option>
                                <Option value="2">แท่ง</Option>
                                <Option value="2">ถังก๊าซเหล็กกล้า</Option>
                                <Option value="2">บรรจุภัณฑ์ IBC (Intermediate Bulk Containers)</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="container_capacity"
                            labelAlign="left"
                            label="ลักษณะภาชนะบรรจุ : ความจุ"
                            rules={[{ required: false, message: 'ลักษณะภาชนะบรรจุ : ความจุ' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลักษณะภาชนะบรรจุ : ความจุ"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="container_quantity"
                            labelAlign="left"
                            label="ลักษณะภาชนะบรรจุ : จำนวน"
                            rules={[{ required: false, message: 'ลักษณะภาชนะบรรจุ : จำนวน' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลักษณะภาชนะบรรจุ : จำนวน"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="extinguishing"
                            labelAlign="left"
                            label="สารที่ใช้ดับเพลิง"
                            rules={[{ required: false, message: 'สารที่ใช้ดับเพลิง' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">ผงเคมีแห้ง (Dry Chemical)</Option>
                                <Option value="2">น้ำยาเหลวระเหย</Option>
                                <Option value="3">ก๊าซคาร์บอนไดออกไซด์ (CO2) </Option>
                                <Option value="4">โฟม</Option>
                                <Option value="5">เคมีน้ำ</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="storage_location"
                            labelAlign="left"
                            label="สถานที่จัดเก็บ"
                            rules={[{ required: false, message: 'สถานที่จัดเก็บ' }]}
                        >
                            <Input
                                type="text"
                                placeholder="สถานที่จัดเก็บ"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="area_of_use"
                            labelAlign="left"
                            label="พื้นที่ใช้งาน"
                            rules={[{ required: false, message: 'พื้นที่ใช้งาน' }]}
                        >
                            <Input
                                type="text"
                                placeholder="พื้นที่ใช้งาน"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="ordered_month"
                            labelAlign="left"
                            label="ปริมาณที่สั่งซื้อ/เดือน"
                            rules={[{ required: false, message: 'ปริมาณที่สั่งซื้อ/เดือน' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ปริมาณที่สั่งซื้อ/เดือน"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="according_the_list_1"
                            labelAlign="left"
                            label="ลำดับที่ตามตารางบัญชีรายชื่อสารเคมีอันตราย/1"
                            rules={[{ required: false, message: 'ลำดับที่ตามตารางบัญชีรายชื่อสารเคมีอันตราย/1' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลำดับที่ตามตารางบัญชีรายชื่อสารเคมีอันตราย/1"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="according_the_list_2"
                            labelAlign="left"
                            label="ลำดับที่ตามบัญชีรายชื่อวัตถุอันตรายแนบท้ายประกาศกระทรวงอุตสาหกรรม/2"
                            rules={[{ required: false, message: 'ลำดับที่ตามบัญชีรายชื่อวัตถุอันตรายแนบท้ายประกาศกระทรวงอุตสาหกรรม/2' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลำดับที่ตามบัญชีรายชื่อวัตถุอันตรายแนบท้ายประกาศกระทรวงอุตสาหกรรม/2"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="delivery_status"
                            labelAlign="left"
                            label="สถานะการส่ง สอ.1"
                            rules={[{ required: false, message: 'สถานะการส่ง สอ.1' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="delivery_date"
                            labelAlign="left"
                            label="วันที่ส่ง สอ.1"
                            rules={[{ required: false, message: 'วันที่ส่ง สอ.1' }]}
                        >
                            <DatePicker style={{ width: '100%' }} disabled={disabled} />
                        </Form.Item>
                        <Form.Item
                            name="order_report"
                            labelAlign="left"
                            label="ลำดับที่ยื่นส่งรายงาน สอ.1 ตาม FM-SH-72"
                            rules={[{ required: false, message: 'ลำดับที่ยื่นส่งรายงาน สอ.1 ตาม FM-SH-72' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลำดับที่ยื่นส่งรายงาน สอ.1 ตาม FM-SH-72"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="order_announcement"
                            labelAlign="left"
                            label="ลำดับที่ตามประกาศ ฯ เรื่อง การให้แจ้งข้อเท็จจริง (วอ./อก.7)/3"
                            rules={[{ required: false, message: 'ลำดับที่ตามประกาศ ฯ เรื่อง การให้แจ้งข้อเท็จจริง (วอ./อก.7)/3' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลำดับที่ตามประกาศ ฯ เรื่อง การให้แจ้งข้อเท็จจริง (วอ./อก.7)/3"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="hazardous_chemicals"
                            labelAlign="left"
                            label="สารเคมีอันตรายที่ต้องตรวจวัด"
                            rules={[{ required: false, message: 'สารเคมีอันตรายที่ต้องตรวจวัด ' }]}
                        >
                            <Input
                                type="text"
                                placeholder="สารเคมีอันตรายที่ต้องตรวจวัด"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="measurement_record"
                            labelAlign="left"
                            label="บันทึกการตรวจวัด"
                            rules={[{ required: false, message: 'บันทึกการตรวจวัด' }]}
                        >
                            <DatePicker style={{ width: '100%' }} disabled={disabled} />
                        </Form.Item>
                        <Form.Item
                            name="select_6_2"
                            labelAlign="left"
                            label="6.2ประกาศ เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นำเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครอง ซึ่งวัตถุอันตรายที่กรมฯ พ.ศ. 2547"
                            rules={[{ required: false, message: '6.2ประกาศ เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นำเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครอง ซึ่งวัตถุอันตรายที่กรมฯ พ.ศ. 2547' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_6_21"
                            labelAlign="left"
                            label="6.21ประกาศกระทรวง เรื่อง ระบบการจำแนกและการสื่อสารความเป็นอันตรายของวัตถุอันตราย พ.ศ. 2555"
                            rules={[{ required: false, message: '6.21ประกาศกระทรวง เรื่อง ระบบการจำแนกและการสื่อสารความเป็นอันตรายของวัตถุอันตราย พ.ศ. 2555' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_6_22"
                            labelAlign="left"
                            label="6.22กฎกระทรวง ฉบับที่ 4 พ.ศ.2555 (ออกตามความใน พรบ.วัตถุอัตราย 2535)"
                            rules={[{ required: false, message: '6.21ประกาศกระทรวง เรื่อง ระบบการจำแนกและการสื่อสารความเป็นอันตรายของวัตถุอันตราย พ.ศ. 2555' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_6_23"
                            labelAlign="left"
                            label="6.23 ประกาศกระทรวงอุตสาหกรรม เรื่องบัญชีรายชื่อวัตถุอันตราย พ.ศ. 2556"
                            rules={[{ required: false, message: '6.23 ประกาศกระทรวงอุตสาหกรรม เรื่องบัญชีรายชื่อวัตถุอันตราย พ.ศ. 2556' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_6_32"
                            labelAlign="left"
                            label="6.32 ประกาศกระทรวงอุตสาหกรรม เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นาเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครองซึ่งวัตถุอันตรายที่กรมโรงงานอุตสาหกรรมมีอานาจหน้าที่รับผิดชอบ (ฉบับที่ 2) พ.ศ. 2563"
                            rules={[{ required: false, message: '6.32 ประกาศกระทรวงอุตสาหกรรม เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นาเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครองซึ่งวัตถุอันตรายที่กรมโรงงานอุตสาหกรรมมีอานาจหน้าที่รับผิดชอบ (ฉบับที่ 2) พ.ศ. 2563' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_9_20"
                            labelAlign="left"
                            label="9.20 กฎกระทรวงกำหนดมาตรฐานในการบริหารจัดการ และ ดำเนินการด้านความปลอดภัยอาชีวอนามัย และ สภาพแวดล้อมในการทำงานเกี่ยวกับสารเคมีอันตราย พ.ศ. 2556"
                            rules={[{ required: false, message: '9.20 กฎกระทรวงกำหนดมาตรฐานในการบริหารจัดการ และ ดำเนินการด้านความปลอดภัยอาชีวอนามัย และ สภาพแวดล้อมในการทำงานเกี่ยวกับสารเคมีอันตราย พ.ศ. 2556' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_9_22"
                            labelAlign="left"
                            label="9.22 เรื่อง แบบบัญชีรายชื่อสารเคมีอันตรายและรายละเอียดข้อมูลความปลอดภัยของสารเคมีอันตราย สอ.1 2556"
                            rules={[{ required: false, message: '9.22 เรื่อง แบบบัญชีรายชื่อสารเคมีอันตรายและรายละเอียดข้อมูลความปลอดภัยของสารเคมีอันตราย สอ.1 2556' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_9_41"
                            labelAlign="left"
                            label="9.41 ประกาศกระทรวงอุตสาหกรรมเรื่อง มาตรการความปลอดภัยเกี่ยวกับการจัดการสารเคมีในโรงงานอุตสาหกรรมพ.ศ. 2565"
                            rules={[{ required: false, message: '9.41 ประกาศกระทรวงอุตสาหกรรมเรื่อง มาตรการความปลอดภัยเกี่ยวกับการจัดการสารเคมีในโรงงานอุตสาหกรรมพ.ศ. 2565' }]}
                        >
                            <Select placeholder="-- เลือก --" disabled={disabled}>
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="related_laws"
                            labelAlign="left"
                            label="กฏหมายที่เกี่ยวข้อง"
                            rules={[{ required: false, message: 'กฏหมายที่เกี่ยวข้อง' }]}
                        >
                            <Input
                                type="text"
                                placeholder="กฏหมายที่เกี่ยวข้อง"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="legal_compliance"
                            labelAlign="left"
                            label="การปฎิบัติตามกฎหมาย"
                            rules={[{ required: false, message: 'การปฎิบัติตามกฎหมาย' }]}
                        >
                            <Input
                                type="text"
                                placeholder="การปฎิบัติตามกฎหมาย"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="management"
                            labelAlign="left"
                            label="การจัดการ/ควบคุม"
                            rules={[{ required: false, message: 'การจัดการ/ควบคุม' }]}
                        >
                            <Input
                                type="text"
                                placeholder="การจัดการ/ควบคุม"
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item
                            name="fm_sh_17"
                            labelAlign="left"
                            label="วันที่ทบทวนสารเคมี ตาม FM-SH-17 ล่าสุด"
                            rules={[{ required: false, message: 'วันที่ทบทวนสารเคมี ตาม FM-SH-17 ล่าสุด' }]}
                        >
                            <DatePicker style={{ width: '100%' }} disabled={disabled} />
                        </Form.Item>
                        <Form.Item
                            name="note"
                            labelAlign="left"
                            label="หมายเหตุ"
                            rules={[{ required: false, message: 'หมายเหตุ' }]}
                        >
                            <Select placeholder="-- เลือก --" style={{ marginRight: "25px" }} disabled={disabled}>
                                <Option value="1">ยกเลิกการใช้งาน</Option>
                                <Option value="2">ใช้งานอยู่</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            hidden
                            name="status"
                            labelAlign="left"
                            label="status"
                        >
                            <Input
                                type="text"
                                placeholder="การจัดการ/ควบคุม" value='1'
                                disabled={disabled}
                            />
                        </Form.Item>
                        <Form.Item {...formItemLayout}>
                            <Button htmlType="submit" type="primary">
                                บันทึก
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
            {/* <div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input id="message" type="text" value={message} onChange={handleMessageChange} />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div> */}
        </>
    )
}

export default Fristpage;