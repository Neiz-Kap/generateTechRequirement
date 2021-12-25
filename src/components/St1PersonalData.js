import React from 'react'
import { Form, Container, Card, Row, Col } from 'react-bootstrap';

const St1PersonalData = ({ onChangePersonalData,
  firstName,
  middleName,
  lastName,
  email,
  tel }) => {
  return (
    <section>
      <h2 className="mb-4">Личные и контактные данные заказчика</h2>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control type="text"
                placeholder="Введите вашу фамилию"
                name="firstName"
                onChange={onChangePersonalData("firstName")}
                value={firstName}
              />
              {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMiddleName">
              <Form.Label>Имя</Form.Label>
              <Form.Control type="text" name="middleName" placeholder="Введите ваше имя"
                onChange={onChangePersonalData("middleName")}
                value={middleName}
              />
              {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Отчество</Form.Label>
              <Form.Control type="text" name="lastName" placeholder="Введите ваше отчество"
                onChange={onChangePersonalData("lastName")}
                value={lastName}
              />
              {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Введите ваш email"
                onChange={onChangePersonalData("email")}
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control type="tel" name="tel" placeholder="Введите ваш номер телефона"
                onChange={onChangePersonalData("tel")}
                value={tel}
              />
              {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </section>
  )
}

export default St1PersonalData