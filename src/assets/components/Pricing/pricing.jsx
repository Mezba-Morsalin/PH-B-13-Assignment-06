import React from 'react';
import PriceCart from './pricecart';

const pricesData = [
  {
    "id": 1,
    "name": "Starter",
    "tag": "Perfect for getting started",
    "price": 0,
    "billing": "month",
    "features": [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month"
    ],
    "buttonText": "Get Started Free",
    "highlight": false
  },
  {
    "id": 2,
    "name": "Pro",
    "tag": "Best for professionals",
    "price": 29,
    "billing": "month",
    "features": [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics"
    ],
    "buttonText": "Start Pro Trial",
    "highlight": true,
    "badge": "Most Popular"
  },
  {
    "id": 3,
    "name": "Enterprise",
    "tag": "For teams and businesses",
    "price": 99,
    "billing": "month",
    "features": [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding"
    ],
    "buttonText": "Contact Sales",
    "highlight": false
  }
]
const Pricing = () => {
    return (
        <section className='w-11/12 lg:w-10/12 mx-auto mt-28'>
            <div className='text-center space-y-3'>
                <h2 className='font-bold text-4xl md:text-5xl text-[#101727]'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382] text-base'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
                {
                    pricesData.map(price => <PriceCart key={price.id} price = {price}></PriceCart>)
                }
            </div>
        </section>
    );
};

export default Pricing;