import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom' ;

function Confirmation() {

    const location = useLocation() ;
    const navigate = useNavigate() ;
    const data = location.state ; 

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-semibold mb-4'>
            Thank you for your trust !
        </h2>
        <p>
            Your order will be treated well , and you'll have a notification about <strong>"Shipping"</strong> 's date .
        </p>
        <div className='mt-6 p-4 border rounded-lg '>
            <h4 className='text-3xl font-bold my-2 border-b pb-6 text-center'>
                Important informations about your order 
            </h4>
            <p >
                Order Number : <b>{ data.orderNumber }</b>
            </p>
            <div className='my-3'>
                <h5  className='text-2xl font-semibold'>Shipping :</h5>
                <p>City : 
                    <b className='ms-2'>
                        {data.shippingInfos.city}
                    </b>
                </p>
                <p>Zip Code : 
                    <b className='ms-2'>
                        {data.shippingInfos.zipCode}
                    </b>
                </p>
                <p>Your Adrress :
                    <b className='ms-2'>
                        {data.shippingInfos.address}
                    </b>
                </p>
            </div>
            <div className='mt-4'>
                <h5 className='text-2xl font-semibold my-2'>
                    Ordered Products : 
                </h5>
                <div>
                    {
                        data.cartProduct.map(product=>(
                            <div className='flex gap-2'>
                                <p>{product.name} x {"("+product.quantity+")"}</p> :
                                <p>
                                    {product.price * product.quantity}$
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className='mt-2 flex items-center gap-2'>
                    <h5 className='text-xl font-bold'>Total Price : </h5>
                    <b className='font-bold mt-1'>
                        {
                            data.totalPrice
                        }$
                    </b>
                </div>
                <div className='mt-4 gap-2 flex justify-end'>
                    <button className='bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 rounded'>
                        Track My Order
                    </button>
                    <button
                    onClick={()=>{navigate('/shop')}}
                    className='bg-green-600 text-white py-2 px-4 hover:bg-green-700 rounded'>
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Confirmation