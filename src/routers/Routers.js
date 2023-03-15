import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import Shop from '../pages/shop/Shop'
import Cart from '../pages/cart/Cart'
import ProductPage from '../pages/product-page/ProductPage'
import Signup from '../pages/signup/Signup'
import Login from '../pages/login/Login'
import ProtectedRoutes from './ProtectedRoutes'
import Dashboard from '../admin/dashboard/Dashboard'
import AllProducts from '../admin/all-products/AllProducts'
import AddProduct from '../admin/add-product/AddProduct'
import Users from '../admin/users/Users'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop/:id' element={<ProductPage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/*" element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='dashboard/allproducts' element={<AllProducts />} />
        <Route path='dashboard/addproduct'
          element={<AddProduct />} />
        <Route path='dashboard/users' element={<Users />} />
      </Route>
    </Routes>
  )
}

export default Routers