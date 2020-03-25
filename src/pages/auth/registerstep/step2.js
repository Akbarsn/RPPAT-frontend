import React from "react";
import { Form, Input, DatePicker, Upload, Button } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import './step2.scss'

export default function Step2(props) {

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
      };
      const dateFormat = 'YYYY-MM-DD';
      function handleDate(date, dateString){
        props.tanggal(dateString)
      }
      
      
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
        <Input onChange={data=>{props.fullnama(data.target.value);}} defaultValue={ props.datanama }/>
      </Form.Item>

      <Form.Item
        label="Email"
        rules={[{ required: true, message: 'Tolong masukkan email anda !' }]}
      >
        <Input onChange={data=>{props.mail(data.target.value);}} defaultValue={props.dataemail}></Input>
      </Form.Item>

      <Form.Item
        label="Alamat"
        rules={[{ required: true, message: 'Tolong masukkan alamat anda !' }]}
      >
        <Input onChange={data=>{props.alamat(data.target.value);}} defaultValue={props.dataalamat}></Input>
      </Form.Item>

      <Form.Item
        label="Nomor HP"
        rules={[{ required: true, message: 'Tolong masukkan nomor anda !' }]}
      >
        <Input onChange={data=>{props.nomor(data.target.value);}} defaultValue={props.datanohp}/>
      </Form.Item>

      <Form.Item
        label="Tanggal Lahir"
        rules={[{ required: true, message: 'Tolong masukkan tanggal lahir anda !' }]}
      >
        <DatePicker defaultValue={moment(props.datatanggal, dateFormat)} format={dateFormat} onChange={handleDate}/>
      </Form.Item>

      <Form.Item
        label="Upload Foto KTP"
        valuePropName="fileList"
        rules={[{ required: true, message: 'Tolong upload KTP anda !' }]}
        extra="Pastikan file dalam format .pdf, .png, atau .jpeg"
      >
        <Upload name="logo" listType="picture" accept=".pdf,.png,.jpeg">
          <Button>
            <UploadOutlined /> Klik untuk Upload
          </Button>
        </Upload>
      </Form.Item>
      
    </Form>
    </div>
  );
}
