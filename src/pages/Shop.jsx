import React, { useEffect, useState } from 'react';
import {useSelector , useDispatch} from 'react-redux' ;
import ProductCard from '../Components/ProductCard';
import { Categories, productsData } from '../Assets/data';
import { ToastContainer } from "react-toastify";
import { filterProductByPrice, filterProductsByCategory, setProducts, sortProductsAsc, sortProductsDesc } from '../Redux/productSlice';
import {  FaArrowAltCircleDown, FaArrowDown, FaArrowUp, FaShoppingBag } from 'react-icons/fa';
const Shop = () => {
    const products = useSelector(state=>state.product) ;
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setProducts(productsData));
    },[]) ;

    const [category , setCategory] = useState(null) ;
    const [priceFilter,setPriceFilter] = useState({
        min :"" , max:"" 
    });
    const [sortBy , setSortBy] = useState(null) ;



    useEffect(()=>{
        dispatch(filterProductByPrice(priceFilter)) ;
    },[priceFilter])
    useEffect(()=>{
        dispatch(filterProductsByCategory(category)) ;
    },[category])
    useEffect(()=>{
        if(sortBy =="asc"){
            dispatch(sortProductsAsc())
        }else if(sortBy=="desc"){
            dispatch(sortProductsDesc())
        }else{
            dispatch(setProducts(productsData));
        }
    },[sortBy])
    return (
        <div className={`border-t  py-10 px-4 md:px-16 lg:px-24`}>
            <h2 className='text-2xl justify-center font-bold mb-6 flex items-center text-center gap-1'>
                <FaShoppingBag/>
                Shop</h2>
                <ToastContainer/>
            
            <div className='flex justify-center gap-5 items-center my-4'>
                <h6>
                    Filter by:
                </h6>
                <select
                onChange={(e)=>setCategory(e.target.value)}
                className='text-gray-950 p-1 rounded border outline-none'>
                    <option
                    
                    selected disabled  value="">
                        Category
                    </option>
                    <option value="all">All</option>
                    {
                        Categories.map((cat,index)=><option className=""
                        value={cat} key={index}>
                            {cat}
                        </option>)
                    }
                </select>
                <hr className='border h-10' />
                <h6>Between :</h6>
                <div className='flex justify-center  items-center gap-5 '>
                    <input type="text"
                    onChange={(e)=>setPriceFilter((prevState)=>({...prevState,min:e.target.value}))}
                    className='border p-1 w-24 text-gray-950  rounded' placeholder='Min' />
                    <span>And</span>
                    <input
                    onChange={(e)=>setPriceFilter((prevState)=>({...prevState,max:e.target.value}))}
                    type="text" className='border p-1 text-gray-950 w-24 rounded' placeholder='Max' />
                    {/* <button className='bg-blue-500 text-white py-1 text-xl px-4 rounded'>
                        Filter
                    </button> */}
                </div>
                <hr className='border h-10' />

                <h6>Sort by :</h6>
                <select onChange={(e)=>setSortBy(e.target.value)} className='text-gray-950 p-1 w-1/6 uppercase rounded border outline-none text-center'>
                    <option selected  value="">
                        Average price sort
                    </option>
                    <option value="asc">
                        Price Asc <FaArrowDown/>
                    </option>
                    <option value="desc">
                        Price Desc <FaArrowDown/>
                    </option>
                </select>

            </div>
                
                {
                    products.filteredProducts.length>0?
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center  cursor-pointer gap-6'>
                        {
                            products.filteredProducts.map((product,index)=>
                                <ProductCard key={index} product={product}/>
                            )
                        }
                    </div>:
                    <h2 className='text-center flex flex-col py-10 text-2xl font-bold'>
                        Product not found !
                    </h2>
                
                }
                
                
            
            
        </div>
    );
}

export default Shop;
