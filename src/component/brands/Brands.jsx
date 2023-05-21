import axios, * as others from 'axios';
import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import Loading from '../loadingscreen/Loading';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import Aos from "aos"
// import 'aos/dist/aos.css'

export default function Brands() {

const [allBrands,setAllBrands] = useState(null);

async function getAllBrands() {

    try{
        const {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/brands')
        setAllBrands(data.data);

        console.log(data.data);

    }catch(err){
        console.log(err);
    }
}

// we used useEffect to call function

useEffect(function(){
getAllBrands();
// Aos.init({duration : 2000});
},[]);


    return <>
      <Helmet>
  <title>Brands</title>
  </Helmet>

    {allBrands ?     <div className="container">
        <div  className="row text-center align-items-center">
            {/* fixed  */}
            <div className="col-md-3">

                <div  className="brand-item">
                <h3 className='fw-bold'>Our Brands</h3>
                <h4 className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vero.</h4>
                </div>

            </div>

            {allBrands.map(function(brand,idx){
                return  <div key={idx} className="col-md-3">
                
                <Link className='text-decoration-none' to={`/brandPro/${brand._id}`}>
                <div className="brand-item ">
                    <img  className='w-100' src={brand.image} alt={brand.name} />
                    <h3>{brand.name}</h3>
                </div>
                </Link>

    
                </div>
            })}


        </div>
    </div>:<Loading/>}
    
    </>;
}
