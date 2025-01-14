import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {Link} from 'react-router-dom' ;

const Footer = () => {
    return (
            <footer className='bg-gray-800 border-t  text-white py-9 px-5 md:px-16 lg:px-24'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div>
                        <h3 className='text-2xl font-semibold'>E-com</h3>
                        <p className='mt-2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum itaque exercitationem possimus tenetur iusto. Harum natus totam veniam error assumenda.
                        </p>
                    </div>
                    <div className='flex flex-col md:items-center'>
                        <div>
                        <h4 className='text-lg font-semibold'>Site map</h4>

                        </div>
                        <ul className='mt-5 space-y-2'>
                            <li>
                                <Link to='/' className='hover:underline'>Home</Link>
                            </li>
                            <li>
                                <Link to='/shop' className='hover:underline'>Shop</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='hover:underline'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/about' className='hover:underline'>About</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-lg font-semibold'>Our Social Media</h5>
                        <div className='flex space-x-4 mt-2'>
                            <a href="" className='hover:text-blue-500 text-2xl'><FaFacebook/></a>
                            <a href="" className='hover:text-blue-500 text-2xl'><FaTwitter/></a>
                            <a href="" className='hover:text-blue-500 text-2xl'><FaInstagram/></a>
                            <a href="" className='hover:text-blue-500 text-2xl'><FaYoutube/></a>
                        </div>
                        <form className='flex items-center justify-center mt-10'>
                        <input type="email" placeholder='Enter your email'  className='p-2 bg-gray-500 outline-none rounded-l-md  w-full'/>
                        <button className='bg-blue-500 text-white px-5 py-2 rounded-r-md '>Send</button>
                    </form>
                    </div>
                    
                </div>
                <div className='mt-8 border-t border-gray-600 pt-4'>
                    <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                        <p>&copy; 2024 E-com All rights reserved .</p>
                        <div className='flex space-x-4 mt-4 md:mt-0'>
                            <a href="" className='text-gray-400 hover:underline'>Privacy  Policy</a>
                            <a href="" className='text-gray-400 hover:underline'>Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;
