import React from 'react';
import { Form } from 'react-bootstrap';

const St3 = () => {
  return (
    <section>
      <h2 className="mb-4 text-center">1. Цели и задачи создаваемого сайта</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formSiteName">
          <Form.Label>Название сайта</Form.Label>
          <Form.Control type="text" placeholder="Введите желаемое название сайта"
            name="siteName"
          // onChange={onChangeProjectData("siteName")}
          // value={siteName}
          />
          <Form.Text className="text-muted">
            Примеры: Интернет-магазин модной одежды и обуви
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDomainName">
          <Form.Label>Адрес сайта (доменное имя)</Form.Label>
          <br />
          <Form.Text className="text-muted mb-2 d-block">
            Лучший домен – короткий домен. Он должен легко читаться, восприниматься на слух, запоминаться. Пользователь должен без проблем вводить его в браузере. Оптимальный вариант – короткое и запоминающееся слово. Введите ваши предложения. Разработчик сайта согласует с вами варианты доступных доменных имен.
          </Form.Text>
          <Form.Control type="text" placeholder="Примеры: vk.com, youtube.com, trello.com"
            name="domainName"
          // onChange={onChangeProjectData("domainName")}
          // value={domainName}
          />
        </Form.Group>
      </Form>
    </section>
  )
}

export default St3
