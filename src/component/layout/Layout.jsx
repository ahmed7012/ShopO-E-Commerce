import React from 'react'
import Navbar from './../navbar/Navbar';
import Footer from './../footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout({crrUser,clearData}) {
  return <>
  
  <Navbar crrUser = {crrUser} clearData={clearData}/>

  <Outlet/>
  
  <Footer/>

  
  
  
  </>


    
}
