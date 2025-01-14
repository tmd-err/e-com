import React, { useRef, useState } from 'react' ;
import {  FaAngleDown, FaAngleUp, FaMoneyBillWave, FaMoneyCheck, FaShippingFast } from 'react-icons/fa' ;
import {useSelector} from 'react-redux' ;
import {useNavigate} from 'react-router-dom' ;
function Checkout() {
    //routing 
    const navigate = useNavigate() ;

    // checkout states //
    const [billToggle,setBillToggle] = useState(true) ;
    const [shippToggle,setshippToggle] = useState(false) ;
    const [payMethToggle,setpayMethToggle] = useState(false) ;
    const [paymentMethod , setPaymentMethod] = useState("COD") ;

    const [errors , setErrors] = useState({
        city :"" ,
        zipCode :"" ,
        address :""
    })
    // order Summary requirements //
    const cart = useSelector(state=>state.cart)

    //get the users's informations 
    let shippingInfoRef = useRef({
        city :"" ,
        zipCode :"" ,
        address :""
    }) ;

    const handleGetShippingInfo=(e)=>{
        shippingInfoRef.current = {
            ...shippingInfoRef.current ,
            [e.target.name] : e.target.value
        } ;
    }
    // redirect to the order confirmation page , with the getted data
    const handleVerifyingInfos =()=>{
        if (!shippingInfoRef.current.city) {
            setErrors((prevState) => ({
                ...prevState, // 
                city: "Please fill the city field !",  
            }));
            
        }else{
            setErrors((prevState) => ({
                ...prevState, // 
                city: "",  
            }));
            
        }
        if(!shippingInfoRef.current.zipCode){
            setErrors((prevState) => ({
                ...prevState, 
                zipCode: "Please fill the zip code field !",  
            }));
            
        }else{
            setErrors((prevState) => ({
                ...prevState, 
                zipCode: "",  
            }));
            
        }
        if(!shippingInfoRef.current.address){
            setErrors((prevState) => ({
                ...prevState, 
                address: "Please fill the address field !",  
            }));
            
        }
        else{
            setErrors((prevState) => ({
                ...prevState, // 
                address: "",  
            }));
            
        }
        if(
            shippingInfoRef.current.address &&
            shippingInfoRef.current.zipCode &&
            shippingInfoRef.current.city 
        ){
            navigate('/confirmation'
                ,{
                    state :{
                        shippingInfos : shippingInfoRef.current ,
                        cartProduct : cart.products ,
                        orderNumber : crypto.randomUUID(),
                        totalPrice : cart.totalPrice.toFixed(2)
                    } 
                ,}
            )
        }
    
    }
    const theme = useSelector(state=>state.theme.themeState) ;


  return (
    <div className={`container  my-4 mx-auto w-full lg:py-8  px-4 md:px-16 lg:px-24`}>
                <div>
                    <h3 className='text-2xl font-semibold mb-4'>Checkout Steps : </h3>
                    <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                        <div className='md:w-2/3'>
                            <div className='border p-2 mb-6'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-lg font-semibold flex items-center gap-3'>Billing Information <FaMoneyBillWave className='mt-1'/> </h3>
                                    <button onClick={()=>{setBillToggle(!billToggle)}}>
                                        {billToggle? <FaAngleDown/> : <FaAngleUp/>}
                                    </button>
                                </div>
                                <div className={`space-y-4 mx-5 my-6 ${!billToggle&&'hidden'}`}>
                                    <div>
                                        <label className='block' htmlFor="fullname">Fullname : </label>
                                        <input className='w-full px-3 py-2 border text-gray-950'
                                         type="text" placeholder='Enter Your Fullname' id="fullname" />
                                    </div>
                                    <div>
                                        <label className=' block' htmlFor="e-mail">E-mail : </label>
                                        <input className='w-full px-3 py-2 border text-gray-950'
                                         type="email" placeholder='Enter Your E-mail' id="e-mail" />
                                    </div>
                                    <div>
                                        <label className=' block'
                                         htmlFor="phone">Phone Number : </label>
                                        <input className='w-full px-3 py-2 border text-gray-950'
                                         type="text" placeholder='Enter Your Phone Number' id="phone" />
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 mb-6'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-lg font-semibold flex items-center gap-3'>Shipping Information <FaShippingFast className='mt-1'/> </h3>
                                    <button onClick={()=>{setshippToggle(!shippToggle)}}>
                                        {shippToggle? <FaAngleDown/> : <FaAngleUp/>}
                                    </button>
                                </div>
                                <div className={`space-y-4 mx-5 my-6 ${!shippToggle&&'hidden'}`}>
                                    <div>
                                        <label className='block' htmlFor="City">City: </label>
                                        <input
                                        name='city'
                                        onChange={handleGetShippingInfo}
                                        className='w-full px-3 py-2 border text-gray-950'
                                         type="text" placeholder='Enter Your City' id="City" />
                                         <span className='text-red-700'>
                                            {errors.city&&errors.city}
                                         </span>
                                    </div>
                                    <div>
                                        <label className='block' htmlFor="Zip Code text-gray-950">Zip Code : </label>
                                        <input
                                        name='zipCode'
                                        onChange={handleGetShippingInfo}
                                        className='w-full px-3 py-2 border text-gray-950'
                                         type="email" placeholder='Enter Your Zip Code' id="Zip Code" />
                                         <span className='text-red-700'>
                                            {errors.zipCode&&errors.zipCode}
                                         </span>
                                    </div>
                                    <div>
                                        <label className='block'
                                         htmlFor="Address">Address : </label>
                                        <input
                                        name='address'
                                        onChange={handleGetShippingInfo}
                                        className='w-full px-3 py-2 border text-gray-950'
                                         type="text" placeholder='Enter Your Address' id="Address" />
                                         <span className='text-red-700'>
                                            {errors.address&&errors.address}
                                         </span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 mb-6'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-lg font-semibold flex items-center gap-3'>Payment Method <FaMoneyCheck className='mt-1'/> </h3>
                                    <button onClick={()=>{setpayMethToggle(!payMethToggle)}}>
                                        {payMethToggle? <FaAngleDown/> : <FaAngleUp/>}
                                    </button>
                                </div>
                                <div className={`space-y-4 mx-5 my-6 ${!payMethToggle&&'hidden'}`}>
                                    <div className='flex mb-2 items-center'>
                                        <input
                                        checked = {paymentMethod==="COD"}
                                        onChange={()=>{
                                            setPaymentMethod("COD")
                                        }}
                                        id='cashOnDelivery' type="radio" name='paymentMethod' className=" mx-2 px-3 py-2 border" />
                                        <label htmlFor="cashOnDelivery">Cash On Delivery </label>
                                    </div>
                                    <div className='flex mb-2 items-center'>
                                        <input
                                        checked = {paymentMethod==="DC"}
                                        onChange={()=>{
                                            setPaymentMethod("DC")
                                        }}
                                        id='debitCard' type="radio" name='paymentMethod' className="mx-2 px-3 py-2 border" />
                                        <label htmlFor="debitCard">Debit Card </label>
                                    </div>
                                    {
                                        paymentMethod &&
                                        <div className='text-center'>
                                            Selected Payment Method : 
                                            <strong className='font-bold'>
                                                 {paymentMethod}
                                            </strong>
                                        </div>
                                    } 
                                    {
                                        paymentMethod =="DC" && 
                                        <div className='lg:border border-t py-4 lg:py-0 lg:p-5 flex gap-4 flex-col  rounded'>
                                            <h4 className='text-center'>
                                                Card Informations : 
                                            </h4>
                                            <div>
                                                <label className='font-semibold ' htmlFor="cardNum">Card Number :</label>
                                                <input type="text" placeholder='EX : 8729 **** **** **** ****' className='lg:mx-2 w-full p-2 border rounded-sm' />
                                            </div>
                                            <div>
                                                <label className='font-semibold ' htmlFor="cardNum">Card Holder's Name :</label>
                                                <input required type="text" placeholder='Enter the fullname' className='lg:mx-2 w-full p-2 border rounded-sm' />
                                            </div>
                                            <div className="flex justify-between lg:mb-4">
                                                <div className="lg:w-1/2 w-full lg:mx-3">
                                                    <label htmlFor="expireDate" className="block font-semibold mb-2">
                                                        Expire Date
                                                    </label>
                                                    <input type="text"
                                                    placeholder='YYYY/MM'
                                                    className='border w-full rounded-sm p-2'
                                                    required
                                                    />
                                                </div>
                                                <div className="w-1/2 mx-3">
                                                    <label htmlFor="expireDate" className="block font-semibold mb-2">
                                                        CVV
                                                    </label>
                                                    <input type="text"
                                                    placeholder='CVV'
                                                    className='border p-2 w-full rounded-sm'
                                                    required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`md:w-1/3 ${!theme &&'bg-gray-800 text-white'}
                        relative right-9 w-80
                        lg:p-6 p-2  shadow-md border`}>
                            <h3 className='lg:text-lg font-semibold relative lg:my-4 pb-3 text-center border-b '>
                                Ordered Items :
                            </h3>
                            <div className="space-y-2">
                            {cart.products.map((product,index)=>(
                                <div key={index} className='flex justify-between'>
                                    <div className='items-center flex'>
                                        <img src={`${process.env.PUBLIC_URL+'/images/'+product.image}`}
                                        className='w-16 h-16 object-contain'
                                        alt="Not Found" />
                                        <div className='mx-3'>
                                            <h5 className='text-md font-semibold'>
                                                {product.name}
                                            </h5>
                                            <h6 className=''>
                                                {product.price} X {product.quantity}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <div className='my-2 border-t py-2'>
                            <div className='flex justify-center'>
                                <p className='text-center'>
                                    Amount : <b>{cart.totalPrice.toFixed(2)}$</b>
                                </p>
                            </div>
                        </div>
                        <button
                        onClick={handleVerifyingInfos}
                        className='w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700'>
                            Complete Order 
                        </button>
                        </div>
                        
                    </div>
                </div>
        </div>
  )
}

export default Checkout