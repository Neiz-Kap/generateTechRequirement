import React, { useState, useEffect } from 'react'
import { Form, Container, Card, Button } from 'react-bootstrap';

import St1PersonalData from '../components/St1PersonalData'
import St2 from '../components/St2'
import St3 from '../components/St3'
import St4 from '../components/St4'
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
    purposes: "",
    tasks: "",

    cms: "",
    isMobile: "",
    isCMS: "",
    // city: "",
    // state: "",
  });

  const maxStep = 5;


  const onChangePersonalData = (name) => (e) => {
    setPersonalData({ ...personalData, [name]: e.target.value });
  };

  const onChangeProjectData = (name) => (e) => {
    setProjectData({ ...projectData, [name]: e.target.value });
  };

  const nextStep = () => {
    if (step < maxStep) {
      setStep(step => step + 1);
    } else if (step === maxStep) {
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
      {/* мадагаскар 3, челоек-паук 3, форсаж ?,  */}
      {
        {
          1: <St1PersonalData onChangePersonalData={onChangePersonalData} {...personalData} />,
          2: <St2 onChangeProjectData={onChangeProjectData} siteName={projectData.siteName} domainName={projectData.domainName} />,
          3: <St3 onChangeProjectData={onChangeProjectData} purposes={projectData.purposes} tasks={projectData.tasks} />,
          4: <St4 onChangeProjectData={onChangeProjectData} purposes={projectData.purposes} tasks={projectData.tasks} />,
          5: <StnResult {...personalData} {...projectData} />,
        }[step]
      }
      {/* <div className="justify-content-around px-5 mt-5"> */}
      {step < maxStep &&
        <Button variant="warning" onClick={nextStep}
          className={"mx-3 mb-3"}
        >
          {step === maxStep - 1 ? "Сформировать техническое задание" : "Далее"}
        </Button>
      }
      {step > 1 &&
        <Button
          variant="warning" onClick={prevStep}
          className={"mx-3"}
        >
          Назад
        </Button>
      }
      {/* </div> */}
      {/* </Card> */}
    </Container >
  )
}

export default MultiForm
