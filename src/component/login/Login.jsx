import axios, { Axios } from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Login({getUserData}) {


  // https://route-ecommerce.onrender.com//api/v1/auth/signup
const navigate = useNavigate();

async function LoginUser(obj) {


  
  try{
    let {data} = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',obj);

    if (data.message == 'success') {

      localStorage.setItem('tkn',data.token);

      getUserData();

      $('.succesmsg').fadeIn(1000,function(){
        navigate('/home')
      });
    }
    // console.log( data.token );
  }

  catch(err){
    console.log(err);
    $('.errmsg').fadeIn(1000,function(){
      setTimeout(()=>{
        $('.errmsg').fadeOut(1000)
      },3000);
    });
  }
}


let users= {
  email:'',
  password:'',
}

let formik = useFormik({

  initialValues : users,

  onSubmit:function(values){
    LoginUser(values)
  },

  validate: function(values){
    let errors = {};


    if(! values.email.includes('@') || ! values.email.includes('.com') ){
      errors.email='your mail is not valid'
    }

    if(values.password.length < 8 || values.password.length >15 ){
      errors.password='pass must be more than 8chars and greater than 15'
    }


    return errors;
  }
})




  return <>
  

<div className="container">

  <div className="mt-5 py-5 sign-up">

  <h6 className='fs-2 mb-4 fw-bold text-white'>Sign In</h6>

  <div style={{'display':'none'}} className="alert alert-danger text-center errmsg">Email or Password is Wrong</div>
  <div style={{'display':'none'}} className="alert alert-success text-center succesmsg">Welcome Back</div>
    <form onSubmit={formik.handleSubmit} className="input-icons">


    <i class="fa-solid fa-envelope icon fs-5"></i>
      <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} type="text" id='email' placeholder=' email . . .' className="my-2 form-control input-field ps-5"  />
      {formik.errors.email && formik.touched.email? <div className='alert alert-danger text-center text-dark'>{formik.errors.email}</div> :''}

      <i class="fa-solid fa-lock icon fs-5 mt-3"></i>
      <input onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} type="password" id='password' placeholder='password . . .' className="my-2 form-control input-field ps-5 mt-4"  />
      {formik.errors.password && formik.touched.password? <div className='alert alert-danger text-center text-dark'>{formik.errors.password}</div> :''}


      <button type='submit' className='btn btn-danger w-100  mt-3'>Login</button>

      <h4 className="text-white text-center fs-6 mt-4">You agree to ShopO <span className="text-danger fw-bold"> Terms </span>  and <span className="text-danger fw-bold"> Privacy </span></h4>

        <h4 className="text-white text-center fs-6 mt-4">New to Are ? <Link  to={'/register'} className="text-decoration-none text-danger fw-bold">Register Now </Link></h4>

    </form>
    </div>

  </div>
  
  
  </>
}
