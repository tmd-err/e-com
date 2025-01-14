import React from 'react';
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa';
import {useSelector } from 'react-redux'
const InfosSection = () => {
    const Infos = [
        {
            icon : <FaShippingFast className='text-3xl text-blue-500'/>,
            title : 'Fast Shipping' ,
            description : 'Get your product the fastest time possible'
        },
        {
            icon : <FaMoneyBillWave className='text-3xl text-blue-500'/>,
            title : "100% Money Safety",
            description : "Get back your money in refund case or not satisfied "
        },
        {
            icon : <FaTag className='text-3xl text-blue-500'/>,
            title:'Discount',
            description :'Have fun with the exclusive offers'
        },
        {
            icon : <FaHeadset className='text-3xl text-blue-500'/>,
            title : 'Support 24/7' ,
            description : "We always here to stand with you"
        },
        {
            icon : <FaLock className='text-3xl text-blue-500'/>,
            title:'Secure Payment',
            description :'Guaranty of 100% of your payment safety'
        },
    ]
    const theme = useSelector(state=>state.theme.themeState) ;

    return (
        <div className={` pb-8 pt-12`}>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {Infos.map((info,index)=>{
                    return(<div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md
                    transfrom transition-transform duration-300 hover:scale-105
                    '>
                        {info.icon}
                        <h3 className='mt-4 text-xl font-semibold'>{info.title}</h3>
                        <p className='mt-2 text-gray-600'>{info.description}</p>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default InfosSection;
 