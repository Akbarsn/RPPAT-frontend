import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Result, Button } from "antd";
import Step1 from "./registerstep/step1";
import Step2 from "./registerstep/step2";
import Step3 from "./registerstep/step3";
import Step4 from "./registerstep/step4";
import "./Register.scss";
import Container from "../../components/Container";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
import API from "../API"

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
  const history = useHistory();

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onStep1 = (values) => {
    setStep1(values);
    setStep((prevStep) => prevStep + 1);
  };

  const onStep2 = (values) => {
    console.log(values);
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


  async function onStep4(values) {
    setLoading(true);
    let bankacc = "";
    let banknum = "";
    for (let i = 0; i < bank.banks.length; i++) {
      if (i === 0) {
        bankacc += bank.banks[i].bankAcc;
        banknum += bank.banks[i].bankNumber;
      } else {
        bankacc += "-" + bank.banks[i].bankAcc;
        banknum += "-" + bank.banks[i].bankNumber;
      }
    }
    const data = { ...step1, ...step2, ...values };
    data.birthDate = data.birthDate.format("YYYY-MM-DD");
    try {
      console.log(data.upload[0]);
      let form = new FormData();
      form.append("name", data.name);
      form.append("fullName", data.fullName);
      form.append("address", data.address);
      form.append("birthDate", data.birthDate);
      form.append("phoneNumber", data.phoneNumber);
      form.append("email", data.email);
      form.append("username", data.username);
      form.append("password", data.password);
      form.append("IDcard", data.upload[0].originFileObj);
      form.append("bankAccount", bankacc);
      form.append("bankNumber", banknum);
      form.append("role", data.role);
      console.log(...form);
      const hasil = await API.post("/auth/register", form, {
        headers: {
          "content-type": "multipart/form-data",
        }
      })
      console.log(hasil);
      switch (hasil.status) {
        case 200:
          console.log(form);
          break;
        default:
          console.log("ya");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    setSuccess(true);
  }

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
        return (
          <Step4
            handleBack={handleBack}
            onFinishStep4={onStep4}
            loading={loading}
          />
        );
      default:
        return "";
    }
  }

  const Redirect = async (token) => {
    const decoded = await jwt.decode(token);

    switch (decoded.role) {
      case 0:
        window.location.replace("/petani");
        break;
      case 1:
        window.location.replace("/pemasok-kemasan");
        break;
      case 2:
        window.location.replace("/pemasok-bahan-tambahan");
        break;
      case 3:
        window.location.replace("/umkm");
        break;
      case 4:
        window.location.replace("/outlet");
        break;
    }
  };

  return (
    <div>
      {localStorage.getItem("token") ? (
        Redirect(localStorage.getItem("token"))
      ) : (
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
                        history.push("/");
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
