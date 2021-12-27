import React from 'react';
import { Form } from 'react-bootstrap';

const St4 = ({ onChangeProjectData, cms, isMobile, isCMS }) => {
  return (
    <section>
      <h2 className="mb-4 text-center">2. Общие требования к оформлению и верстке страниц</h2>
      <h3 className="mb-4 text-center">2.1. Требования к программному обеспечению сайта</h3>

      <Form>
        <Form.Group className="mb-3" controlId="formCMS">
          <Form.Label>2.1.1 Выбор системы управления контентом (CMS)</Form.Label>
          <Form.Text className="text-muted mb-2 d-block">
            Система управления контентом (CMS - «Content Management Software») — система, предназначенная для управления сайтом. С помощью CMS вы полностью можете управлять сайтом, его наполнением, страницами, изображениями, видео, оформлением. Делается все это через административную панель, почти у всех CMS она есть.
          </Form.Text>
          <Form.Select aria-label="Default select example"
            onChange={onChangeProjectData("cms")}
            value={cms}
          >
            <option selected>Выберите пункт</option>
            <option value="Разработчик осуществляет выбор системы управления контентом. Он проанализирует цели и задачи создаваемого сайта и предложит Вам лучший вариант CMS на согласование">
              Разработчик осуществляет выбор системы управления контентом. Он проанализирует цели и задачи создаваемого сайта и предложит Вам лучший вариант CMS на согласование
            </option>
            <option value="Wordpress">Wordpress</option>
            <option value="Joomla">Joomla</option>
            <option value="Drupal">Drupal</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <h3 className="mb-4 text-center">2.2. Общие требования к оформлению и верстке страниц</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formIsMobile">
          <Form.Label>2.2.1 Требуется ли отображение сайта на мобильных устройствах?</Form.Label>
          <Form.Text className="text-muted mb-2 d-block">
            Мобильная версия сайта желательна, если сайт предназначен для широкой аудитории. Она обязательна, если сайт нужен для аудитории, которая воспользуется им с мобильного устройства почти в 100% случаях в силу специфики.
          </Form.Text>
          <Form.Select aria-label="Default select example"
            onChange={onChangeProjectData("isMobile")}
            value={isMobile}
          >
            <option selected>Выберите пункт</option>
            <option value="Требуется отображение сайта на мобильных устройствах.">
              Требуется отображение сайта на мобильных устройствах.
            </option>
            <option value="Отображение сайта на мобильных устройствах не требуется.">
              Отображение сайта на мобильных устройствах не требуется.
            </option>
          </Form.Select>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formIsCMS">
          <Form.Label>2.2.2 Управление пользователями и правами доступа</Form.Label>
          <Form.Text className="text-muted mb-2 d-block">
            Укажите требование для настройки прав доступа различным группам пользователей с разными правами. Основные системы управления контентом обеспечивают настраиваемую структуру пользователей и права доступа, которые можно определить в дальнейшем самостоятельно
          </Form.Text>
          <Form.Select aria-label="isCMS"
            onChange={onChangeProjectData("isCMS")}
            value={isCMS}
          >
            <option selected>Выберите пункт</option>
            <option value="Заказчик самостоятельно настраивает CMS">
              Заказчик самостоятельно настраивает CMS
            </option>
            <option value="Разработчик на основании целей и задач создания сайта предлагает заказчику перечень пользователей и их права доступа">
              Разработчик на основании целей и задач создания сайта предлагает заказчику перечень пользователей и их права доступа
            </option>
          </Form.Select>
        </Form.Group>
      </Form>
    </section>
  )
}

export default St4
