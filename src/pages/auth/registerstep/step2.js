import React from "react";
import { Form, Input,  InputNumber, DatePicker, Upload } from "antd";
import './step2.scss';
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
        <Input />
      </Form.Item>

      <Form.Item
        label="Alamat"
        rules={[{ required: true, message: 'Tolong masukkan alamat anda !' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Nomor HP"
        rules={[{ required: true, message: 'Tolong masukkan nomor anda !' }]}
      >
        <InputNumber/>
      </Form.Item>

      <Form.Item
        label="Tanggal Lahir"
        rules={[{ required: true, message: 'Tolong masukkan tanggal lahir anda !' }]}
      >
        <DatePicker/>
      </Form.Item>

      <Form.Item
        label="Upload Foto KTP"
        valuePropName="fileList"
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
