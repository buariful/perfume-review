import React from 'react';
import Reviews from '../Reviews/Reviews';
import SingleReview from '../SingleReview/SingleReview';

const ReviewPage = () => {
    const [review] = Reviews();
    return (
        <div>
            {review.map(data => <SingleReview data={data} key={data.id}></SingleReview>)}
        </div>
    );
};

export default ReviewPage;