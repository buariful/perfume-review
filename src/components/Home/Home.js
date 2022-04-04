import React from 'react';
import image from '../../img/gul-e-laila.jpg'
import Reviews from '../Reviews/Reviews';
import SingleReview from '../SingleReview/SingleReview';


const Home = () => {
    const [review] = Reviews();

    const recentReview = review.slice(0, 3)
    return (
        <div>
            <div className='md:flex items-center justify-between gap-10 w-11/12 m-auto mt-16'>
                <div className="md:w-2/3 md:text-left  pr-6">
                    <h1 className='font-bold font-sans text-5xl mb-8'>
                        Ours one of the best <span className='text-red-500'>PERFUME</span> .

                    </h1>
                    <h3 className='text-2xl font-medium mb-3'>Original Al Haramain Mukhallath Al Zahara Perfume</h3>
                    <p className='text-gray-300 leading-6 mb-6'>With the mesmerizing fragrance of Alf Zahra, make every word you speak seem like poetry and every small step you take to feel like an articulate performance. And once you’re done enthralling your mind and soul, take a bow and bask in the applause of a thousand flowers!Now, this Al Haramain Mukhallath Al Zahara Perfume is available in all over the world.</p>

                    <button className='bg-red-600 text-white py-3 px-7 rounded-md mt-4 hover:bg-slate-200 hover:text-red-600 font-semibold transition-all duration-500'>Reviews</button>
                </div>
                <div className="md:w-1/3">
                    <img src={image} alt="" className='rounded mx-auto mt-8' />
                </div>
            </div>
            <div>
                <h1 className='mt-20 font-semibold mb-6 text-4xl'> Reviews</h1>
                <div className='grid grid-cols-2 gap-4 md:w-11/12 mx-auto'>
                    {recentReview.map(data => <SingleReview data={data} key={data.id}></SingleReview>)}
                </div>
                <button className='bg-red-600 text-white py-2 px-7 rounded-md mt-4 hover:bg-slate-200 hover:text-red-600 font-semibold transition-all duration-500'>Sell all reviews</button>
            </div>
        </div >
    );
};

export default Home;