import React, { useState } from 'react';
import noProductFound from '../Assets/images/no_product_found.webp';
import {useSelector} from 'react-redux'
import { FaTrash } from 'react-icons/fa';
import ModalComp from './Modal';
import {useDispatch} from 'react-redux' ;
import ChangeAddress from './ChangeAddress';
import { deleteItem,plusQuantity,minusQuantity } from '../Redux/cartSlice';
import {useNavigate} from 'react-router-dom' ;
import {  ToastContainer,toast } from "react-toastify";
import Swal from 'sweetalert2';



const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch()
    const [address , setAddress] = useState('Address') ;
    const navigate = useNavigate() ;
    const [Modal,setModal] = useState(false) ;
    const theme = useSelector(state=>state.theme.themeState) ;

    //notifcation

    const notify = () => {
        toast.success("Product deleted from cart!", {
            autoClose: 1500, 
        });
    };
    
    return (
        <div className={`container ${!theme && 'bg-gray-800 text-white'} mx-0 border-t w-full py-8 min-h-96 px-4 md:px-16 lg:px-24`}>
            <ToastContainer/>
            {
                cart.products.length>0 ?
                <div>
                    <h3 className='text-2xl font-semibold mb-4'>Shopping cart </h3>
                    <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                        <div className='md:w-2/3'>
                            <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                                <p>Products</p>
                                <div className='flex space-x-10 my-2'>
                                    <p>Price</p>
                                    <p>Quantity</p>
                                    <p>Total</p>
                                    <p>Action</p>
                                </div>
                            </div>
                            <div className='mb-4'>
                                {cart.products.map((product,index)=>{
                                    return(<div key={product.id}
                                        className='flex items-center  justify-between lg:p-3 border-b'
                                    >
                                        <div className='md:flex items-center space-x-4'>
                                        <img src={product.image} alt='' />
                                        <div className=' lg:ml-4 '>
                                            <h3 className='lg:text-lg text-sm lg:font-semibold'>{product.name}</h3>
                                        </div>
                                        </div>
                                        <div className='flex lg:space-x-6 items-center'>
                                            <p>{product.price}$</p>
                                            <div className='flex items-center justify-center border'>
                                                <button
                                                 onClick={()=>{dispatch(minusQuantity(product.id))}}
                                                className='lg:text-xl lg:font-bold px-1.5 border-r'>-</button>
                                                <p className='text-xl px-2'>{product.quantity}</p>
                                                <button
                                                    onClick={()=>{dispatch(plusQuantity(product.id))}}
                                                className='lg:text-xl lg:font-bold px-1.5 border-l'>+</button>
                                            </div>
                                            <p>{(product.quantity*product.price).toFixed(2)}$</p>
                                            <button 
                                                onClick={() => {
                                                    Swal.fire({
                                                    title: 'Are you sure?',
                                                    text: "You won't be able to revert this!",
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'Yes, delete it!'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        dispatch(deleteItem(product.id)); 
                                                        notify();
                                                    }
                                                    });
                                                }} 
                                                className='text-red-600 hover:text-red-700'>
                                                <FaTrash />
                                                </button>

                                        </div>
                                    </div>)
                                })}
                            </div>
                            
                        </div>
                        <div className='md:w-1/3  w-80 relative lg:inset-0 right-9  p-6 rounded-lg shadow-md border'>
                                <h3 className='text-sm font-semibold mb-5 '>Cart Total :</h3>
                                <div className='flex justify-between mb-5 border-b pb-1'>
                                    <span className='text-sm'>Total Items : </span>
                                    <span>{cart.totalElements}</span>
                                </div>
                                <div className='mb-4 border-b pb-2'>
                                    <p>Shipping :</p>
                                    <div className='ml-4'>
                                        <div className='flex'>
                                            <p>Shipping to : </p>
                                            <span className='underline'>{address}</span>
                                        </div>
                                        <button
                                        onClick={()=>setModal(true)}
                                        className=' text-blue-500 py-2 px-2 cursor-pointer rounded-md'>Change Shipping Address</button>
                                    </div>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <span>Total Price :</span>
                                    <span>{cart.totalPrice} $</span>
                                </div>
                                <button
                                onClick={()=>navigate('/checkout')}
                                className='w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-800'>
                                    Checkout 
                                </button>
                            </div>
                    <ModalComp Modal={Modal} setModal = {setModal}>
                        <ChangeAddress setAddress={setAddress} setModal={setModal}/>
                    </ModalComp>
                
                    </div>
                </div>
                :
                <div className='w-full flex flex-col items-center justify-center py-12'>
                    <h3 className='text-center font-bold text-3xl text-gray-600'>Cart is empty !</h3>
                    <img src={noProductFound} width={500} className=' h-96 w-96' alt="" />
                </div>
            }
        </div>
    );
}

export default Cart;
