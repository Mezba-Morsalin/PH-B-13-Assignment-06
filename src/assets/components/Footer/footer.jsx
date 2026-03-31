import React from 'react';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <section className='bg-[#101727]'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between gap-10 text-center py-16 border-b border-[#FAFAFA]'>
                <div className='space-y-3'>
                    <h2 className='text-white text-4xl font-bold'>DigiTools</h2>
                    <p className='text-base text-white w-full lg:w-96'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <ul>
                    <h3 className='text-white text-xl font-bold mb-2.5'>Product</h3>
                    <li className='text-base text-white mb-1.5'>Features</li>
                    <li className='text-base text-white mb-1.5'>Pricing</li>
                    <li className='text-base text-white mb-1.5'>Templates</li>
                    <li className='text-base text-white mb-1.5'>Integrations</li>
                </ul>
                <ul>
                    <h3 className='text-white text-xl font-bold mb-2.5'>Company</h3>
                    <li className='text-base text-white mb-1.5'>About</li>
                    <li className='text-base text-white mb-1.5'>Blog</li>
                    <li className='text-base text-white mb-1.5'>Careers</li>
                    <li className='text-base text-white mb-1.5'>Press</li>
                </ul>
                <ul>
                    <h3 className='text-white text-xl font-bold mb-2.5'>Resources</h3>
                    <li className='text-base text-white mb-1.5'>Documentation</li>
                    <li className='text-base text-white mb-1.5'>Help Center</li>
                    <li className='text-base text-white mb-1.5'>Community</li>
                    <li className='text-base text-white mb-1.5'>Contact</li>
                </ul>
                <div>
                    <h3 className='text-white text-xl font-bold mb-2.5'>Social Links</h3>
                    <div className='flex gap-3 items-center justify-center'>
                        <a className='bg-white p-3 text-black text-lg rounded-full' href="#"><BiLogoInstagramAlt></BiLogoInstagramAlt></a>
                        <a className='bg-white p-3 text-black text-lg rounded-full' href="#"><FaFacebook></FaFacebook></a>
                        <a className='bg-white p-3 text-black text-lg rounded-full' href="#"><FaXTwitter></FaXTwitter></a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center p-5'>
                <p className='text-[#FAFAFA] text-base'>&copy; 2026 DigiTools. All rights reserved.</p>
                <div className='flex flex-col md:flex-row gap-6 mt-6'>
                    <a className='text-[#FAFAFA] text-base' href="#">Privacy Policy </a>
                    <a className='text-[#FAFAFA] text-base' href="#">Terms of Service</a>
                    <a className='text-[#FAFAFA] text-base' href="#">Cookies</a>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Footer;