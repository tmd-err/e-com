import React from 'react';
import {useSelector} from 'react-redux'

const ModalComp = ({Modal,setModal,children}) => {
    const theme = useSelector(state=>state.theme.themeState) ;

    if(!Modal) return null
    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center  justify-center'>
            <div className={`${theme ? 'bg-white' : 'bg-gray-800 text-white'} rounded-lg shadow-md p-6 w-full max-w-md`}>
                <button className='absolute top-4 right-4 text-gray-300 text-3xl' 
                
                onClick={()=>setModal(false)}>
                    &times;
                </button>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalComp;
