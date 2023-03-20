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
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};


function Fristpage() {
    const [form] = Form.useForm();
    type SizeType = Parameters<typeof Form>[0]['size'];
    const [componentSize, setComponentSize] = useState<SizeType | 'small'>('small');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const onFinish = (values: any) => {
        console.log('Finish:', values);
    };
    return (
        <>
            <div >
                <Card style={{ overflow: "auto", padding: "5px" }}>
                    <Form style={{ flexWrap: "nowrap" }} form={form} name="horizontal_login" onFinish={onFinish}
                        // initialValues={{ size: 'small' }}
                        layout="inline"
                        size={componentSize as SizeType}
                    >
                        <Form.Item style={{ marginRight: "-62px" }}>
                            <br /><br />
                            <br /><br />
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <br /><br />
                        </Form.Item>
                        <Form.Item
                            name="Attached"
                            style={{ width: '10%' }}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <label style={{ padding: "5px" }}>SSDS<a style={{ color: "red" }}> *</a></label>
                            <Input type="text" placeholder="Attached" />
                        </Form.Item>
                        <Form.Item
                            name="KEY"
                            style={{ width: '10%' }}
                            rules={[{ required: true, message: 'KEY' }]}
                        >
                            <label style={{ padding: "5px" }}>ID<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="KEY"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Division"
                            style={{ width: '17%' }}
                            rules={[{ required: true, message: 'แผนกที่ใช้งาน' }]}
                        >
                            <label style={{ padding: "5px" }}>แผนก<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="Please select a country">
                                <Option value="PD1">PD 1</Option>
                                <Option value="DP2">PD 2</Option>
                                <Option value="DP3">PD 3</Option>
                                <Option value="DP4">PD 4</Option>
                                <Option value="WHL3">WHL #3</Option>
                                <Option value="WHL4">WHL #5</Option>
                                <Option value="WHL5">WHL #6</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="CodeRCodeN"
                            style={{ width: '15%' }}
                            rules={[{ required: true, message: 'CodeR/CodeN' }]}
                        >
                            <label style={{ padding: "5px" }}>CodeR/CodeN<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="CodeR/CodeN"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel1"
                            style={{ width: '17%' }}
                            rules={[{ required: true, message: 'รายชื่อผลิตภัณฑ์เคมี' }]}
                        >
                            <label style={{ padding: "5px" }}>รายชื่อผลิตภัณฑ์เคมี<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="รายชื่อผลิตภัณฑ์เคมี (ตาม PR)"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel2"
                            style={{ width: '19%' }}
                            rules={[{ required: true, message: 'ชื่อสารเคมีอันตราย/ชื่อทางการค้า' }]}
                        >
                            <label style={{ padding: "5px" }}>ชื่อสารเคมีอันตราย / ชื่อทางการค้า<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ชื่อสารเคมีอันตราย / ชื่อทางการค้า"
                            />
                        </Form.Item>
                        <Form.Item
                            name="CASNo"
                            style={{ width: '10%' }}
                            rules={[{ required: true, message: 'CAS No.' }]}
                        >
                            <label style={{ padding: "5px" }}>CAS No.<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="CAS No."
                            />
                        </Form.Item>
                        <Form.Item
                            name="UN"
                            style={{ width: '10%' }}
                            rules={[{ required: true, message: 'UN' }]}
                        >
                            <label style={{ padding: "5px" }}>UN No.<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="UN No."
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel3"
                            style={{ width: '15%' }}
                            rules={[{ required: true, message: 'วัตถุประสงค์การใช้งาน' }]}
                        >
                            <label style={{ padding: "5px" }}>วัตถุประสงค์การใช้งาน<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="วัตถุประสงค์การใช้งาน"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel4"
                            style={{ width: '10%' }}
                            rules={[{ required: true, message: 'สถานะสาร' }]}
                        >
                            <label style={{ padding: "5px" }}>สถานะสาร<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ของแข็ง</Option>
                                <Option value="2">ของเหลว</Option>
                                <Option value="3">ก๊าซ</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel5"
                            style={{ width: '15%' }}
                            rules={[{ required: true, message: 'ลักษณะสาร' }]}
                        >
                            <label style={{ padding: "5px" }}>ลักษณะสาร<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ลักษณะสาร"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel6"
                            style={{ width: '15%' }}
                            rules={[{ required: true, message: 'ความเข้มข้น (%/W/W)' }]}
                        >
                            <label style={{ padding: "5px" }}>ความเข้มข้น (%/W/W)<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ความเข้มข้น (%/W/W)"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel7"
                            style={{ width: '15%' }}
                            rules={[{ required: true, message: 'ความหนาแน่น ( g/cm3) ' }]}
                        >
                            <label style={{ padding: "5px" }}>ความหนาแน่น ( g/cm3) <a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ความหนาแน่น ( g/cm3) "
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel8"
                            style={{ width: '20%' }}
                            rules={[{ required: true, message: 'การควบคุม (ระบุชนิดวัตถุอันตราย)' }]}
                        >
                            <label style={{ padding: "5px" }}>การควบคุม (ระบุชนิดวัตถุอันตราย)<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">วัตถุอันตรายชนิดที่ 1</Option>
                                <Option value="2">วัตถุอันตรายชนิดที่ 2</Option>
                                <Option value="3">วัตถุอันตรายชนิดที่ 3</Option>
                                <Option value="4">วัตถุอันตรายชนิดที่ 4</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel9"
                            style={{ width: '12%' }}
                            rules={[{ required: true, message: 'องค์ประกอบ' }]}
                        >
                            <label style={{ padding: "5px" }}>องค์ประกอบ<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="องค์ประกอบ"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel10"
                            style={{ width: '22%' }}
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : UN  Class' }]}
                        >
                            <label style={{ padding: "5px" }}>การจำแนกความเป็นอันตราย : UN  Class<a style={{ color: "red" }}> *</a></label>
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
                            name="Chemicel11"
                            style={{ width: '25%' }}
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : GHS  ด้านกายภาพ' }]}
                        >
                            <label style={{ padding: "5px" }}>การจำแนกความเป็นอันตราย : GHS  ด้านกายภาพ<a style={{ color: "red" }}> *</a></label>
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
                            name="Chemicel12"
                            style={{ width: '25%' }}
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : GHS  ด้านกายภาพ' }]}
                        >
                            <label style={{ padding: "5px" }}>การจำแนกความเป็นอันตราย : GHS  ด้านกายภาพ<a style={{ color: "red" }}> *</a></label>
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
                            name="Chemicel13"
                            style={{ width: '27%' }}
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : GHS  ด้านสิ่งแวดล้อม' }]}
                        >
                            <label style={{ padding: "5px" }}>การจำแนกความเป็นอันตราย : GHS  ด้านสิ่งแวดล้อม<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">1. ความเป็นอันตรายต่อสิ่งแวดล้อมทางน้ำ(Hazardous to the aquatic environment)</Option>
                                <Option value="2">2. ความเป็นอันตรายต่อชั้นโอโซน(Hazardous to the ozone layer)</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel14"
                            style={{ width: '27%' }}
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : ประเภทการจัดเก็บ' }]}
                        >
                            <label style={{ padding: "5px" }}>การจำแนกความเป็นอันตราย : ประเภทการจัดเก็บ<a style={{ color: "red" }}> *</a></label>
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
                            name="Chemicel15"
                            style={{ width: '15%' }}
                            rules={[{ required: true, message: 'ปริมาณการใช้รวมต่อปี' }]}
                        >
                            <label style={{ padding: "5px" }}>ปริมาณการใช้รวมต่อปี<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ปริมาณการใช้รวมต่อปี"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel16"
                            style={{ width: '9%' }}
                            rules={[{ required: true, message: 'หน่วย' }]}
                        >
                            <label style={{ padding: "5px" }}>หน่วย<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">กิโลกรัม</Option>
                                <Option value="2">ลิตร</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel17"
                            style={{ width: '15%' }}
                            rules={[{ required: true, message: 'ปริมาณการจัดเก็บสูงสุด' }]}
                        >
                            <label style={{ padding: "5px" }}>ปริมาณการจัดเก็บสูงสุด<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ปริมาณการจัดเก็บสูงสุด"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel18"
                            style={{ width: '9%' }}
                            rules={[{ required: true, message: 'หน่วย' }]}
                        >
                            <label style={{ padding: "5px" }}>หน่วย<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">กิโลกรัม</Option>
                                <Option value="2">ลิตร</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel19"
                            style={{ width: '15%' }}
                            rules={[{ required: true, message: 'ลักษณะภาชนะบรรจุ : ชนิด' }]}
                        >
                            <label style={{ padding: "5px" }}>ลักษณะภาชนะบรรจุ : ชนิด<a style={{ color: "red" }}> *</a></label>
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
                            name="Chemicel20"
                            style={{ width: '16%' }}
                            rules={[{ required: true, message: 'ลักษณะภาชนะบรรจุ : ความจุ' }]}
                        >
                            <label style={{ padding: "5px" }}>ลักษณะภาชนะบรรจุ : ความจุ<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ลักษณะภาชนะบรรจุ : ความจุ"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel21"
                            style={{ width: '16%' }}
                            rules={[{ required: true, message: 'ลักษณะภาชนะบรรจุ : จำนวน' }]}
                        >
                            <label style={{ padding: "5px" }}>ลักษณะภาชนะบรรจุ : จำนวน<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ลักษณะภาชนะบรรจุ : จำนวน"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel22"
                            style={{ width: '13%' }}
                            rules={[{ required: true, message: 'สารที่ใช้ดับเพลิง' }]}
                        >
                            <label style={{ padding: "5px" }}>สารที่ใช้ดับเพลิง<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ผงเคมีแห้ง (Dry Chemical)</Option>
                                <Option value="2">น้ำยาเหลวระเหย</Option>
                                <Option value="3">ก๊าซคาร์บอนไดออกไซด์ (CO2) </Option>
                                <Option value="4">โฟม</Option>
                                <Option value="5">เคมีน้ำ</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel23"
                            style={{ width: '10%' }}
                            rules={[{ required: true, message: 'สถานที่จัดเก็บ' }]}
                        >
                            <label style={{ padding: "5px" }}>สถานที่จัดเก็บ<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="สถานที่จัดเก็บ"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel24"
                            style={{ width: '10%' }}
                            rules={[{ required: true, message: 'พื้นที่ใช้งาน' }]}
                        >
                            <label style={{ padding: "5px" }}>พื้นที่ใช้งาน<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="พื้นที่ใช้งาน"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel25"
                            style={{ width: '13%' }}
                            rules={[{ required: true, message: 'ปริมาณที่สั่งซื้อ/เดือน' }]}
                        >
                            <label style={{ padding: "5px" }}>ปริมาณที่สั่งซื้อ/เดือน<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ปริมาณที่สั่งซื้อ/เดือน"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel26"
                            style={{ width: '25%' }}
                            rules={[{ required: true, message: 'ลำดับที่ตามตารางบัญชีรายชื่อสารเคมีอันตราย/1' }]}
                        >
                            <label style={{ padding: "5px" }}>ลำดับที่ตามตารางบัญชีรายชื่อสารเคมีอันตราย/1<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ลำดับที่ตามตารางบัญชีรายชื่อสารเคมีอันตราย/1"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel27"
                            style={{ width: '39%' }}
                            rules={[{ required: true, message: 'ลำดับที่ตามบัญชีรายชื่อวัตถุอันตรายแนบท้ายประกาศกระทรวงอุตสาหกรรม/2' }]}
                        >
                            <label style={{ padding: "5px" }}>ลำดับที่ตามบัญชีรายชื่อวัตถุอันตรายแนบท้ายประกาศกระทรวงอุตสาหกรรม/2<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ลำดับที่ตามบัญชีรายชื่อวัตถุอันตรายแนบท้ายประกาศกระทรวงอุตสาหกรรม/2"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel28"
                            style={{ width: '12%' }}
                            rules={[{ required: true, message: 'สถานะการส่ง สอ.1' }]}
                        >
                            <label style={{ padding: "5px" }}>สถานะการส่ง สอ.1<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel29"
                            style={{ width: '12%' }}
                            rules={[{ required: true, message: 'วันที่ส่ง สอ.1' }]}
                        >
                            <label style={{ padding: "5px" }}>วันที่ส่ง สอ.1<a style={{ color: "red" }}> *</a></label>
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel30"
                            style={{ width: '23%' }}
                            rules={[{ required: true, message: 'ลำดับที่ยื่นส่งรายงาน สอ.1 ตาม FM-SH-72' }]}
                        >
                            <label style={{ padding: "5px" }}>ลำดับที่ยื่นส่งรายงาน สอ.1 ตาม FM-SH-72<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ลำดับที่ยื่นส่งรายงาน สอ.1 ตาม FM-SH-72"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel31"
                            style={{ width: '32%' }}
                            rules={[{ required: true, message: 'ลำดับที่ตามประกาศ ฯ เรื่อง การให้แจ้งข้อเท็จจริง (วอ./อก.7)/3' }]}
                        >
                            <label style={{ padding: "5px" }}>ลำดับที่ตามประกาศ ฯ เรื่อง การให้แจ้งข้อเท็จจริง (วอ./อก.7)/3<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="ลำดับที่ตามประกาศ ฯ เรื่อง การให้แจ้งข้อเท็จจริง (วอ./อก.7)/3"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel32"
                            style={{ width: '17%' }}
                            rules={[{ required: true, message: 'สารเคมีอันตรายที่ต้องตรวจวัด ' }]}
                        >
                            <label style={{ padding: "5px" }}>สารเคมีอันตรายที่ต้องตรวจวัด <a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="สารเคมีอันตรายที่ต้องตรวจวัด "
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel32"
                            style={{ width: '11%' }}
                            rules={[{ required: true, message: 'บันทึกการตรวจวัด' }]}
                        >
                            <label style={{ padding: "5px" }}>บันทึกการตรวจวัด<a style={{ color: "red" }}> *</a></label>
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel33"
                            style={{ width: '32%' }}
                            rules={[{ required: true, message: '6.2ประกาศ เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นำเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครอง ซึ่งวัตถุอันตรายที่กรมฯ พ.ศ. 2547' }]}
                        >
                            <label style={{ padding: "5px" }}>6.2ประกาศ เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นำเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครอง ซึ่งวัตถุอันตรายที่กรมฯ พ.ศ. 2547<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel34"
                            style={{ width: '32%' }}
                            rules={[{ required: true, message: '6.21ประกาศกระทรวง เรื่อง ระบบการจำแนกและการสื่อสารความเป็นอันตรายของวัตถุอันตราย พ.ศ. 2555' }]}
                        >
                            <label style={{ padding: "5px" }}>6.21ประกาศกระทรวง เรื่อง ระบบการจำแนกและการสื่อสารความเป็นอันตรายของวัตถุอันตราย พ.ศ. 2555<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel34"
                            style={{ width: '32%' }}
                            rules={[{ required: true, message: '6.23 ประกาศกระทรวงอุตสาหกรรม เรื่องบัญชีรายชื่อวัตถุอันตราย พ.ศ. 2556' }]}
                        >
                            <label style={{ padding: "5px" }}>6.23 ประกาศกระทรวงอุตสาหกรรม เรื่องบัญชีรายชื่อวัตถุอันตราย พ.ศ. 2556<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel34"
                            style={{ width: '32%' }}
                            rules={[{ required: true, message: '6.32 ประกาศกระทรวงอุตสาหกรรม เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นาเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครองซึ่งวัตถุอันตรายที่กรมโรงงานอุตสาหกรรมมีอานาจหน้าที่รับผิดชอบ (ฉบับที่ 2) พ.ศ. 2563' }]}
                        >
                            <label style={{ padding: "5px" }}>6.32 ประกาศกระทรวงอุตสาหกรรม เรื่อง การให้แจ้งข้อเท็จจริงของผู้ผลิต ผู้นาเข้า ผู้ส่งออก หรือผู้มีไว้ในครอบครองซึ่งวัตถุอันตรายที่กรมโรงงานอุตสาหกรรมมีอานาจหน้าที่รับผิดชอบ (ฉบับที่ 2) พ.ศ. 2563<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel35"
                            style={{ width: '32%' }}
                            rules={[{ required: true, message: '9.20 กฎกระทรวงกำหนดมาตรฐานในการบริหารจัดการ และ ดำเนินการด้านความปลอดภัยอาชีวอนามัย และ สภาพแวดล้อมในการทำงานเกี่ยวกับสารเคมีอันตราย พ.ศ. 2556' }]}
                        >
                            <label style={{ padding: "5px" }}>9.20 กฎกระทรวงกำหนดมาตรฐานในการบริหารจัดการ และ ดำเนินการด้านความปลอดภัยอาชีวอนามัย และ สภาพแวดล้อมในการทำงานเกี่ยวกับสารเคมีอันตราย พ.ศ. 2556<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel36"
                            style={{ width: '32%' }}
                            rules={[{ required: true, message: '9.22 เรื่อง แบบบัญชีรายชื่อสารเคมีอันตรายและรายละเอียดข้อมูลความปลอดภัยของสารเคมีอันตราย สอ.1 2556' }]}
                        >
                            <label style={{ padding: "5px" }}>9.22 เรื่อง แบบบัญชีรายชื่อสารเคมีอันตรายและรายละเอียดข้อมูลความปลอดภัยของสารเคมีอันตราย สอ.1 2556<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel37"
                            style={{ width: '32%' }}
                            rules={[{ required: true, message: '9.41 ประกาศกระทรวงอุตสาหกรรมเรื่อง มาตรการความปลอดภัยเกี่ยวกับการจัดการสารเคมีในโรงงานอุตสาหกรรมพ.ศ. 2565' }]}
                        >
                            <label style={{ padding: "5px" }}>9.41 ประกาศกระทรวงอุตสาหกรรมเรื่อง มาตรการความปลอดภัยเกี่ยวกับการจัดการสารเคมีในโรงงานอุตสาหกรรมพ.ศ. 2565<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --">
                                <Option value="1">ยื่นส่ง สอ.1 แล้ว</Option>
                                <Option value="2">ยังไม่ได้ส่ง สอ.1</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel38"
                            style={{ width: '12%' }}
                            rules={[{ required: true, message: 'กฏหมายที่เกี่ยวข้อง' }]}
                        >
                            <label style={{ padding: "5px" }}>กฏหมายที่เกี่ยวข้อง<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="กฏหมายที่เกี่ยวข้อง"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel39"
                            style={{ width: '13%' }}
                            rules={[{ required: true, message: 'การปฎิบัติตามกฎหมาย' }]}
                        >
                            <label style={{ padding: "5px" }}>การปฎิบัติตามกฎหมาย<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="การปฎิบัติตามกฎหมาย"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel40"
                            style={{ width: '11%' }}
                            rules={[{ required: true, message: 'การจัดการ/ควบคุม' }]}
                        >
                            <label style={{ padding: "5px" }}>การจัดการ/ควบคุม<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="การจัดการ/ควบคุม"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel41"
                            style={{ width: '23%' }}
                            rules={[{ required: true, message: 'วันที่ทบทวนสารเคมี ตาม FM-SH-17 ล่าสุด' }]}
                        >
                            <label style={{ padding: "5px" }}>วันที่ทบทวนสารเคมี ตาม FM-SH-17 ล่าสุด<a style={{ color: "red" }}> *</a></label>
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item
                            name="Chemicel28"
                            style={{ width: '12%', marginRight: "20px" }}
                            rules={[{ required: true, message: 'หมายเหตุ' }]}
                        >
                            <label style={{ padding: "5px" }}>หมายเหตุ<a style={{ color: "red" }}> *</a></label>
                            <Select placeholder="-- เลือก --" style={{ marginRight: "25px" }}>
                                <Option value="1">ยกเลิกการใช้งาน</Option>
                                <Option value="2">ใช้งานอยู่</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    )
}



