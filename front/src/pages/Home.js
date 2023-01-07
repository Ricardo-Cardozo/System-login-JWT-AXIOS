import React, { useContext } from 'react'
import { Context } from '../context/UserContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { authenticated, logout } = useContext(Context)

  return (
    <div>
      {
        authenticated ?
          <>
            <h1>Seja Bem-vindo</h1>
            <br /><br />
            <Link to='/login' style={{textAlign: 'center'}} onClick={logout}><h2>Sair!</h2></Link>
          </>
          : 
          <Link to='/login'><h2>Faça seu Login!</h2></Link>
      }
    </div>
  )
}

export default Home