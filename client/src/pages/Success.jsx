import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Success = () => {
    const location = useLocation()

    console.log("location",)
    return (
        <div className='m-2 w-full max-w-md bg-blue-200 p-4 py-5 rounded mx-auto flex flex-col justify-center items-center gap-5'>
            <p className='text-blue-800 font-bold text-lg text-center'>{Boolean(location?.state?.text) ? location?.state?.text : "Payment"} Successfully</p>
            <Link to="/" className="border border-blue-600 text-blue-800 hover:bg-blue-600 hover:text-white transition-all px-4 py-1 rounded">Go To Home</Link>
        </div>
    )
}

export default Success