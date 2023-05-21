import axios, * as others from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Await, useParams } from 'react-router-dom';
import Loading from './../loadingscreen/Loading';
import { cartContext } from '../cartcontext/Cartcontext';
import $ from 'jquery';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';




export default function ProductDetails() {

const {addProToCart , removeCartItem} =    useContext(cartContext);




async function addMyPro(id) {
    

    if (await addProToCart(id) == true) {
        $('.succMsg').fadeIn(1000,function(){
            setTimeout(() => {
                $('.succMsg').fadeOut(1000)
            },2000)
        });

        $('#delbtn').fadeIn(500);
        $('#addbtn').fadeOut(500);

    }
}


async function removeMyPro(id) {
    
    if (await removeCartItem(id) == true) {
        
        $('.remoMsg').fadeIn(500 , function() {
            setTimeout(() => {
                $('.remoMsg').fadeOut(500)
            },2000);
        });

        $('#addbtn').fadeIn(500);
        $('#delbtn').fadeOut(500);

    }
    
}



const [proDetails,setProDetails] = useState(null);

const {id} = useParams();
async function getProDetails() {
    
    try {
        const {data} = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`);
        setProDetails(data.data)
        console.log(data.data);

    } catch (error) {
        console.log( error);
    }

    
}

useEffect(function(){
    getProDetails();
},[]);



    return <>


    

    {proDetails?    <div className="container">


        <div className="row my-5">

            <div className="col-md-6">

                <div>
                <Carousel>
                <div>
                    <img  className='w-75' alt="product  image"  src={proDetails.imageCover} />
                    
                </div>
                <div>
                    <img  className='w-75' alt="product  image" src={proDetails.images[0]} />
                    
                </div>
                <div>
                    <img  className='w-75' alt="product  image" src={proDetails.images[1]} />
                    
                </div>
                <div>
                    <img  className='w-75' alt="product  image" src={proDetails.images[2]} />
                    
                </div>
                <div>
                    <img  className='w-75' alt="product  image" src={proDetails.images[3]} />
                    
                </div>
            </Carousel>

{/* 
                <img style={{'height':'400px'}} src={proDetails.imageCover} className='w-100' alt="product  image" /> */}

                </div>
            </div>

            <div className="col-md-6">

                <div>

                <h2 className='fw-bold'>{proDetails.title}</h2>
                <p className='fs-5 text-dark'> {proDetails.description}</p>
                <i class="fa-solid fa-star text-warning fs-6 mb-3 ps-2"></i>
                <i class="fa-solid fa-star text-warning fs-6 mb-3 ps-2"></i>
                <i class="fa-solid fa-star-half-stroke text-warning fs-6 mb-3 ps-2"></i>

                    <hr />

                <h3 className='fw-bold fs-2'>{proDetails.price} or 99.99 / Month</h3>
                <p className='text-dark'>Suggested payment with 6 months Special financing</p>

                <hr />


                <button id='addbtn' onClick={function(){addMyPro(proDetails.id)}} className='btn btn-outline-success w-25 p-3 rounded-5'>Add to Cart</button>
                
                <button onClick={function () {removeMyPro (proDetails.id)}} style={{'display':'none'}} id='delbtn' className='btn btn-danger w-100'>Remove product from Cart -</button>

                
                <div style={{'display':'none'}} className='alert alert-success text-center text-dark succMsg'>Product added successfully to your cart</div>
                </div>

                <div  style={{'display':'none'}} className='alert alert-danger text-center text-dark remoMsg'>Product Removed successfully from your cart</div>



                    <div className='deliver mt-4 p-2 rounded-4'>

                <div className=" d-flex  ">

                    <div className="icon">
                    <i class="fa-solid fa-truck fs-2 me-2"></i>
                    </div>

                    <div className="desc">
                        <h3>Free Delievery</h3>
                        <h4 className='fs-6 fw-bold'>Enter Your Postal Code For Delivey Availability</h4>
                    </div>

                </div>

                <div className=" d-flex mt-3 deliver-2 pt-2">

                    <div className="icon">
                    <i class="fa-solid fa-calendar fs-2 me-2"></i>
                    
                    </div>

                    <div className="desc">
                        <h3>Return Delievery</h3>
                        <h4 className='fs-6 fw-bold'>Free 30days Delievery Return</h4>
                    </div>

                </div>

            </div>
        </div>
        </div>
    </div>:<Loading/>}

    </>
}
