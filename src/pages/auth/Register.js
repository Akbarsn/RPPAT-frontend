import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Result, Button } from "antd";
import Step1 from "./registerstep/step1";
import Step2 from "./registerstep/step2";
import Step3 from "./registerstep/step3";
import Step4 from "./registerstep/step4";
import axios from "axios";
import "./Register.scss";
import Container from "../../components/Container";

export default function Register() {
  function getSteps() {
    return ["", "", "", ""];
  }

  const steps = getSteps();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [step1, setStep1] = useState({});
  const [step2, setStep2] = useState({});
  const [step3, setStep3] = useState({});
  const [bank, setBank] = useState({});

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onStep1 = (values) => {
    setStep1(values);
    setStep((prevStep) => prevStep + 1);
  };

  const onStep2 = (values) => {
    console.log(values)
    setStep2(values);
    setStep((prevStep) => prevStep + 1);
  };

  const onStep3 = (values) => {
    console.log(values);
    let bankAcc = "";
    let bankNumber = "";

    values.banks.map((bank) => {
      bankAcc += bank.bankAcc + "-";
      bankNumber += bank.bankNumber + "-";
    });

    bankAcc = bankAcc.substring(0, bankAcc.length - 1);
    bankNumber = bankNumber.substring(0, bankNumber.length - 1);

    setBank(values);
    setStep3({ bankAcc: bankAcc, bankNumber: bankNumber });
    setStep((prevStep) => prevStep + 1);
  };

  function getNama(data) {	 
    let nama = data.split(" ");	
    return nama[0];
  }

  async function onStep4 (values) {
    setLoading(true);
    let bankacc = "";
    let banknum = "";
    for(let i = 0; i < bank.banks.length; i++){
      if(i === 0){
        bankacc+=(bank.banks[i].bankAcc);
      banknum+=(bank.banks[i].bankNumber);
      } else {
      bankacc+="-"+(bank.banks[i].bankAcc);
      banknum+="-"+(bank.banks[i].bankNumber);
      }
    }
    const data = { ...step1, ...step2, ...values };
    data.birthDate = data.birthDate.format("YYYY-MM-DD");
    let nama = getNama(data.fullName);
    try {
      console.log(data.upload[0]);
      let form = new FormData();
      form.append('name',nama);
      form.append('fullName', data.fullName);
      form.append('address', data.address);
      form.append('birthDate', data.birthDate);
      form.append('phoneNumber', data.phoneNumber);
      form.append('email', data.email);
      form.append('username', data.username);
      form.append('password', data.password);
      form.append('IDcard', data.upload[0].originFileObj);
      form.append('bankAccount',bankacc);
      form.append('bankNumber', banknum); 
      form.append('role', data.role);
      console.log(...form)
      let hasil = await axios.post('http://31.220.50.154:5000/auth/register', form, {
        headers: {
            'content-type': 'multipart/form-data'
        }
      })

      console.log(hasil)
      switch(hasil.status){
        case 200:console.log(form); break;
        default: console.log("ya");
      }
    }catch (err){
      console.log(err);
    }
    setLoading(false);
    setSuccess(true);
  };

  function getContent(stepindex) {
    switch (stepindex) {
      case 0:
        return <Step1 onFinishStep1={onStep1} data={step1} />;
      case 1:
        return (
          <Step2 handleBack={handleBack} onFinishStep2={onStep2} data={step2} />
        );
      case 2:
        return (
          <Step3 handleBack={handleBack} onFinishStep3={onStep3} data={bank} />
        );
      case 3:
        return <Step4 handleBack={handleBack} onFinishStep4={onStep4} loading = {loading}/>;
      default:
        return "";
    }
  }

  return (
    <div>
       {localStorage.getItem("token") ? (
        window.history.back() ) :
      (
    <div id="register">
      <Container>
        <div className="judulregister">Register</div>
        {success ? (	
          <div className="card" style={{ backgroundColor: "#f5f5f5" }}>	
            <Result	
              status="success"	
              title="Akun Anda Telah Terdaftar"	
              extra={[	
                <Button	
                  type="primary"	
                  size="large"	
                  htmlType="submit"	
                  className="btn_primary"	
                  onClick={() => {	
                    window.location.replace("/login");	
                  }}	
                >	
                  Login Sekarang	
                </Button>,	
              ]}	
            />	
          </div>	
        ) : (
          <div>
            <div className="stepper">
              <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className="register-content">{getContent(step)}</div>
          </div>
        )}
      </Container>
    </div>
    )}
    </div>
  );
}
