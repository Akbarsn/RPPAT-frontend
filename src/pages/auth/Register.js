import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../components/LogoHome";
import Card from "react-bootstrap/Card";
import "./Register.scss";
import Alert from "react-bootstrap/Alert";
import ReactLoading from "react-loading";
import axios from "axios";
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Data Diri", "Buat Akun", "Verifikasi Data"];
}

export default function Register() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [nama, setNama] = useState("");
  const [date, setDate] = useState("");
  const [JenisKelamin, setJenisKelamin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [instansi, setInstansi] = useState("");
  const [norek, setNorek] = useState("");
  const [metode, setMetode] = useState("");
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  function checkPassword(password, rpassword) {
    if (password < 8) {
      setPassworderror("Password Kurang Panjang");
    } else if (password !== rpassword) {
      setPassworderror("Password Tidak Sama");
    }
    if (password.length >= 8 && password === rpassword) {
      setPassworderror(null);
    }
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Step1
            onChangeNama={data => {
              setNama(data);
            }}
            onChangeDate={data => {
              setDate(data);
            }}
            onChangeJK={data => {
              setJenisKelamin(data);
            }}
          />
        );
      case 1:
        return (
          <Step2
            onChangeMail={data => {
              setEmail(data);
            }}
            onChangePass={data => {
              setPassword(data);
            }}
            onChangeRpass={data => {
              setRpassword(data);
            }}
          />
        );
      case 2:
        return (
          <Step3
            onChangeUniv={data => {
              setInstansi(data);
            }}
            onChangeNorek={data => {
              setNorek(data);
            }}
            onChangeMetode={data => {
              setMetode(data);
            }}
            onChangeFile={data => {
              setFile(data);
            }}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  async function handleSelesai(e) {
    setLoading(true);
    e.preventDefault();
    checkPassword(password, rpassword);
    if (
      nama &&
      date &&
      JenisKelamin &&
      email &&
      password &&
      rpassword &&
      instansi &&
      metode &&
      norek &&
      file
    ) {
      setValid("");
      if (passworderror === null) {
        let user = {
          name: nama,
          email: email,
          tanggal_lahir: date,
          jenis_kelamin: JenisKelamin,
          password: password,
          instansi: instansi,
          saldo:"0"
        };
        try {
          // let hasil = await axios.post(
          //   "http://localhost:8000/api/user/register",
          //   user
          // );
          window.location.replace("/");
        } catch (e) {
          switch (e.response) {
            case 400:
              setError("Akun Tersebut Sudah Ada");
              break;
            default:
              console.log("berhasil");
              break;
          }
        }
      }
    } else {
      setValid("Tolong cek masukan anda");
    }
    
    setLoading(false);
  }

  return (
    <div className="registerbody">
      <Container>
        <br />
        <br />
        <Card>
          <Card.Body>
            <div className="cardregis">
              <div className="judulregis">Daftar</div>
              <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <div>
                  {activeStep === steps.length - 1 ? (
                    <div>
                      {valid ? (
                        <Alert variant="warning">{valid}</Alert>
                      ) : (
                        <Fragment />
                      )}
                      {passworderror ? (
                        <Alert variant="danger">{passworderror}</Alert>
                      ) : (
                        <Fragment />
                      )}
                      {error ? (
                        <Alert variant="danger">{error}</Alert>
                      ) : (
                        <Fragment />
                      )}
                      <Typography className={classes.instructions}>
                        {getStepContent(activeStep)}
                      </Typography>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.backButton}
                        >
                          Kembali
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={e => handleSelesai(e)}
                        >
                          {loading ? (
                            <ReactLoading
                              type="spokes"
                              width="25px"
                              height="30px"
                            />
                          ) : (
                            "Selesai"
                          )}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Typography className={classes.instructions}>
                        {getStepContent(activeStep)}
                      </Typography>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.backButton}
                        >
                          Kembali
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                        >
                          Selanjutnya
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <br />
        <br />
      </Container>
    </div>
  );
}
