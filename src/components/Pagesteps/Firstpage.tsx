import React from 'react';
import { useEffect, useState } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Rate,
    Row,
    Select,
    Slider,
    Switch,
    Upload,
    Affix,
    Card,
} from 'antd';
import { DatePicker, Radio, Space } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

// import '../../index.css'
const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 12 },
};

const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const onFinish = (values: any) => {
    console.log(values);
};

function Fristpage() {
    const [form] = Form.useForm();
    type SizeType = Parameters<typeof Form>[0]['size'];
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };
    const [data_ind, setData_ind] = useState<DataType[]>();
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
        setData_ind(values)
        let json_to_string = JSON.stringify(data_ind);
        console.log(json_to_string)
        const fd = new FormData();
        fd.append('data_local', json_to_string);

        fetch(`https://kpi.vandapac.com/insert_test_check`, {
            method: 'POST',
            body: fd
        })
            .then(data => data.json())
            .then(data => {
                console.log('ok')
            });
    };
    const options = {
        label: 'Fruit',
        value: 'fruit'
    };
    // const [Data_chemical, setData_chemical] = useState<options[]>();

    return (
        <>
            <div >
                <Card style={{ overflow: "auto", padding: "5px", background: "#f0f0f0" }}>
                    <Form style={{ flexWrap: "nowrap" }} form={form} name="horizontal_login" onFinish={onFinish}
                        {...formItemLayout}
                        layout="horizontal"
                        labelWrap
                        wrapperCol={{ span: 16 }}
                        size={componentSize as SizeType}
                    >
                        <Form.Item
                            name="ssds"
                            label="SSDS"
                            labelAlign="left"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input type="text" placeholder="SSDS" />
                        </Form.Item>
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
                            <Select placeholder="Please select a country">
                                <Option value="1">PD 1</Option>
                                <Option value="2">PD 2</Option>
                                <Option value="3">PD 3</Option>
                                <Option value="4">PD 4</Option>
                                <Option value="5#3">WHL #3</Option>
                                <Option value="6">WHL #5</Option>
                                <Option value="7">WHL #6</Option>
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
                            rules={[{ required: true, message: 'CAS No.' }]}
                        >
                            <Input
                                type="text"
                                placeholder="CAS No."
                            />
                        </Form.Item>
                        <Form.Item
                            name="un_no"
                            labelAlign="left"
                            label="UN No."
                            rules={[{ required: true, message: 'UN' }]}
                        >
                            <Input
                                type="text"
                                placeholder="UN No."
                            />
                        </Form.Item>
                        <Form.Item
                            name="purpose_use"
                            labelAlign="left"
                            label="วัตถุประสงค์การใช้งาน"
                            rules={[{ required: true, message: 'วัตถุประสงค์การใช้งาน' }]}
                        >
                            <Input
                                type="text"
                                placeholder="วัตถุประสงค์การใช้งาน"
                            />
                        </Form.Item>
                        <Form.Item
                            name="substance"
                            labelAlign="left"
                            label="สถานะสาร"
                            rules={[{ required: true, message: 'สถานะสาร' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ของแข็ง</Option>
                                <Option value="2">ของเหลว</Option>
                                <Option value="3">ก๊าซ</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="characteristics"
                            labelAlign="left"
                            label="ลักษณะสาร"
                            rules={[{ required: true, message: 'ลักษณะสาร' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลักษณะสาร"
                            />
                        </Form.Item>
                        <Form.Item
                            name="concentration"
                            labelAlign="left"
                            label="ความเข้มข้น (%/W/W)"
                            rules={[{ required: true, message: 'ความเข้มข้น (%/W/W)' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ความเข้มข้น (%/W/W)"
                            />
                        </Form.Item>
                        <Form.Item
                            name="density"
                            labelAlign="left"
                            label="ความหนาแน่น ( g/cm3)"
                            rules={[{ required: true, message: 'ความหนาแน่น ( g/cm3) ' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ความหนาแน่น ( g/cm3) "
                            />
                        </Form.Item>
                        <Form.Item
                            name="control"
                            labelAlign="left"
                            label="การควบคุม (ระบุชนิดวัตถุอันตราย)"
                            rules={[{ required: true, message: 'การควบคุม (ระบุชนิดวัตถุอันตราย)' }]}
                        >
                            <Select placeholder="-- เลือก --">
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
                            rules={[{ required: true, message: 'องค์ประกอบ' }]}
                        >
                            <Input
                                type="text"
                                placeholder="องค์ประกอบ"
                            />
                        </Form.Item>
                        <Form.Item
                            name="un_class"
                            labelAlign="left"
                            label="การจำแนกความเป็นอันตราย : UN  Class"
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : UN  Class' }]}
                        >
                            <Select placeholder="-- เลือก --">
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
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : GHS  ด้านกายภาพ' }]}
                        >
                            <Select placeholder="-- เลือก --">
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
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : GHS  ด้านสุขภาพ' }]}
                        >
                            <Select placeholder="-- เลือก --">
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
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : GHS  ด้านสิ่งแวดล้อม' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">1. ความเป็นอันตรายต่อสิ่งแวดล้อมทางน้ำ(Hazardous to the aquatic environment)</Option>
                                <Option value="2">2. ความเป็นอันตรายต่อชั้นโอโซน(Hazardous to the ozone layer)</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="storage_type"
                            labelAlign="left"
                            label="การจำแนกความเป็นอันตราย : ประเภทการจัดเก็บ"
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : ประเภทการจัดเก็บ' }]}
                        >
                            <Select placeholder="-- เลือก --">
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
                            rules={[{ required: true, message: 'ปริมาณการใช้รวมต่อปี' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ปริมาณการใช้รวมต่อปี"
                            />
                        </Form.Item>
                        <Form.Item
                            name="unit_1"
                            labelAlign="left"
                            label="หน่วย"
                            rules={[{ required: true, message: 'หน่วย' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">กิโลกรัม</Option>
                                <Option value="2">ลิตร</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="maximum_storage"
                            labelAlign="left"
                            label="ปริมาณการจัดเก็บสูงสุด"
                            rules={[{ required: true, message: 'ปริมาณการจัดเก็บสูงสุด' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ปริมาณการจัดเก็บสูงสุด"
                            />
                        </Form.Item>
                        <Form.Item
                            name="unit_2"
                            labelAlign="left"
                            label="หน่วย"
                            rules={[{ required: true, message: 'หน่วย' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">กิโลกรัม</Option>
                                <Option value="2">ลิตร</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="container_type"
                            labelAlign="left"
                            label="ลักษณะภาชนะบรรจุ : ชนิด"
                            rules={[{ required: true, message: 'ลักษณะภาชนะบรรจุ : ชนิด' }]}
                        >
                            <Select placeholder="-- เลือก --">
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
                            rules={[{ required: true, message: 'ลักษณะภาชนะบรรจุ : ความจุ' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลักษณะภาชนะบรรจุ : ความจุ"
                            />
                        </Form.Item>
                        <Form.Item
                            name="container_quantity"
                            labelAlign="left"
                            label="ลักษณะภาชนะบรรจุ : จำนวน"
                            rules={[{ required: true, message: 'ลักษณะภาชนะบรรจุ : จำนวน' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลักษณะภาชนะบรรจุ : จำนวน"
                            />
                        </Form.Item>
                        <Form.Item
                            name="extinguishing"
                            labelAlign="left"
                            label="สารที่ใช้ดับเพลิง"
                            rules={[{ required: true, message: 'สารที่ใช้ดับเพลิง' }]}
                        >
                            <Select placeholder="-- เลือก --">
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
                            rules={[{ required: true, message: 'สถานที่จัดเก็บ' }]}
                        >
                            <Input
                                type="text"
                                placeholder="สถานที่จัดเก็บ"
                            />
                        </Form.Item>
                        <Form.Item
                            name="area_of_use"
                            labelAlign="left"
                            label="พื้นที่ใช้งาน"
                            rules={[{ required: true, message: 'พื้นที่ใช้งาน' }]}
                        >
                            <Input
                                type="text"
                                placeholder="พื้นที่ใช้งาน"
                            />
                        </Form.Item>
                        <Form.Item
                            name="ordered_month"
                            labelAlign="left"
                            label="ปริมาณที่สั่งซื้อ/เดือน"
                            rules={[{ required: true, message: 'ปริมาณที่สั่งซื้อ/เดือน' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ปริมาณที่สั่งซื้อ/เดือน"
                            />
                        </Form.Item>
                        <Form.Item
                            name="according_the_list_1"
                            labelAlign="left"
                            label="ลำดับที่ตามตารางบัญชีรายชื่อสารเคมีอันตราย/1"
                            rules={[{ required: true, message: 'ลำดับที่ตามตารางบัญชีรายชื่อสารเคมีอันตราย/1' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลำดับที่ตามตารางบัญชีรายชื่อสารเคมีอันตราย/1"
                            />
                        </Form.Item>
                        <Form.Item
                            name="according_the_list_2"
                            labelAlign="left"
                            label="ลำดับที่ตามบัญชีรายชื่อวัตถุอันตรายแนบท้ายประกาศกระทรวงอุตสาหกรรม/2"
                            rules={[{ required: true, message: 'ลำดับที่ตามบัญชีรายชื่อวัตถุอันตรายแนบท้ายประกาศกระทรวงอุตสาหกรรม/2' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลำดับที่ตามบัญชีรายชื่อวัตถุอันตรายแนบท้ายประกาศกระทรวงอุตสาหกรรม/2"
                            />
                        </Form.Item>
                        <Form.Item
                            name="delivery_status"
                            labelAlign="left"
                            label="สถานะการส่ง สอ.1"
                            rules={[{ required: true, message: 'สถานะการส่ง สอ.1' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="delivery_date"
                            labelAlign="left"
                            label="วันที่ส่ง สอ.1"
                            rules={[{ required: true, message: 'วันที่ส่ง สอ.1' }]}
                        >
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item
                            name="order_report"
                            labelAlign="left"
                            label="ลำดับที่ยื่นส่งรายงาน สอ.1 ตาม FM-SH-72"
                            rules={[{ required: true, message: 'ลำดับที่ยื่นส่งรายงาน สอ.1 ตาม FM-SH-72' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลำดับที่ยื่นส่งรายงาน สอ.1 ตาม FM-SH-72"
                            />
                        </Form.Item>
                        <Form.Item
                            name="order_announcement"
                            labelAlign="left"
                            label="ลำดับที่ตามประกาศ ฯ เรื่อง การให้แจ้งข้อเท็จจริง (วอ./อก.7)/3"
                            rules={[{ required: true, message: 'ลำดับที่ตามประกาศ ฯ เรื่อง การให้แจ้งข้อเท็จจริง (วอ./อก.7)/3' }]}
                        >
                            <Input
                                type="text"
                                placeholder="ลำดับที่ตามประกาศ ฯ เรื่อง การให้แจ้งข้อเท็จจริง (วอ./อก.7)/3"
                            />
                        </Form.Item>
                        <Form.Item
                            name="hazardous_chemicals"
                            labelAlign="left"
                            label="สารเคมีอันตรายที่ต้องตรวจวัด"
                            rules={[{ required: true, message: 'สารเคมีอันตรายที่ต้องตรวจวัด ' }]}
                        >
                            <Input
                                type="text"
                                placeholder="สารเคมีอันตรายที่ต้องตรวจวัด"
                            />
                        </Form.Item>
                        <Form.Item
                            name="measurement_record"
                            labelAlign="left"
                            label="บันทึกการตรวจวัด"
                            rules={[{ required: true, message: 'บันทึกการตรวจวัด' }]}
                        >
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item
                            name="select_6_2"
                            labelAlign="left"
                            label="6.2ประกาศ เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นำเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครอง ซึ่งวัตถุอันตรายที่กรมฯ พ.ศ. 2547"
                            rules={[{ required: true, message: '6.2ประกาศ เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นำเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครอง ซึ่งวัตถุอันตรายที่กรมฯ พ.ศ. 2547' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_6_21"
                            labelAlign="left"
                            label="6.21ประกาศกระทรวง เรื่อง ระบบการจำแนกและการสื่อสารความเป็นอันตรายของวัตถุอันตราย พ.ศ. 2555"
                            rules={[{ required: true, message: '6.21ประกาศกระทรวง เรื่อง ระบบการจำแนกและการสื่อสารความเป็นอันตรายของวัตถุอันตราย พ.ศ. 2555' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_6_22"
                            labelAlign="left"
                            label="6.22กฎกระทรวง ฉบับที่ 4 พ.ศ.2555 (ออกตามความใน พรบ.วัตถุอัตราย 2535)"
                            rules={[{ required: true, message: '6.21ประกาศกระทรวง เรื่อง ระบบการจำแนกและการสื่อสารความเป็นอันตรายของวัตถุอันตราย พ.ศ. 2555' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_6_23"
                            labelAlign="left"
                            label="6.23 ประกาศกระทรวงอุตสาหกรรม เรื่องบัญชีรายชื่อวัตถุอันตราย พ.ศ. 2556"
                            rules={[{ required: true, message: '6.23 ประกาศกระทรวงอุตสาหกรรม เรื่องบัญชีรายชื่อวัตถุอันตราย พ.ศ. 2556' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_6_32"
                            labelAlign="left"
                            label="6.32 ประกาศกระทรวงอุตสาหกรรม เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นาเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครองซึ่งวัตถุอันตรายที่กรมโรงงานอุตสาหกรรมมีอานาจหน้าที่รับผิดชอบ (ฉบับที่ 2) พ.ศ. 2563"
                            rules={[{ required: true, message: '6.32 ประกาศกระทรวงอุตสาหกรรม เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นาเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครองซึ่งวัตถุอันตรายที่กรมโรงงานอุตสาหกรรมมีอานาจหน้าที่รับผิดชอบ (ฉบับที่ 2) พ.ศ. 2563' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_9_20"
                            labelAlign="left"
                            label="9.20 กฎกระทรวงกำหนดมาตรฐานในการบริหารจัดการ และ ดำเนินการด้านความปลอดภัยอาชีวอนามัย และ สภาพแวดล้อมในการทำงานเกี่ยวกับสารเคมีอันตราย พ.ศ. 2556"
                            rules={[{ required: true, message: '9.20 กฎกระทรวงกำหนดมาตรฐานในการบริหารจัดการ และ ดำเนินการด้านความปลอดภัยอาชีวอนามัย และ สภาพแวดล้อมในการทำงานเกี่ยวกับสารเคมีอันตราย พ.ศ. 2556' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_9_22"
                            labelAlign="left"
                            label="9.22 เรื่อง แบบบัญชีรายชื่อสารเคมีอันตรายและรายละเอียดข้อมูลความปลอดภัยของสารเคมีอันตราย สอ.1 2556"
                            rules={[{ required: true, message: '9.22 เรื่อง แบบบัญชีรายชื่อสารเคมีอันตรายและรายละเอียดข้อมูลความปลอดภัยของสารเคมีอันตราย สอ.1 2556' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">สอดคล้อง</Option>
                                <Option value="2">ไม่สอดคล้อง</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="select_9_41"
                            labelAlign="left"
                            label="9.41 ประกาศกระทรวงอุตสาหกรรมเรื่อง มาตรการความปลอดภัยเกี่ยวกับการจัดการสารเคมีในโรงงานอุตสาหกรรมพ.ศ. 2565"
                            rules={[{ required: true, message: '9.41 ประกาศกระทรวงอุตสาหกรรมเรื่อง มาตรการความปลอดภัยเกี่ยวกับการจัดการสารเคมีในโรงงานอุตสาหกรรมพ.ศ. 2565' }]}
                        >
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="related_laws"
                            labelAlign="left"
                            label="กฏหมายที่เกี่ยวข้อง"
                            rules={[{ required: true, message: 'กฏหมายที่เกี่ยวข้อง' }]}
                        >
                            <Input
                                type="text"
                                placeholder="กฏหมายที่เกี่ยวข้อง"
                            />
                        </Form.Item>
                        <Form.Item
                            name="legal_compliance"
                            labelAlign="left"
                            label="การปฎิบัติตามกฎหมาย"
                            rules={[{ required: true, message: 'การปฎิบัติตามกฎหมาย' }]}
                        >
                            <Input
                                type="text"
                                placeholder="การปฎิบัติตามกฎหมาย"
                            />
                        </Form.Item>
                        <Form.Item
                            name="management"
                            labelAlign="left"
                            label="การจัดการ/ควบคุม"
                            rules={[{ required: true, message: 'การจัดการ/ควบคุม' }]}
                        >
                            <Input
                                type="text"
                                placeholder="การจัดการ/ควบคุม"
                            />
                        </Form.Item>
                        <Form.Item
                            name="fm_sh_17"
                            labelAlign="left"
                            label="วันที่ทบทวนสารเคมี ตาม FM-SH-17 ล่าสุด"
                            rules={[{ required: true, message: 'วันที่ทบทวนสารเคมี ตาม FM-SH-17 ล่าสุด' }]}
                        >
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item
                            name="note"
                            labelAlign="left"
                            label="หมายเหตุ"
                            rules={[{ required: true, message: 'หมายเหตุ' }]}
                        >
                            <Select placeholder="-- เลือก --" style={{ marginRight: "25px" }}>
                                <Option value="1">ยกเลิกการใช้งาน</Option>
                                <Option value="2">ใช้งานอยู่</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item {...formItemLayout}>
                            <Button htmlType="submit" type="primary">
                                บันทึก
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    )
}

export default Fristpage;