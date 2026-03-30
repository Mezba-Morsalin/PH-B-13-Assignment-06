import React from 'react';

const Rating = () => {
    return (
        <section className='bg-linear-to-r from-violet-600 to-indigo-600 mt-16'>
            <div className='w-11/12 mx-auto py-12'>
            <div className='grid grid-cols-2 lg:grid-cols-3 text-center gap-12'>
                <div className='space-y-4'>
                    <h3 className='text-white font-semibold text-5xl md:text-6xl'>50K+</h3>
                    <p className='text-white text-lg md:text-2xl'>Active Users</p>
                </div>
                <div className='space-y-4'>
                    <h3 className='text-white font-semibold text-5xl md:text-6xl'>200+</h3>
                    <p className='text-white text-lg md:text-2xl'>Premium Tools</p>
                </div>
                <div className='space-y-4'>
                    <h3 className='text-white font-semibold text-5xl md:text-6xl'>4.9</h3>
                    <p className='text-white text-lg md:text-2xl'>Rating</p>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Rating;