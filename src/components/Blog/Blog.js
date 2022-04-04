import React from 'react';
import { AcademicCapIcon, BeakerIcon, BookmarkIcon } from '@heroicons/react/solid'

const Blog = () => {
    return (
        <div>
            <AcademicCapIcon className='w-24 mx-auto mt-4 mb-8'></AcademicCapIcon>
            <div className="w-3/4 mx-auto">
                <h2 className='text-3xl font-semibold mb-3'>What is a semantic tag</h2>
                <p className='mb-10'>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation.A semantic element clearly describes its meaning to both the browser and the developer.
                    Examples of non-semantic elements: div and span tags- Tells nothing about its content.
                    Examples of semantic elements: form and table tags- Clearly defines its content.</p>

                <h2 className='text-3xl font-semibold mb-3'>What is context api</h2>
                <p className='mb-10'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            </div>
        </div>
    );
};

export default Blog;