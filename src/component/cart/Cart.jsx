import React from 'react'
import { useContext } from 'react'
import { cartContext } from './../cartcontext/Cartcontext';
import Loading from '../loadingscreen/Loading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function Cart() {

  const {cartProducts , totlaCartPrice , numOfCartItem , removeCartItem , updateCount} = useContext(cartContext)




console.log(cartProducts);


  return <>
  <Helmet>
  <title>Cart</title>
  </Helmet>

  
    {cartProducts ? <div className="container">

    <div className="row my-3 g-5">





      <div className="col-md-9">
        
        
        <div className="cart-item bg-white">

          <h4 className='p-2 fw-bold'>Cart ( {numOfCartItem} ) </h4>
          <hr  className='bg-secondary'/>

        {/* repeated  */}
        

        
        {cartProducts.map(function(pro , idx) { return <div key={idx} className=" pro-details d-flex border-bottom ">
                <div className="row ">

                  <div className="col-md-3 ">
                      <figure className='ms-2'>
                        <img  src={pro.product.imageCover} alt="product img" className='w-100' />
                        </figure>

                  </div>

                  <div className="col-md-5 d-flex justify-content-center align-items-center mb-3">
                  <div className="pro-desc mt-4 ">
                      <h5 >{pro.product.title} </h5>
                      <button onClick={function() { removeCartItem(pro.product.id)} } className='btn mt-5 w-100 remove-cart fs-5 fw-bold'><i class="fa-solid fa-trash-can"></i> Remove </button>
                    </div>
                  </div>

                  <div className="col-md-4 d-flex justify-content-center align-items-center mb-4">
                  <div className="price-sec">

                  <h3 className='fw-bold fs-5 mb-3'> {pro.price} * {pro.count}  USD</h3>

                    <span className=''>
                    <button className='btn btn-primary' onClick={()=> updateCount(pro.product.id , pro.count+1)}>+</button>
                      <span className='px-2'>{pro.count}</span>
                      <button className='btn btn-primary' onClick={()=> updateCount(pro.product.id , pro.count-1)}>-</button>
                    </span>


</div>
                  </div>

                </div>
     


              
            </div>
            
          // </div>
          
          })}


        {/* repeated  */}

        </div>    
      </div>

      <div className="col-md-3">
        <div className="cart-item p-3 bg-white">

          <h4 className='fs-6 fw-bold'>CART SUMMARY</h4>
          <hr  className='bg-secondary'/>

          <div className='d-flex justify-content-between'>
              <span>items total ({numOfCartItem}) </span>
              <span>USD {totlaCartPrice}</span>

          </div>
          <hr  className='bg-secondary'/>

          <div className='d-flex justify-content-between'>
              <div>Subtotal </div>
              <div>USD {totlaCartPrice} </div>

          </div>
          <hr  className='bg-secondary'/>

          <Link to={'/payment'}> <button className='btn w-100 check-btn'> CheckOut (USD {totlaCartPrice}) </button></Link>
        </div>
      </div>


    </div>
  </div>  : <Loading/>}
  
  
  </>
}
