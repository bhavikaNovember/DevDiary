import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
      {/* className="w-full h-full flex flex-col min-h-screen border-8 border-purple-900 bg-fuchsia-300" */}
      {/* min-h-screen flex flex-wrap content-between */}
      {/* <div > */}
      {/* className='w-full block' */}
        <Header/>
        <main className="flex-grow">
        <Outlet /> 
        </main>
        <Footer/>
      {/* </div> */}
    </>
  ) : null
  
  
}

export default App