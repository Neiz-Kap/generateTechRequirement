import React, { useState, useEffect } from 'react'
import { Form, Container, Card, Button } from 'react-bootstrap';

import St1PersonalData from '../components/St1PersonalData'
import St2 from '../components/St2'
import St3 from '../components/St3'
import StnResult from '../components/StnResult'

const MultiForm = () => {
  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    tel: "",
    // city: "",
    // state: "",
  });

  const [projectData, setProjectData] = useState({
    siteName: "",
    domainName: "",
    // city: "",
    // state: "",
  });


  const onChangePersonalData = (name) => (e) => {
    setPersonalData({ ...personalData, [name]: e.target.value });
  };

  const onChangeProjectData = (name) => (e) => {
    setProjectData({ ...projectData, [name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step => step + 1);
    } else if (step === 4) {
      console.log(personalData);
      console.log(projectData);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step => step - 1);
    }
  };

  return (
    <Container className="py-3 d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      {/* <Card> */}
      {
        {
          1: <St1PersonalData onChangePersonalData={onChangePersonalData} {...personalData} />,
          2: <St2 onChangeProjectData={onChangeProjectData} {...projectData} />,
          3: <St3 />,
          4: <StnResult />,
        }[step]
      }
      {/* <div className="justify-content-around px-5 mt-5"> */}
      {step > 1 &&
        <Button
          variant="warning" onClick={prevStep}
          className={"mx-3"}
        >
          Назад
        </Button>
      }
      {step < 4 &&
        <Button variant="warning" onClick={nextStep}
          className={"mx-3"}
        >
          {step === 3 ? "Сформировать техническое задание" : "Далее"}
        </Button>
      }
      {/* </div> */}
      {/* </Card> */}
    </Container >
  )
}

export default MultiForm
