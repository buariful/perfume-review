import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const { name, img, review } = props.data;

    return (
        <div className='flex items-center'>
            <img src={img} alt="" className='basis-1/4 reviewImage' />
            <div className='basis-3/4'>
                <h1>{name}</h1>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default SingleReview;