import axios, * as others from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../loadingscreen/Loading";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useContext } from "react";
import { cartContext } from "./../cartcontext/Cartcontext";
import Aos from "aos"
import 'aos/dist/aos.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet';

export default function Home() {
  // main slider

  const [allBrands, setAllBrands] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };


  // brand slider

  const brands = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const { addProToCart } = useContext(cartContext);

  // brand function

  async function getAllBrands() {
    try {
      const { data } = await axios.get(
        "https://route-ecommerce.onrender.com/api/v1/brands"
      );
      setAllBrands(data.data);

      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function addMyPro(id, idx) {
    if ((await addProToCart(id)) == true) {
      $(".home-succMsg").fadeIn(1000, function () {
        setTimeout(() => {
          $(".home-succMsg").fadeOut(1000);
        }, 2000);
      });

      $(`#delbtn${idx}`).fadeIn(500);
      $(`#addbtn${idx}`).fadeOut(500);
    }
  }

  const [allProduct, setAllProducts] = useState(null);

  async function getAllProducts() {
    try {
      let { data } = await axios.get(
        "https://route-ecommerce.onrender.com/api/v1/products"
      );
      setAllProducts(data.data);
      // console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  // we used useEffect to call function
  useEffect(function () {
    getAllProducts();
    getAllBrands();

    Aos.init({duration : 2000});
  }, []);

  return (
    <>
      <Helmet>
  <title>Products</title>
  </Helmet>

      <div
        style={{ display: "none" }}
        className="alert alert-success text-center position-fixed text-dark home-succMsg"
      >
        Product added successfully
      </div>



 





      {allProduct ? (
        <div className="container">


      {/* main slider */}

      <div className="sliding-st w-100 m-auto my-5 ">
        <Slider {...settings}>
          <div>
            <img
              className="rounded-3 w-100"
              style={{ height: "350px" }}
              src={require("../../img/attractive-young-woman-portrait-indoor.jpg")}
              alt="product"
            />
          </div>
          <div>
            <img
              className="rounded-3 w-100"
              style={{ height: "350px" }}
              src={require("../../img/beautiful-woman-making-scale-with-her-arms-wide-open-isolated-white-wall.jpg")}
              alt="product"
            />
          </div>
          <div>
            <img
              className="rounded-3 w-100"
              style={{ height: "350px" }}
              src={require("../../img/cute-young-cozy-woman-indoor-portrait.jpg")}
              alt="product"
            />
          </div>
          <div>
            <img
              className="rounded-3 w-100"
              style={{ height: "350px" }}
              src={require("../../img/portrait-woman-standing-against-grey-wall-with-her-arms-crossed-looking-camera.jpg")}
              alt="product"
            />
          </div>
          <div>
            <img
              className="rounded-3 w-100"
              style={{ height: "350px" }}
              src={require("../../img/woman-with-crossed-arms-looking-camera.jpg")}
              alt="product"
            />
          </div>
          <div>
            <img
              className="rounded-3 w-100"
              style={{ height: "350px" }}
              src={require("../../img/portrait-young-woman-standing-against-grey-wall.jpg")}
              alt="product"
            />
          </div>
        </Slider>
      </div>

      {/* Brand slider */}

      
      {allBrands ? (
        <div className="brands">
          <h2 className="fw-bold mb-4">Browse By Brands</h2>

          <div className="sliding-st brand-slid m-auto w-100 my-5 ">
            <Slider {...brands}>
              {allBrands.map(function (brand, idx) {
                return (
                  <div key={idx} className="border-1">
                    <Link
                      className="text-decoration-none"
                      to={`/brandPro/${brand._id}`}
                    >
                      <img
                        className="w-100 border"
                        src={brand.image}
                        alt={brand.name}
                      />
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      



          <div className="row">
            <h2 className="fw-bold mt-5">Explore Our Products</h2>

            {allProduct.map(function (pro, idx) {
              
              return (
                <div data-aos='zoom-in' key={idx} className=" col-md-3 my-5 ">
                  

                  
                      <figure data-aos='zoom-in' className="position-relative parent"> 

                      <img style={{'height' : '300px'}} src={pro.imageCover} className="w-100 rounded-3" alt={pro.title} />
                      
                      <div class="overlay">
                    <button
                      id={`addbtn${idx}`}
                      onClick={function () {
                        addMyPro(pro.id, idx);
                      }}
                      className="btn home-btn w-75 my-3">
                      {" "}
                      <i class="fa-solid fa-cart-shopping"></i> Add to Cart{" "}
                    </button>
                    <button
                      id={`delbtn${idx}`}
                      style={{ display: "none" }}
                      onClick={function () {
                        addMyPro(pro.id, idx);
                      }}
                      className="btn btn-danger w-75 my-3"
                    >
                      {" "}
                      <i class="fa-solid fa-cart-shopping"></i> Remove From Cart{" "}
                    </button>
                  </div>

                      </figure>
                      <Link
                    to={`/prodetails/${pro.id}`}
                    className="text-decoration-none"
                  >


                      <div className="item-home rounded-2  text-dark">

                      <div className="px-4 pt-3 pro-desc">
                        
                        <h3 className="fs-5 fw-bold px-2 py-1 text-white rounded-3 bg-primary rating">
                        <i class="fa-solid fa-star text-warning pe-2"></i>
                          {pro.ratingsAverage}
                        </h3>
                    
                        <h3 className="fs-6 fw-bold pro-title">{pro.title.slice(0,pro.title.indexOf('',20))} </h3>

                        {pro.priceAfterDiscount ? ( 
                          <>
                          
                            <h4 className=" pb-3 fw-bold ">
                              <del className="text-secondary pe-3">
                                $ {pro.priceAfterDiscount}
                              </del>
                              <span className="text-dark">$ {pro.price}</span>
                            </h4>
                          </>
                        ) : (
                          <>
                            <h4 className="fs-3 fw-bold text-dark">
                              $ {pro.price}
                            </h4>
                          </>
                        )}
                      </div>
                    </div>
                  </Link>

              
                  
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Loading />

      )}

          <div className="container last-home w-100 vh-100 d-flex">
            <div className="my-auto ms-5 ">
            <h2 className="fs-1 fw-bold">Get weekly update</h2>
            <div className="d-flex mt-3">
            <input type="text" className="form-control" placeholder="example@gmail.com" />
            <button className="btn btn-dark ms-2">Subscribe</button>
            </div>
      
            </div>
       
          </div> 

    </>
  );
}
