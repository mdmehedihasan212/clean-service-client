import React from 'react';
import bucket from '../../assets/bucketgirl.png';

const Home = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bucket} class="max-w-sm rounded-lg" alt='bucket' />
                <div>
                    <span>Best Quality</span>
                    <h1 class="text-5xl font-bold max-w-lg">Professional Cleaning Service</h1>
                    <p class="py-6 max-w-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <button class="btn btn-primary uppercase">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;