import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Chart from '../Chart/Chart';
import Home from '../Home/Home';

const Nav = () => {
    return (
        <div>
            <Link to={<Home></Home>}>Home</Link>
            <Link to={<Chart></Chart>}>Dashboard</Link>
            <Link to={<Blog></Blog>}>Blog</Link>
        </div>
    );
};

export default Nav;