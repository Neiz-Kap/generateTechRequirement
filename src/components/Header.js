import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams, useLocation } from 'react-router'

const Header = () => {
  const indexStep = useParams()
  const location = useLocation()
  console.log(indexStep)
  console.log(location)
  return (
    <header className="py-3">
      <Container
        className="d-flex justify-content-between"
      >
        <Link className="text-white text-underline" to={`/step/${indexStep - 1}`}>Назад</Link>
        <Link className="text-white text-underline" to={`/step/${indexStep + 1}`}>Вперёд</Link>
      </Container>
    </header>
  )
}

export default Header
