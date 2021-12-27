Template Stn:
import React from 'react';
import { Form } from 'react-bootstrap';

const St4 = ({ onChangeProjectData, purposes, tasks }) => {
  return (
    <section>
      <h2 className="mb-4 text-center">2. Общие требования к оформлению и верстке страниц</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formPurpose">
          <Form.Label>2.1.1 Выбор системы управления контентом (CMS)</Form.Label>
          <Form.Text className="text-muted mb-2 d-block">
            Система управления контентом (CMS - «Content Management Software») — система, предназначенная для управления сайтом. С помощью CMS вы полностью можете управлять сайтом, его наполнением, страницами, изображениями, видео, оформлением. Делается все это через административную панель, почти у всех CMS она есть.
          </Form.Text>
          <Form.Control as="textarea" rows={4} placeholder="Введите несколько пунктов с нумерацией"
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
          <Form.Label>2.2 Задачи создаваемого сайта</Form.Label>
          <Form.Text className="text-muted mb-2 d-block">
            Задачи - это действия которые выполняются для достижения целей.
          </Form.Text>
          <Form.Control as="textarea" rows={4} placeholder="Введите несколько пунктов с нумерацией"
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

export default St4




  // useEffect(() => {
  //   const json = localStorage.getItem("step_1");
  //   if (json) {
  //     const inputValue = JSON.parse(json);
  //     setValue(inputValue);
  //   }
  //   // console.log(value);
  //   return () => {
  //     console.log(value);
  //   }
  // }, [step])

      //   let inputValue = JSON.stringify(value)
      //   console.log(value);
      //   console.log(inputValue);
      //   localStorage.setItem('step_1', "test");


        // useEffect(() => {
  //   localStorage.setItem('step_1', value);
  // }, [value]);