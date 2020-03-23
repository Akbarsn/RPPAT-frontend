import React, { useState, Fragment } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Card } from 'antd';
import Step1 from "./registerstep/step1";
import Step2 from "./registerstep/step2";
import Step3 from "./registerstep/step3";
import Step4 from "./registerstep/step4";
import axios from "axios";
import Container from '../../components/Container';

export default function Register() {


  return (
    <div className="register">
      <Container>
        <Card>
            <div className="card">
              <div className="judul">Register</div>
              <div className="stepper">
                <Stepper activeStep={activeStep} alternativeLabel/>
              </div>
            </div>
        </Card>
      </Container>
    </div>
  );
}
