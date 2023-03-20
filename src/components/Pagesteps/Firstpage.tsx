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
    Radio,
    Rate,
    Row,
    Select,
    Slider,
    Switch,
    Upload,
    Affix,
    Card,
} from 'antd';
import '../../index.css'
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
    const [, forceUpdate] = useState({});
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values: any) => {
        console.log('Finish:', values);
    };
    return (
        <>
            <div >
                <Card style={{ overflow: "auto", padding: "5px" }}>
                    <Form style={{ flexWrap: "nowrap" }} form={form} name="horizontal_login" onFinish={onFinish}
                        initialValues={{ size: 'small' }}
                        layout="inline"
                        size="small"
                    >
                        <Form.Item style={{ marginRight: "-77px" }}>
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
                        {/*<Form.Item
                            name="CASNo"
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
                            rules={[{ required: true, message: 'การจำแนกความเป็นอันตราย : UN  Class' }]}
                        >
                            <label style={{ padding: "5px" }}>การจำแนกความเป็นอันตราย : UN  Class<a style={{ color: "red" }}> *</a></label>
                            <Input
                                type="text"
                                placeholder="การจำแนกความเป็นอันตราย : UN  Class"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Chemicel11"
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
                        </Form.Item> */}
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