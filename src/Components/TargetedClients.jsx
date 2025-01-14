import React from 'react'
import {useSelector} from 'react-redux' ;
import {useParams} from 'react-router-dom' ;
import ProductCard from './ProductCard';
import {ToastContainer} from 'react-toastify' ;
function TargetedClients() {
    const { targetedClients } = useParams();
    const products = useSelector((state) => state.product.products);

    const productsByTargetedClients = products.filter((product) => 
    product.targeted.some((target) => target === targetedClients)
    );
  return (
    <div className={`border-t  py-10 px-4 md:px-16 lg:px-24`}>
    <h4 className='text-2xl justify-center font-bold mb-6 text-center flex items-center gap-1'>
        Products for : <b >{targetedClients}</b></h4>
        <ToastContainer/>

        
        {
            productsByTargetedClients.length>0?
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center  cursor-pointer gap-6'>
                {
                    productsByTargetedClients.map((product,index)=>
                        <ProductCard key={index} product={product}/>
                    )
                }
            </div>:
            <h2 className='text-center flex flex-col py-10 text-2xl font-bold'>
                Product not found !
            </h2>
        
        }
        
        
    
    
</div>
  )
}

export default TargetedClients