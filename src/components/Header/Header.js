import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex py-5 bg-red-100 text-black font-medium justify-center text-base'>
            <Link to="/home" className='mr-3'>Home</Link>
            <Link to="/reviewPage" className='mr-3'>Reviews</Link>
            <Link to="/dashboard" className='mr-3'>Dashboard</Link>
            <Link to="/blog" className='mr-3'>Blog</Link>
        </div>
    );
};

export default Header;