// function Fristpage() {
//     return (
//         <>
//             <Form
//                 name="validate_other"
//                 {...formItemLayout}
//                 onFinish={onFinish}
//                 initialValues={{ 'input-number': 3, 'checkbox-group': ['A', 'B'], rate: 3.5 }}
//                 style={{ maxWidth: 600 }}
//             >
//                 <Form.Item label="BirthDate" style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
//                     {/* <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
//                             <Upload.Dragger name="files" action="/upload.do">
//                                 <p className="ant-upload-drag-icon">
//                                     <InboxOutlined />
//                                 </p>
//                                 <p className="ant-upload-text">Click or drag file to this area to upload</p>
//                                 <p className="ant-upload-hint">Support for a single or bulk upload.</p>
//                             </Upload.Dragger>
//                         </Form.Item> */}

//                     <Form.Item
//                         name="KEY"
//                         rules={[{ required: true }]}
//                         style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
//                     >
//                         <Input placeholder="KEY" />
//                     </Form.Item>
//                     <Form.Item
//                         name="แผนก"
//                         label="แผนก"
//                         hasFeedback
//                         rules={[{ required: true, message: 'Please select your country!' }]}
//                         style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
//                     >
//                         <Select placeholder="Please select a country">
//                             <Option value="china">PD 1</Option>
//                             <Option value="DP2">PD 2</Option>
//                             <Option value="DP3">PD 3</Option>
//                             <Option value="DP4">PD 4</Option>
//                             <Option value="WHL3">WHL #3</Option>
//                             <Option value="WHL4">WHL #5</Option>
//                             <Option value="WHL5">WHL #6</Option>
//                         </Select>
//                     </Form.Item>
//                 </Form.Item>



//                 <Form.Item
//                     name="CodeR/CodeN"
//                     label="CodeR/CodeN"
//                     rules={[{ required: true, message: 'Please select your favourite colors!' }]}
//                 >
//                     <Input placeholder="CodeR/CodeN" />
//                 </Form.Item>

//                 <Form.Item
//                     name="รายชื่อผลิตภัณฑ์เคมี"
//                     label="รายชื่อผลิตภัณฑ์เคมี"
//                     rules={[{ required: true, message: 'Please select your favourite colors!' }]}
//                 >
//                     <Input placeholder="รายชื่อผลิตภัณฑ์เคมี (ตาม PR)" />
//                 </Form.Item>
//                 {/* <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
//                     <Button type="primary" htmlType="submit" onClick={()=>}>
//                         Submit
//                     </Button>
//                 </Form.Item> */}
//             </Form>
//         </>
//     )
// };

export default Fristpage;