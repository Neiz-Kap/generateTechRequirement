import React from 'react';
import { Form } from 'react-bootstrap';

const St3 = ({ onChangeProjectData, purposes, tasks }) => {
  return (
    <section>
      <h2 className="mb-4 text-center">1. Цели и задачи создаваемого сайта</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formPurpose">
          <Form.Label>1.1 Цели создаваемого сайта</Form.Label>
          <Form.Text className="text-muted mb-2 d-block">
            Цели создания сайта – служат ориентиром для его будущей структуры, навигации, наполнения сайта, а так же определяют выбор платформы для его разработки. Цели - это итоговый результат, который должен быть достигнут после создания сайта.
          </Form.Text>
          <Form.Control as="textarea" rows={5} placeholder="Введите несколько пунктов с нумерацией"
            name="purposes"
            onChange={onChangeProjectData("purposes")}
            value={purposes}
          />
          <Form.Text className="text-muted">
            Пример&nbsp;&mdash; Цели создания интернет-магазина:<br />
            1. Сформировать постоянный положительный денежный поток за&nbsp;счет продаж товаров через интернет.<br />
            2. Расширения рынка сбыта за&nbsp;счет отсутствия географических ограничений (продажа товара любому покупателю, вне зависимости от&nbsp;того, где он&nbsp;физически находится).<br />
            3. Продвижение товара за&nbsp;счет рекламы и&nbsp;партнерских программ в&nbsp;интернете.<br />
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTask">
          <Form.Label>1.2 Задачи создаваемого сайта</Form.Label>
          <Form.Text className="text-muted mb-2 d-block">
            Задачи - это действия которые выполняются для достижения целей.
          </Form.Text>
          <Form.Control as="textarea" rows={5} placeholder="Введите несколько пунктов с нумерацией"
            name="tasks"
            onChange={onChangeProjectData("tasks")}
            value={tasks}
          />
          <Form.Text className="text-muted">
            Примеры:<br />
            1. Представлять товары с ценами и подробным описанием.<br />
            2. Рассказать о компаниях производящих товар с помощью описания или видеофайлов.<br />
            3. Обрабатывать заявки от клиентов, принимать платежи и оформлять доставку товаров.<br />
            4. Создавать базу клиентов, делать e-mail рассылки.<br />
            5. Встроенные калькуляторы дают возможность рассчитать стоимость: доставки товара, страхового полиса, количество краски для помещения, расход материала и т.д.<br />
          </Form.Text>
        </Form.Group>
      </Form>
    </section>
  )
}

export default St3
