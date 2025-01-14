import React from 'react';
import { FaCartPlus, FaPlus, FaStar } from 'react-icons/fa';
import {useDispatch , useSelector} from 'react-redux' ;
import { addToCart } from '../Redux/cartSlice';
import {Link} from 'react-router-dom' ;

import {  toast } from "react-toastify";
const ProductCard = ({product}) => {
    const disaptch = useDispatch() ;

    const notify = () => {
        toast.success("Product added to cart !", {
            autoClose: 1500, 
           
        });
      };

    const handleAddToCart =(e,product)=>{
        e.stopPropagation() ;
        e.preventDefault() ;
        notify()
        disaptch(addToCart(product)) ;
    }

    const theme = useSelector(state=>state.theme.themeState) ;
    return (
        <div className={`container ${theme ? 'bg-white' : 'bg-gray-800 text-white border'}  p-4 shadow rounded `}>
            <Link to={`/shop/detail/${product.id}`}>
                <img className='w-full h-52 object-contain  mb-5' src={`${process.env.PUBLIC_URL+'/images/'+product.image}`} alt="" />
            </Link>
            <h3 className='text-lg font-semibold'>{product.name.length>21? product.name.slice(0,21)+'...' : product.name}</h3>
            <h5 className='text-sm '>
                {
                    product.description.length >60 && product.description.slice(0,50)+'...'
                }
            </h5>
            <p className='text-gray-500 font-semibold'>{product.price}$</p>
            <div className='flex justify-between'>
                <div className='flex items-center mt-2 text-yellow-500'>
                    {
                        product.rating.map(e=>{
                            return(
                                <FaStar/>
                            )
                        })
                    }
                </div>
                <div className='cursor-pointer bottom-4 right-2 flex items-center justify-center w-10 h-10 bg-blue-500
                    group text-white text-sm  rounded-full hover:w-32 hover:bg-blue-700 transition-all
                ' onClick={(e)=>{handleAddToCart(e,product)}}>
                    <span className='group-hover:hidden'><FaCartPlus/></span>
                    <span className='hidden group-hover:block '>Add to cart </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
