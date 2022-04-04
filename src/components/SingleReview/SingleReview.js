import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const { name, img, review } = props.data;

    return (
        <div className='flex items-center bg-red-200 text-black rounded-lg my-4 py-5 px-6'>
            <img src={img} alt="" className='basis-1/4 reviewImage mr-5' />
            <div className='basis-3/4 text-left'>
                <h1 className='font-semibold text-2xl'>{name}</h1>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default SingleReview;