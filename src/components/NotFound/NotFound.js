import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mt-24'>
            <h1 className='font-semibold text-3xl'>OOps..!</h1>
            <h3>There are nothing to show.</h3>
            <h1 className='text-9xl font-semibold'>404</h1>
            <p className='mb-5'>Go back to home</p>
            <Link to="/home" className='bg-red-600 text-white py-2 px-7 rounded-md mt-4 mb-20 hover:bg-slate-200 hover:text-red-600 font-semibold transition-all duration-500'>Home</Link>
        </div>
    );
};

export default NotFound;