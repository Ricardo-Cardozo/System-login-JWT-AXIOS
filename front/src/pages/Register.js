import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import Input from '../components/Input'
import Submit from '../components/Submit'
import { Context } from '../context/UserContext'


const Register = () => {
  const [user, setUser] = useState([])
  const { register } = useContext(Context)

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

 const handleSubmit = (e) => {
  e.preventDefault()
  register(user)
 }

  return (
    <div>
      <div className={styles.container}>
      <h1>Cadastro</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Digite seu nome"
            name="name"
            type="text"
            label="Nome:"
            onChange={handleChange}
          />
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
          <Input
            placeholder="Confirme sua senha"
            name="confirmpassword"
            type="password"
            label="Confirme a senha:"
            onChange={handleChange}
          />
          <Submit
            type="submit"
            value="Enviar"
          />
        </form>
        <br />
        <p>Já tem conta? <Link className={styles.link} to="/login">Faça o login!</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Register