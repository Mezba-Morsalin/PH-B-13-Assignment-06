import React from 'react';

const WorkFlow = () => {
    return (
        <section className='bg-linear-to-r from-violet-600 to-indigo-600 mt-16'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-12'>
            <div className='space-y-4 flex flex-col justify-center items-center text-center'>
                            <h2 className='text-white text-4xl font-bold lg:w-3xl'>Ready to Transform Your Workflow?</h2>
                            <p className='text-white text-base leading-7'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                            <div className='flex gap-3'>
                                <button className='bg-white text-violet-600 p-3 md:p-4 rounded-full font-bold cursor-pointer'>Explore Products</button>
                                <button className='p-2 md:p-3 rounded-full font-bold cursor-pointer border-2 border-white text-white hover:bg-white hover:text-violet-600'>View Pricing</button>   
                            </div>
                            <p className='text-white text-base leading-7'>14-day free trial • No credit card required • Cancel anytime</p>
                        </div>
            </div>
        </section>
    );
};

export default WorkFlow;