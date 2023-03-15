import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../routers/Routers'
import AdminNav from '../../admin/admin-nav/AdminNav'
import { useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname.startsWith('/dashboard')
        ? <AdminNav /> : <Header />
      }

      <Routers />
      <Footer />
    </>
  )
}

export default Layout