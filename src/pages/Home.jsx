import React, { useEffect } from 'react';
import { Categories, productsData } from '../Assets/data';
import MainImage from '../Assets/images/pexels-olly-974911.jpg'
import InfosSection from '../Components/InfosSection';
import CategorySec from '../Components/CategorySec';
import {useDispatch , useSelector} from 'react-redux' ;
import { setProducts } from '../Redux/productSlice';
import {Link} from 'react-router-dom' ;
import ProductCard from '../Components/ProductCard';
import Shop from './Shop';
import { useNavigate} from 'react-router-dom' ;
import { ToastContainer } from "react-toastify";
const Home = () => {

    const theme = useSelector(state=>state.theme.themeState) ;
    const dispatch = useDispatch() ;    
    const products = useSelector(state=> state.product) ;
    useEffect(()=>{
        dispatch(setProducts(productsData))
    },[])

    const navigate = useNavigate() ;

    
    return (
       
            <> <div className={` py-10 border-t px-4 md:px-16 lg:px-24`}>
                <ToastContainer/>
            <div className='container mx-auto y-4 h-full flex flex-col md:flex-row space-x-2 rounded-tr rounded-tl'>
                <div className='w-full md:w-3/12  '>
                        <div className='bg-blue-600  text-white text-center  font-bold px-2 py-2.5'>
                            Shop by category :
                        </div> 
                        <ul className={` ${theme ? 'bg-gray-100':'bg-gray-500 text-white '} space-y-4  p-3 `}>
                            {Categories.map((cat,index)=>{
                                return(<>

                                    <Link to={`/shop/category/${cat.toLowerCase()}`} className='flex items-center text-sm font-medium' key={index}>
                                        <div className='w-2 h-2 border border-blue-600 bg-blue-600 rounded-full mr-2'></div>
                                        {cat}</Link>
                                </>)
                            })}
                        </ul>
                    </div>
                    <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative space-y-4'>
                        <img loading='eager' className="lg:h-full w-full  rounded-md" src={MainImage} alt="" />
                        <div className='lg:absolute border lg:border-none flex flex-col items-center rounded space-y-6 lg:m-auto p-2 lg:p-4 lg:block lg:top-16 lg:left-8'>
                            <p className='text-white lg:mb-4 md:mb-2 font-bold'>
                                E-com | Lorem ipsum dolor sit.
                            </p>
                            <h3 className=' text-blue-500 text-center lg:text-left  lg:text-5xl  font-bold'>Welcome to E-com</h3>
                            <p className='  mt-4 font-bold lg:text-xl  lg:block hidden'>Thousands of <span className='underline'>exclusive</span> products</p>
                            <button
                            onClick={()=>navigate('/shop')}
                            className='bg-blue-600  px-8 py-1.5 text-white  mt-8 hover:bg-white hover:text-blue-600 transfrom transition-transform duration-300 hover:scale-105'>Shop Now !</button>
                        </div>
                    </div>
                </div>
                <InfosSection/>
                <CategorySec/>

                <div className='container mx-auto py-10'>
                    <h2 className='text-xl font-bold mb-6 text-center'>Top Products</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer gap-6'>
                        {products.products.slice(0,4).map((product,index)=>{
                            return(<>
                                <ProductCard product={product}/>
                            </>)
                        })}
                    </div>
                </div>
            </div>
                <Shop/>
            
            </>
    );
}

export default Home;
