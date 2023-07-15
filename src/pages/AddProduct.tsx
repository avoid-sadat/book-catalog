import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import AddProductForm from '../components/AddProductForm'

export default function AddProduct() {
  return (
    <>
    <Navbar/>
    <AddProductForm/>
    <Footer/>
  </>
  )
}
