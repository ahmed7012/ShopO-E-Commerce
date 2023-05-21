import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../loadingscreen/Loading';
import { Helmet } from 'react-helmet';

export default function Allorders({crrUser}) {

    const [allOrders, setallOrders] = useState(null)


    async function getAllOrders() {
        try {
            
            const {data} = await axios.get(`https://route-ecommerce.onrender.com/api/v1/orders/user/${crrUser.id}`)

            console.log(data);

            setallOrders(data)
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(function () {
        getAllOrders();
    } , [])


  return <>
  <Helmet>
  <title>Products</title>
  </Helmet>
    {allOrders ?  <div className="container">
    <h2 className='fw-bold my-5'>hello honey thats your all orders</h2>

    <div className="row gy-4 my-3">

        {allOrders.map(function (order , idx) {
            return <div key={idx} className="col-md-4">
            <div className="order bg-white rounded-4 p-3">

                <div className="container">
                    <div className="row">

                    {order.cartItems.map(function(item , index) {

                        return  <div className=" col-sm-3">
                        <div className="items">
                            <img src={item.product.imageCover} alt=""  className='w-100'/>
                            <h5>count : <b>{item.count}</b> </h5>
                        </div>
                    </div>
                    })}


                    </div>
                </div>


                <h5>price : <b>{order.totalOrderPrice}</b></h5>
                <h5>order pay type : <b>{order.paymentMethodType }</b> </h5>

            </div>
        </div>
        })}

    </div>
</div>  : <Loading/>}


  </>
}
