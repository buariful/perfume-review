import React from 'react';
import './SingleReview.css';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleReview = (props) => {
    const { name, img, review, rating } = props.data;

    return (
        <div className='flex items-center bg-red-200 text-black rounded-lg my-4 py-5 px-6'>
            <img src={img} alt="" className='basis-1/4 reviewImage mr-5' />
            <div className='basis-3/4 text-left'>
                <h1 className='font-semibold text-2xl'>{name}</h1>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default SingleReview;