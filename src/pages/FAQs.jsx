import React, { useState } from 'react';
import pic1 from '../images/pic1.jpg';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function FAQs() {

    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);
    const [expand4, setExpand4] = useState(false);
    const [expand5, setExpand5] = useState(false);
    const [expand6, setExpand6] = useState(false);
    const [expand7, setExpand7] = useState(false);

    return (
        <div className="relative">
            <img src={pic1} alt="About" className="w-full h-auto" /> {/* Ensure to add alt attribute for accessibility */}
            <div className="w-full absolute top-20 left-0 h-96 p-4 text-white text-2xl font-bold">

                {/* FAQ 1 */}
                <div className='w-full mb-4'>
                    <div onClick={() => setExpand1(!expand1)} className='flex justify-between h-20 items-center text-black bg-white bg-opacity-70 border-2 border-red-700'>
                        <span className='ml-2'>What all can I post here?</span>
                        {expand1 ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {expand1 ? (<div className='italic text-black ml-2 p-2 bg-white bg-opacity-70'>You can post a variety of content including blog articles, tutorials, reviews, and personal stories related to our niche.</div>) : null}
                </div>

                {/* FAQ 2 */}
                <div className='w-full mb-4'>
                    <div onClick={() => setExpand2(!expand2)} className='flex justify-between h-20 items-center text-black bg-white bg-opacity-70 border-2 border-red-700'>
                        <span className='ml-2'>What content should I put?</span>
                        {expand2 ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {expand2 ? (<div className='italic text-black ml-2 p-2 bg-white bg-opacity-70'>You should put content that is engaging, informative, and relevant to our audience. Make sure to adhere to our community guidelines.</div>) : null}
                </div>

                {/* FAQ 3 */}
                <div className='w-full mb-4'>
                    <div onClick={() => setExpand3(!expand3)} className='flex justify-between h-20 items-center text-black bg-white bg-opacity-70 border-2 border-red-700'>
                        <span className='ml-2'>Is it paid?</span>
                        {expand3 ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {expand3 ? (<div className='italic text-black ml-2 p-2 bg-white bg-opacity-70'>Our platform is free to use. However, we offer premium features that you can access with a subscription.</div>) : null}
                </div>

                {/* FAQ 4 */}
                <div className='w-full mb-4'>
                    <div onClick={() => setExpand4(!expand4)} className='flex justify-between h-20 items-center text-black bg-white bg-opacity-70 border-2 border-red-700'>
                        <span className='ml-2'>How do I get started?</span>
                        {expand4 ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {expand4 ? (<div className='italic text-black ml-2 p-2 bg-white bg-opacity-70'>Getting started is easy! Just sign up for an account, complete your profile, and start posting your content.</div>) : null}
                </div>

                {/* FAQ 5 */}
                <div className='w-full mb-4'>
                    <div onClick={() => setExpand5(!expand5)} className='flex justify-between h-20 items-center text-black bg-white bg-opacity-70 border-2 border-red-700'>
                        <span className='ml-2'>Can I collaborate with others?</span>
                        {expand5 ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {expand5 ? (<div className='italic text-black ml-2 p-2 bg-white bg-opacity-70'>Yes, you can collaborate with other members of the community by joining groups and participating in discussions.</div>) : null}
                </div>

                {/* FAQ 6 */}
                <div className='w-full mb-4'>
                    <div onClick={() => setExpand6(!expand6)} className='flex justify-between h-20 items-center text-black bg-white bg-opacity-70 border-2 border-red-700'>
                        <span className='ml-2'>What if I need help?</span>
                        {expand6 ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {expand6 ? (<div className='italic text-black ml-2 p-2 bg-white bg-opacity-70'>If you need help, you can visit our help center or contact our support team through the contact form.</div>) : null}
                </div>

                {/* FAQ 7 */}
                <div className='w-full mb-4'>
                    <div onClick={() => setExpand7(!expand7)} className='flex justify-between h-20 items-center text-black bg-white bg-opacity-70 border-2 border-red-700'>
                        <span className='ml-2'>Are there any content guidelines?</span>
                        {expand7 ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {expand7 ? (<div className='italic text-black ml-2 p-2 bg-white bg-opacity-70'>Yes, we have content guidelines to ensure that all posts are respectful and relevant. Please review our guidelines before posting.</div>) : null}
                </div>

            </div>
        </div>
    );
}

export default FAQs;
