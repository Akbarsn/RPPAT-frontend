import React from "react";
import { Form, Input,  InputNumber, DatePicker, Upload, Button } from "antd";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

export default function Step2(props) {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };

  return (
    <div className="step2">
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Nama Lengkap"
        rules={[{ required: true, message: 'Tolong masukkan nama lengkap anda !' }]}
      >
        <Input onChange={data=>{props.namalengkap(data.target.value);}}/>
      </Form.Item>

      <Form.Item
        label="Alamat"
        rules={[{ required: true, message: 'Tolong masukkan alamat anda !' }]}
      >
        <Input onChange={data=>{props.alamat(data.target.value);}}>{props.alamattext}</Input>
      </Form.Item>

      <Form.Item
        label="Nomor HP"
        rules={[{ required: true, message: 'Tolong masukkan nomor anda !' }]}
      >
        <Input onChange={data=>{props.nomor(data.target.value);}}/>
      </Form.Item>

      <Form.Item
        label="Tanggal Lahir"
        rules={[{ required: true, message: 'Tolong masukkan tanggal lahir anda !' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Upload Foto KTP"
        valuePropName="fileList"
        rules={[{ required: true, message: 'Tolong upload KTP anda !' }]}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button>
            <UploadOutlined /> Klik untuk Upload
          </Button>
        </Upload>
      </Form.Item>
      
    </Form>
    </div>
  );
}
