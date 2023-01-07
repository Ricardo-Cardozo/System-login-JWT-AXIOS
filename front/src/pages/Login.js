import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import Input from '../components/Input'
import Submit from '../components/Submit'
import { useState, useContext } from 'react'
import { Context } from '../context/UserContext'


const Login = () => {
  const [user, setUser] = useState([])
  const { login } = useContext(Context)

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    login(user)
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Digite seu e-mail"
            name="email"
            type="email"
            label="E-mail:"
            onChange={handleChange}
          />
          <Input
            placeholder="Digite sua senha"
            name="password"
            type="password"
            label="Senha:"
            onChange={handleChange}
          />
          <Submit
            type="submit"
            value="Enviar"
          />
        </form>
        <br />
        <p>Ainda não tem conta? <Link className={styles.link} to="/register">Cadastre-se agora!</Link></p>
      </div>
    </div>
  )
}

export default Login