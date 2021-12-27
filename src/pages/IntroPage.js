import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IntroPage = () => {
  return (
    <Container className="py-3 intro__container">
      <h1>Конструктор технического задания для создания сайта</h1>
      <p>Написать техническое задание для сайта легко. Просто заполните шаблон и Вы получите автоматически сгенерированный текст технического задания.</p>
      <p>Время заполнения ~ 5 минут.</p>
      <p>Ввод личных данных и регистрация не обязателена. Мы работаем для Вас.</p>
      <Link to={'/step/1'}>
        <Button className="mx-auto">
          Создать ТЗ
        </Button>
      </Link>
    </Container>
  )
}

export default IntroPage
