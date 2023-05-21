import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

export const cartContext = createContext();


export default function Cartcontext({children}) {

    const nav = useNavigate();
    const [numOfCartItem, setnumOfCartItem] = useState(0);
    const [totlaCartPrice, settotlaCartPrice] = useState(0);
    const [cartProducts, setcartProducts] = useState(null);
    const [cartId, setcartId] = useState(null)


    async function addProToCart(proId) {
        
        try {
            const {data} = await axios.post('https://route-ecommerce.onrender.com/api/v1/cart',{
            "productId" : proId
        }, {
            headers : {'token' : localStorage.getItem('tkn')}
        })

        if (data.status ===  "success") {
            return true
        }else{
            return false;
        }
        console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    async function getCartProduct() {
        try {

            const {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/cart',{
                headers :  {'token': localStorage.getItem('tkn')}
            });

            if (data.status === "success") {
                
                setnumOfCartItem(data.numOfCartItems);
                settotlaCartPrice(data.data.totalCartPrice);
                setcartProducts(data.data.products);
                setcartId(data.data._id)
            }

     
            // console.log(data);


        } catch (error) {
            if (error.response.status == 404) {
                $('.err-cart').fadeIn(500 , function(){
                    setTimeout(()=>{
                        $('.err-cart').fadeOut(500)
                        nav('/home')
                    } , 2000);
                })
            }
        }
    }


    async function removeCartItem(id) {
        try {
            
            const {data} = await axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${id}` , {
                headers :  {'token': localStorage.getItem('tkn')}
            });

            if (data.status === "success") {
                
                setnumOfCartItem(data.numOfCartItems);

                setcartProducts (data.data.products) ; 

                settotlaCartPrice(data.data.totalCartPrice);

                return true ;
            }

        } catch (error) {
            console.log(error);
        }
    }


    async function updateCount(id , count) {
        try {
            
            const {data} = await axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${id}` , {
                "count" : count
            } , {
                headers :  {'token': localStorage.getItem('tkn')}
            });

            if (data.status === "success") {
                
                setnumOfCartItem(data.numOfCartItems);

                setcartProducts (data.data.products) ; 

                settotlaCartPrice(data.data.totalCartPrice);

            }

        } catch (error) {
            console.log(error);
        }
    }



    useEffect(function() {
        getCartProduct();
    
    },[])

    return <cartContext.Provider value={{addProToCart , numOfCartItem , totlaCartPrice ,cartProducts , removeCartItem , updateCount , cartId}}>

        <div style={{'display':'none'}} className='alert alert-danger err-cart'> No Cart Exist </div>

    {children}
    
    </cartContext.Provider>
}
