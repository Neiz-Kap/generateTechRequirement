import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react'
import { Form, Container, Card } from 'react-bootstrap';

import St1PersonalData from '../components/St1PersonalData'

const MultiForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    phone_number: "",
    city: "",
    state: "",
  });


  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step => step + 1);
    } else if (step === 3) {
      console.log(values);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step => step - 1);
    }
  };

  return (
    <Container className="py-3 d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Card>
        <div className="d-flex justify-content-around px-5 mt-5">
          {step > 1 &&
            <Button variant="warning" onClick={prevStep}>
              Назад
            </Button>
          }
          <Button variant="warning" onClick={nextStep}>
            {step === 3 ? "Сгенерировать" : "Далее"}
          </Button>
        </div>
      </Card>
    </Container >
  )
}

export default MultiForm
