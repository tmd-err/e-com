import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import { FaHome, FaInfo, FaMailBulk, FaMoon, FaSearch, FaShippingFast, FaShoppingBag, FaShoppingCart, FaSun, FaUser, FaXRay } from 'react-icons/fa';
import { useSelector ,useDispatch} from 'react-redux' ;
import { searchProducts ,setQuery } from '../Redux/productSlice';
import ModalComp from './Modal';
import Signin from './Signin';
import Signup from './Signup';
import { toggleTheme } from '../Redux/themeSlice';

const Navbar = () => {
    //redux assets
    const products = useSelector(state=>state.cart.products) ;
    const dispatch = useDispatch() ;
    //search function
    const [search, setSearch] = useState('') ;
    const handleSearch = (e)=>{
        setSearch(prevState=>(prevState,e.target.value)) ;

    }
    useEffect(()=>{
        dispatch(searchProducts(search))
    },[search,dispatch])

    //login / register modal
    const [modal,setModal] = useState(false) ;
    const [isSignedIn,setIsSignedIn] = useState(true) ;

    // navigate between register and login components //

    const getSignUpForm =()=>{
        setIsSignedIn(false) ;
        setModal(true) ;
    };
    const getSignInForm =()=>{
        setIsSignedIn(true) ;
        setModal(true) ;
    };
    //theme toggling 

    const theme = useSelector(state=>state.theme.themeState) ;
    const searchInput = useRef() ;
    const resetSearch =()=>{
        searchInput.current.value = "" ;
        dispatch(searchProducts(""))

    }
    const toggleThemeFunction = ()=>{
        dispatch(toggleTheme());
    }
    return (
        <nav className={`${theme ? 'bg-white' :'bg-gray-800 text-gray-200'} shadow-md`}>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to="/" className='flex items-center gap-1'>
                        <FaShippingFast/>
                        E-com</Link>
                </div>
                <div className='relative hidden md:block lg:block flex-1  mx-4'>
                        <input 
                        ref={searchInput}
                        onChange={handleSearch}
                        type="text" placeholder='Search' 
                        className='w-full text-gray-950 outline-none rounded-sm border py-2 px-4' />
                            <button
                            onClick={resetSearch}
                            className='absolute text-gray-600 w-12 bottom-2  text-3xl right-0 '>&times;</button>
                            <FaSearch className='absolute text-blue-600 w-12  top-3 right-6  '/>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-xl'></FaShoppingCart>
                        <span>
                            {products.length>0 && 
                            (<span className='absolute top-0 text-xs w-3 left-3 text-white items-center text-center font-bold bg-red-600 rounded-full'>
                                {products.length}
                            </span>)
                            }
                        </span>
                    </Link>
                    <button
                    onClick={()=>{
                        setModal(true)
                    }}
                    className='hidden md:block'>
                        Login | Register
                    </button>
                    <button onClick={toggleThemeFunction} className='p-5'>
                        {
                            theme ? <FaMoon className='text-xl' /> : 
                            <FaSun className='text-xl text-yellow-400 '/>
                        }
                    </button>
                    <button
                    onClick={()=>{
                        setModal(true)
                    }}
                    className='block md:hidden'>
                        <FaUser></FaUser>
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-4 lg:space-x-10 py-4 text-md font-bold'>
                <Link className='hover:underline flex items-center gap-1' to='/'> <FaHome/> Home</Link>
                <Link className='hover:underline flex  items-center gap-1' to='/shop'> <FaShoppingBag/> Shop</Link>
                <Link className='hover:underline flex items-center gap-1' to='/contact'> <FaMailBulk/> Contact</Link>
                <Link className='hover:underline flex items-center gap-1' to='/'> <FaInfo/> About</Link>
            </div>
            <ModalComp Modal={modal} setModal={setModal}>
                {isSignedIn? <Signin getSignUpForm={getSignUpForm}/> : <Signup getSignInForm={getSignInForm}/>}
            </ModalComp>
        </nav>
    );
}

export default Navbar;
