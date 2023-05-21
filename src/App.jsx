import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Login from './component/login/Login';
import Home from './component/home/Home';
import Register from './component/register/Register';
import Error from './component/error/Error';
import Brands from './component/brands/Brands';
import ProductDetails from './component/proDetails/ProductDetails';
import BrandPro from './component/brandPro/BrandPro';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import Profile from './component/profile/Profile';
import { useEffect } from 'react';
import Cart from './component/cart/Cart';
import Cartcontext from './component/cartcontext/Cartcontext';
import Payment from './component/payment/Payment';
import Allorders from './component/allorders/Allorders';
import mySlider from './component/MySlider/MySlider';
import { Offline, Online } from "react-detect-offline";


export default function App() {


  function ProtectedRoute({children}) {
    
    if (crrUser==null) {
      return <Navigate to='/login' />
    }else{
      return <>{children}</>
    }

  }




  function clearData() {

    localStorage.removeItem('tkn');
    setcrrUser(null);
    
  }


  const [crrUser, setcrrUser] = useState(null)

  function getUserData() {


    const userData = jwtDecode(localStorage.getItem('tkn'));

    setcrrUser(userData);
    // console.log(userData);
  }




  // ! starting to make routing 

  const router = createBrowserRouter([
    
    // {path:'myslider',element : <mySlider/>},

    {path:'',element:<Layout clearData={clearData} crrUser = {crrUser}/>,children: [


      {path:'',element : <Cartcontext><Home/></Cartcontext>},
      {path:'home',element : <Cartcontext><Home/></Cartcontext>},
      {path:'login',element : <Login  getUserData = {getUserData}/>},
      {path:'register',element : <Register/>},
      {path:'brandPro/:id',element : <BrandPro/>},
      {path:'profile',element : <ProtectedRoute><Profile user = {crrUser} /></ProtectedRoute>},
      {path:'prodetails/:id',element :<ProtectedRoute> <Cartcontext><ProductDetails/></Cartcontext> </ProtectedRoute>},
      {path:'cart',element :<ProtectedRoute> <Cartcontext><Cart/></Cartcontext> </ProtectedRoute>},
      {path:'payment',element :<ProtectedRoute> <Cartcontext><Payment/></Cartcontext> </ProtectedRoute>},
      {path:'allorders',element :<ProtectedRoute> <Allorders crrUser={crrUser}/> </ProtectedRoute>},
      {path:'brands',element : <Brands/>},

      {path:'*',element : <Error/>}

    ]}

  ])



  return <>
  
{/* <Offline>
  <div className="alert alert-danger mt-5">Opps You Got Now offline</div>
</Offline> */}
  
  <Online>
  <RouterProvider router={router} />

  </Online>
  
  
  </>
}
