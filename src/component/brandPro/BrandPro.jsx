// import React from 'react'
import axios, * as others from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./../loadingscreen/Loading";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function BrandPro() {
  const { id } = useParams();
  const [brandPro, setbrandPro] = useState(null);

  async function getBrandPro() {
    try {
      const { data } = await axios.get(
        "https://route-ecommerce.onrender.com/api/v1/products",
        {
          params: { brand: id },
        }
      );

      setbrandPro(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getBrandPro();
  }, []);

  return (
    <>
      {brandPro ? (
        <div className="container">
          <div className="row">

            {brandPro.length == 0 ? <h2 className="my-5 text-center text-danger">Sorry all product had sold in this Brand </h2> : brandPro.map(function (brand, idx) {

return (
  <div key={idx} className="col-md-3 my-4">

    <Link className="text-decoration-none" to={`/prodetails/${brand.id}`}>

      <div className="item-home rounded-5 bg-white text-dark  h-100">

        <img src={brand.imageCover} className="w-100 rounded-5" alt={brand.title}/>

        <div  className="px-4 pt-3 pro-desc">

          <h3 className="fs-5 fw-bold pro-title">{brand.title} </h3>

          {brand.priceAfterDiscount ? <><h4 className="  py-3 fw-bold text-danger"><del className="text-secondary">$ {brand.priceAfterDiscount}</del> $ {brand.price}</h4></> : <><h4 className="fs-3 fw-bold text-danger">$ {brand.price}</h4></>}
        </div>
      </div>
    </Link>
    
  </div>
);
}) }
            

          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
