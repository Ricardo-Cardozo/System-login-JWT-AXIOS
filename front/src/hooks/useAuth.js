import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFlashMessage from './useFlashMessage'
import api from '../utils/api'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const { setFlashMessage } = useFlashMessage()
  const navigate = useNavigate()

  // envia o token para api 
  useEffect(() => {
    const token =  localStorage.getItem('token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }
  }, [])

  // essa função é de registro de usuário
  async function register(user) {
    let msgText = 'Cadastro realizado com sucesso'
    let msgType = 'success'

    try {
      const data = await api.post('/users/register', user).then((response) => {
        return response.data
        //console.log(response.config.data)
      })

      await authUser(data)
      navigate('/login')
    } catch (error) {
      console.log(error.response.data.message)
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  // essa função é pra guardar o token no localStorage 
  async function authUser(data) {
    setAuthenticated(true)

    localStorage.setItem('token', JSON.stringify(data.token))
  }

  function logout() {
    const msgText = 'Logout realizado com sucesso'
    const msgType = 'success'

    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined
    navigate('/')

    setFlashMessage(msgText, msgType)
  }

  async function login(user) {
    let msgText = 'Login realizado com sucesso!'
    let msgType = 'success'

    try {
      const data = await api.post('/users/login', user).then((response) => {
        return response.data
      })

      await authUser(data)
      navigate('/')
      
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  return { register, authenticated, logout, login }
}