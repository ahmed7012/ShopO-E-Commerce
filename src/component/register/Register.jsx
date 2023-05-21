import axios, { Axios } from "axios";
import { useFormik } from "formik";
import React from "react";
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  async function registerNewUser(obj) {
    try {
      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/auth/signup",
        obj
      );

      if (data.message == "success") {
        $(".succesmsg").fadeIn(1000, function () {
          navigate("/login");
        });
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      $(".errmsg").fadeIn(1000, function () {
        setTimeout(() => {
          $(".errmsg").fadeOut(1000);
        }, 3000);
      });
    }
  }

  let users = {
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  };

  let formik = useFormik({
    initialValues: users,

    onSubmit: function (values) {
      registerNewUser(values);
    },

    validate: function (values) {
      let errors = {};

      if (values.name.length < 3 || values.name.length > 10) {
        errors.name = "name must be more than 3chars and greater than 10";
      }

      if (!values.email.includes("@") || !values.email.includes(".com")) {
        errors.email = "your mail is not valid";
      }

      if (!values.phone.match(/^01[0125][0-9]{8}$/)) {
        errors.phone = "phone must be egyption number";
      }

      if (values.password.length < 8 || values.password.length > 15) {
        errors.password = "pass must be more than 8chars and greater than 15";
      }

      if (values.rePassword != values.password) {
        errors.rePassword = "password not match";
      }
      return errors;
    },
  });

  return (
    <>
     <div className="container">
    <div className="register my-5">

    


        <div style={{ display: "none" }} className="alert alert-danger text-center errmsg"> Email is already used </div>

        <div style={{ display: "none" }} className="alert alert-success text-center succesmsg"> registeration compeleted </div>


        <div className="sign-up rounded-3">

        <h6 className="fs-2 mb-4 fw-bold text-white">SignUp</h6>
       

        <form onSubmit={formik.handleSubmit} className="input-icons">

          <i class="fa-solid fa-user icon fs-5"></i>

          <input onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} type="text" id="name" placeholder="Full Name" className="my-2 form-control input-field ps-5" />

          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger text-center text-dark">
              {formik.errors.name}
            </div>
            
          ) : (
            ""
          )}

          <i class="fa-solid fa-envelope icon fs-5"></i>
          <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} type="text" id="email" placeholder="Email Address" className="my-2 form-control input-field ps-5"/>

          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger text-center text-dark">
              {formik.errors.email}
            </div>
          ) : (
            ""
          )}
          <i class="fa-solid fa-phone icon fs-5"></i>
          <input
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            onChange={formik.handleChange}
            type="text"
            id="phone"
            placeholder="phone . . ."
            className="my-2 form-control input-field ps-5" 
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger text-center text-dark">
              {formik.errors.phone}
            </div>
          ) : (
            ""
          )}

          <i class="fa-solid fa-lock icon fs-5"></i>
          <input
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            id="password"
            placeholder="password . . ."
            className="my-2 form-control input-field ps-5" 
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger text-center text-dark">
              {formik.errors.password}
            </div>
          ) : (
            ""
          )}

          <i class="fa-solid fa-lock icon fs-5"></i>
          <input
            onBlur={formik.handleBlur}
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            type="password"
            id="rePassword"
            placeholder="rePassword . . ."
            className="my-2 form-control input-field ps-5" 
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger text-center text-dark">
              {formik.errors.rePassword}
            </div>
          ) : (
            ""
          )}

          <button type="submit" className="btn btn-danger mt-3 w-100"> Sign Up </button>

          <h4 className="text-white text-center fs-6 mt-4">You agree to ShopO <span className="text-danger fw-bold"> Terms </span>  and <span className="text-danger fw-bold"> Privacy </span></h4>

          <h4 className="text-white text-center fs-6 mt-4">if Already Member <Link  to={'/login'} className="text-decoration-none text-danger fw-bold">Login Now </Link></h4>

        </form>
        </div>

        </div>

      </div>
    

    </>
  );
}
