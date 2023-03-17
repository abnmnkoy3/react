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
            <div style={{ overflow: "auto" }}>
                <Form style={{ flexWrap: "nowrap", padding: "40px" }} form={form} name="horizontal_login" layout="inline" onFinish={onFinish} >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <label style={{ padding: "5px" }}>SSDS<a style={{ color: "red" }}> *</a></label>
                        <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <label style={{ padding: "5px" }}>ID<a style={{ color: "red" }}> *</a></label>
                        <Input
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <label style={{ padding: "5px" }}>แผนก<a style={{ color: "red" }}> *</a></label>
                        <Select placeholder="Please select a country">
                            <Option value="china">PD 1</Option>
                            <Option value="DP2">PD 2</Option>
                            <Option value="DP3">PD 3</Option>
                            <Option value="DP4">PD 4</Option>
                            <Option value="WHL3">WHL #3</Option>
                            <Option value="WHL4">WHL #5</Option>
                            <Option value="WHL5">WHL #6</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="CodeR/CodeN"
                        rules={[{ required: true, message: 'CodeR/CodeN' }]}
                    >
                        <label style={{ padding: "5px" }}>CodeR/CodeN<a style={{ color: "red" }}> *</a></label>
                        <Input
                            type="text"
                            placeholder="CodeR/CodeN"
                        />
                    </Form.Item>
                    <Form.Item
                        name="CodeR/CodeN"
                        rules={[{ required: true, message: 'CodeR/CodeN' }]}
                    >
                        <label style={{ padding: "5px" }}>รายชื่อผลิตภัณฑ์เคมี<a style={{ color: "red" }}> *</a></label>
                        <Input
                            type="text"
                            placeholder="รายชื่อผลิตภัณฑ์เคมี (ตาม PR)"
                        />
                    </Form.Item>
                    <Form.Item
                        name="CodeR/CodeN"
                        rules={[{ required: true, message: 'CodeR/CodeN' }]}
                    >
                        <label style={{ padding: "5px" }}>ชื่อสารเคมีอันตราย / ชื่อทางการค้า<a style={{ color: "red" }}> *</a></label>
                        <Input
                            type="text"
                            placeholder="ชื่อสารเคมีอันตราย / ชื่อทางการค้า"
                        />
                    </Form.Item>
                    <Form.Item
                        name="CodeR/CodeN"
                        rules={[{ required: true, message: 'CodeR/CodeN' }]}
                    >
                        <label style={{ padding: "5px" }}>CAS No.<a style={{ color: "red" }}> *</a></label>
                        <Input
                            type="text"
                            placeholder="CAS No."
                        />
                    </Form.Item>
                    <Form.Item
                        name="CodeR/CodeN"
                        rules={[{ required: true, message: 'CodeR/CodeN' }]}
                    >
                        <label style={{ padding: "5px" }}>UN No.<a style={{ color: "red" }}> *</a></label>
                        <Input
                            type="text"
                            placeholder="UN No."
                        />
                    </Form.Item>
                    <Form.Item
                        name="CodeR/CodeN"
                        rules={[{ required: true, message: 'CodeR/CodeN' }]}
                    >
                        <label style={{ padding: "5px" }}>วัตถุประสงค์การใช้งาน<a style={{ color: "red" }}> *</a></label>
                        <Input
                            type="text"
                            placeholder="วัตถุประสงค์การใช้งาน"
                        />
                    </Form.Item>
                    {/* <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            Log in
                        </Button>
                    )}
                </Form.Item> */}
                </Form>
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