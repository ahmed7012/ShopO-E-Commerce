import React from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { cartContext } from './../cartcontext/Cartcontext';
import { useNavigate } from 'react-router-dom';

// import { useFormik } from 'formik';

export default function Payment() {

    const{cartId} =  useContext(cartContext);
    const nav = useNavigate();


    async function confirmCash() {
        
        try {

            const {data} = await axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/${cartId}` , {
                
                    "shippingAddress":{
                        "details": document.querySelector('#details').value ,
                        "phone": document.querySelector('#phone').value ,
                        "city": document.querySelector('#city').value 
                        }
                
            } , {
                headers :{'token' : localStorage.getItem('tkn')}
            })

            if (data.status == "success") {
                nav('/allorders')
            }

            // console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }


    async function confirmCredit() {
      
      try {
        const {data} = await axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}`, {
                
          "shippingAddress":{
              "details": document.querySelector('#details').value ,
              "phone": document.querySelector('#phone').value ,
              "city": document.querySelector('#city').value 
              }
      
        } , {
            headers :{'token' : localStorage.getItem('tkn')},
            params : {'url' : 'http://localhost:4200'}
        })

        if (data.status == "success") {
          
          window.open(data.session.url)
        }
      } catch (error) {
        
      }

    }

    // function handleSubmit(values) {
    //   confirmCash();
    //   confirmCredit();
    // }

    // let formik = useFormik({
    //   onSubmit: function (values) {
    //     handleSubmit(values);
    //   },
    //   initialValue : {
    //     details : '',
    //     city : '',
    //     phone: ''
    //   },
    //   validate: function (values) {
    //     let errors = {};
  
    //     if (values.details.length < 3 || values.details.length > 50) {
    //       errors.details = "name must be more than 3chars and greater than 10";
    //     }
  
    //     if (values.city.length < 4 || values.city.length > 15) {
    //       errors.city = "name must be more than 3chars and greater than 10";
    //     }
  
   
    //     if (!values.phone.match(/^01[0125][0-9]{8}$/)) {
    //       errors.phone = "phone must be egyption number";
    //     }

    //     return errors;
    //   },
     
    // })

  return <>
<div className="container">
  
  <div className=" mt-5 py-5 sign-up">

  <h6 className='fs-2 mb-4 fw-bold text-white'>Confirm your order</h6>


    <form className='w-100'>

    <label className='mt-3'>Address Details</label>

    <input type="text" id='details' className='form-control' placeholder='Address Details...' />


    <label className='mt-3' htmlFor="phone">Phone Number</label>
    <input   type="text" id='phone' className='form-control' placeholder='Phone Number...' />



    <label className='mt-3' htmlFor="city">City</label>

    <input  type="text" id='city' className='form-control' placeholder='City...' />



      <button onClick={confirmCash} type="button" className='btn btn-primary mt-3 w-100'>Pay Cash</button>
      <button onClick={confirmCredit} type="button" className='btn btn-danger mt-3  w-100'>Pay Online</button>

    </form>

  </div>
  </div>
  </>
}
