import React, { useState } from 'react';

const ChangeAddress = ({setAddress, setModal}) => {
    const [newAddress , setNewAddress]= useState("") ;

    const handleChangeAdress = ()=>{
        setAddress(newAddress);
        setModal(false);
        alert("Address Changed Succefully !") ;
    }
    return (
        <div>
            <label>New Address :</label><br />
            <input 
            onChange={(e)=>setNewAddress(e.target.value)}
            className='p-2 w-full my-2 rounded-md outline-none border border-gray-400'
            type="text" placeholder='Enter your new address'/>
            <div className='flex gap-4 justify-end'>
                <button className='bg-red-600 text-white px-3 py-2 rounded-md'
                onClick={()=>{setModal(false)}}
                >Cancel</button>
                <button
                onClick={handleChangeAdress}
                className='bg-blue-500 text-white px-3 py-2 rounded-md'>Save Address</button>
            </div>
        </div>
    );
}

export default ChangeAddress;
