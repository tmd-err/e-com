import React from 'react'
import {useParams} from 'react-router-dom' ; 
import {useSelector,useDispatch} from 'react-redux' ;
import { FaStar,FaCartPlus } from 'react-icons/fa';
import { addToCart } from '../Redux/cartSlice';
import { ToastContainer } from "react-toastify";

function ProductDetails() {
    const {id} = useParams() ;
    const theme = useSelector(state=>state.theme.themeState) ; 
    const products = useSelector(state=>state.product.products) ;
    const findProduct = products.find(product=>product.id == id) ;
    const disaptch = useDispatch() ;
    

    const handleAddToCart =(e,product)=>{
        e.stopPropagation() ;
        e.preventDefault() ;
        disaptch(addToCart(product)) ;
    }
  return (
    <div className={`${theme ? 'bg-white' : 'bg-gray-800 text-white'} mx-auto items-center border-t   w-100   p-10
    justify-center`}>
        <div>
          <ToastContainer/>
  <h3 className="lg:text-2xl text-md text-center mb-10">
    <span className="text-blue-700 border-b border-blue-600 mb-5 py-2">
      {findProduct.name}
    </span>{" "}
    's details
  </h3>

  <div className="lg:p-8 lg:border  rounded-lg">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3 flex flex-col gap-3">
        <img
          className="h-60 md:h-72 w-full object-cover rounded-md"
          src={`${process.env.PUBLIC_URL + "/images/" + findProduct.image}`}
          alt="Not found"
        />
        <p>
          Price:{" "}
          <b>
            {findProduct.price} $
          </b>
        </p>
        <p className='text-sm lg:text-lg'>
          Price counting discount:
          <b>
            {findProduct.price - (findProduct.price * findProduct.discount) / 100} ${" "}
            {"( -" + findProduct.discount + " %)"}
          </b>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h5 className="font-semibold text-2xl">Description:</h5>
        <p className="ms-6 text-sm md:text-base">
          {findProduct.description}
        </p>
        <h5 className="text-2xl">Category:</h5>
        <p className="ms-6 text-sm md:text-base">
          {findProduct.category}
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
      <div className="flex items-center text-yellow-500">
        {findProduct.rating.map((e, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <div
        className="cursor-pointer flex items-center justify-center w-10 h-10 bg-blue-500
          group text-white text-sm rounded-full lg:p-  lg:text-md hover:w-32 hover:bg-blue-700 transition-all
          "
        onClick={(e) => {
          handleAddToCart(e, findProduct);
        }}
      >
        <span className="group-hover:hidden lg:text-xl ">
          <FaCartPlus />
        </span>
        <span className="hidden group-hover:block">Add to cart</span>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default ProductDetails