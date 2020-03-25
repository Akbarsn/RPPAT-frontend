import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Card, Result, Alert } from "antd";
import Step1 from "./registerstep/step1";
import Step2 from "./registerstep/step2";
import Step3 from "./registerstep/step3";
import Step4 from "./registerstep/step4";
import axios from "axios";
import Container from "../../components/inc/Container";
import Button from "../../components/inc/Button";
import "./Register.scss";

export default function Register() {
  function getSteps() {
    return ["", "", "", ""];
  }

  const steps = getSteps();
  const [step, setStep] = useState(0);
  const [fullName, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [idcard, setIdcard] = useState([]);
  const [bankacc, setBankacc] = useState("");
  const [banknum, setBanknum] = useState("");
  const [role, setRole] = useState(0);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
    console.log(idcard);
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  function getContent(stepindex) {
    switch (stepindex) {
      case 0:
        return (
          <Step1
            roles={data => {
              setRole(data);
            }}
            cekinput={role}
          />
        );
      case 1:
        return (
          <Step2
            fullnama={data => {
              setFullname(data);
            }}
            datanama={name}
            mail={data => {
              setEmail(data);
            }}
            dataemail={email}
            alamat={data => {
              setAddress(data);
            }}
            dataalamat={address}
            nomor={data => {
              setPhone(data);
            }}
            datanohp={phone}
            tanggal={data => {
              setDate(data);
            }}
            datatanggal={date}
            idfile={data => {
              setIdcard(data);
            }}
            filektp={idcard}
          />
        );
      case 2:
        return (
          <Step3
          // acc={data => {
          //   setBankacc(data);
          // }}
          // num={data => {
          //   setBanknum(data);
          // }}
          />
        );
      case 3:
        return (
          <Step4
            uname={data => {
              setUsername(data);
            }}
            datauname={username}
            pass={data => {
              setPassword(data);
            }}
            datapass={password}
          />
        );
      default:
        return "Hai";
    }
  }

  function getNama(data) {
    let nama = data.split(" ");
    setName(nama[0]);
  }

  function handleClose() {
    setValid(false);
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    if (
      fullName &&
      address &&
      date &&
      phone &&
      email &&
      username &&
      password &&
      idcard &&
      // bankacc &&
      // banknum &&
      role
    ) {
      getNama(fullName);
      let user = {
        name: name,
        fullName: fullName,
        address: address,
        birthDate: date,
        phoneNumber: phone,
        email: email,
        username: username,
        password: password,
        //IDCard: idcard,
        // bankAccount: bankacc,
        // bankNumber: banknum,
        role: role
      };
      try {
        // let hasil = await axios.post("/auth/register", user);
        console.log(user);
        setSuccess(true);
      } catch (e) {
        switch (e.response) {
          case 406:
            console.log(e.response.message);
            break;
          case 500:
            console.log(e.reponse.message);
            setValid(true);
            break;
          default:
            console.log("berhasil");
            break;
        }
      }
    } else {
      setValid(true);
    }
    setLoading(false);
  }

  return (
    <div className="register">
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
                  text="Login Sekarang"
                  onClick={window.location.replace("/login")}
                />
              ]}
            />
          </div>
        ) : (
          <div>
            <div className="stepper">
              <Stepper activeStep={step} alternativeLabel>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div>
              {step === steps.length - 1 ? (
                <div>
                  <div className="card" style={{ backgroundColor: "#f5f5f5" }}>
                    <div>
                      {valid ? (
                        <Alert
                          message="Tolong lengkapi data anda"
                          closable
                          afterClose={handleClose}
                          type="warning"
                          showIcon
                          style={{ margin: "2% 13%" }}
                        />
                      ) : null}
                    </div>
                    <div className="formregister">{getContent(step)}</div>
                    <div className="buttonmulti">
                      <Button
                        type="tertiary"
                        text="Kembali"
                        disable={step === 0 ? true : false}
                        click={handleBack}
                      />
                      <Button
                        type="primary"
                        text="Selesai"
                        click={e => handleSubmit(e)}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card" style={{ backgroundColor: "#f5f5f5" }}>
                  <div className="formregister">{getContent(step)}</div>
                  <div className="buttonmulti">
                    <Button
                      type="tertiary"
                      text="Kembali"
                      disable={step === 0 ? true : false}
                      click={handleBack}
                    />
                    <Button
                      type="primary"
                      text="Selanjutnya"
                      click={handleNext}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
