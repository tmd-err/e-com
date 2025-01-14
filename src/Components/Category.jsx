import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import {ToastContainer} from 'react-toastify' ;
function Category() {
    const { categoryQuery } = useParams();
    const products = useSelector(state => state.product.products);
    const theme = useSelector(state => state.theme.themeState) ;

    const productByCategory = products.filter((product, index) =>
        product.category.toLowerCase() == categoryQuery

    )

    return (
        <div className={`${theme ? 'bg-white' : 'bg-gray-800 text-white'} border-t flex flex-col items-center   py-10 px-4 md:px-16 lg:px-24`}>
            <h2 className='text-2xl justify-center font-bold mb-6 text-center flex items-center gap-1'>
                
                <span className='text-xl'>
                Category :</span>
                <b>
                {categoryQuery}     
                </b>   
            </h2>
                <ToastContainer/>
            
                
                {
                    productByCategory.length>0?
                    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  cursor-pointer gap-6'>
                        {
                            productByCategory.map((product,index)=>
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

export default Category