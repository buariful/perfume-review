import React from 'react';
import Reviews from '../Reviews/Reviews';
import SingleReview from '../SingleReview/SingleReview';

const ReviewPage = () => {
    const [review] = Reviews();
    return (
        <div>
            <h1 className='mt-8 mb-6 font-semibold text-5xl'>What Our Client Says</h1>
            <div className='grid grid-cols-2 gap-4 md:w-11/12 mx-auto'>
                {review.map(data => <SingleReview data={data} key={data.id}></SingleReview>)}
            </div>
        </div>
    );
};

export default ReviewPage;