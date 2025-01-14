import React from 'react';
import childImg from '../Assets/images/childCategory.png' ;
import womenImg from '../Assets/images/womenCategory.png' ;
import {useSelector} from 'react-redux' ;
import manImg from '../Assets/images/manCategory.png' ;
import {Link} from 'react-router-dom' ;
const CategorySec = () => {
    const theme = useSelector(state=>state.theme.themeState) ;

    const categories = [
        {
            title : 'Men' ,
            imageUrl : manImg ,
            bgColor : 'bg-blue-400'

        },
        {
            title : 'Kids' ,
            imageUrl : childImg,
            bgColor : 'bg-orange-400'

        },
        {
            title : 'Women' ,
            imageUrl : womenImg,
            bgColor : 'bg-pink-400'


        },
    ]
    return (
        <div className={`
        container  mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer`}>
            {
                categories.map((cat,index)=>{
                    return(<>
                        <Link
                        to={`/shop/${cat.title.toLowerCase()}`}
                        >
                            <div key={index} className={`relative h-64 rounded-lg transfrom transition-transform duration-300 hover:scale-105 cursor-pointer ${cat.bgColor}`}>
                                <img src={cat.imageUrl} alt="not found" className=' h-full w-full object-cover rounded-lg shadow-md'/>
                                <div className='absolute top-12 left-6'>
                                    <p className='text-xl font-bold '>{cat.title}</p>
                                    <p className='text-white font-extrabold'>View All </p>
                                </div>
                            </div>
                        </Link>
                    </>)
                })
            }
        </div>
    );
}

export default CategorySec;
