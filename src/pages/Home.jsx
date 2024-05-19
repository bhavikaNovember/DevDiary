import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import w from '../images/w.jpg';
import z1 from '../images/z1.jpg';
import z2 from '../images/z2.jpg';
import z3 from '../images/z3.jpg';
import z4 from '../images/z4.jpg';
import z5 from '../images/z5.jpg';
import z6 from '../images/z6.jpg';
import z7 from '../images/z7.jpg';

import l1 from '../images/l1.jpg';
import l2 from '../images/l2.jpg';
import l3 from '../images/l3.jpg';
import l4 from '../images/l4.jpg';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    // image carousel

    const [pics, setPics] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      //intialize local storage
      const intializelocalstorage = () => {
        const imageURLS = [
          'pics/i1.jpg',
          'pics/i2.jpg',
          'pics/i3.jpg',
          'pics/i4.jpg',
          'pics/i5.jpg',
        
          
        ];
  
        if (!localStorage.getItem('imageURLS')) {
          localStorage.setItem('imageURLS', JSON.stringify(imageURLS));
        }
      };
  
      intializelocalstorage();
  
      const storeImages = localStorage.getItem('imageURLS');
      if (storeImages) {
        setPics(JSON.parse(storeImages));
      }
      setLoading(false);
    }, []);
  
    useEffect(() => {
      const tid = setTimeout(() => {
        const lastidx = pics.length - 1;
        setIndex(preidx => (preidx == lastidx ? 0 : preidx + 1));
      }, 2000);
  
      return () => {
        clearTimeout(tid);
      };
    }, [index, pics]);



 // image carousel




    if (posts.length === 0) {
        return (
            <div className="w-full overflow-hidden relative">
                

                {/* Background image 1 image carousel*/}
                <Container>
                 {/* <div className='object-cover'><img src={pic1} alt="Background"  className='h-2/5'/>
                 
                 </div> */}
                  
                

                <div className="flex items-center justify-center h-screen relative">
        {/* check here */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <img
            src={pics[index]}
            alt="not-found"
            className="w-full h-full object-cover"
          />
        )}
      </div>
                 


                 </Container>{/* Background image 1 image carousel*/}
                 {/* Text above the background image */}
                <Container>
                    <div className="absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  bg-white bg-opacity-70 w-2/4 p-8">
                        <h1 className="text-4xl font-bold text-beige-dark mb-4">Journey to Wellness and Joy</h1>
                        <p className="text-lg text-beige-dark">Welcome to our Lifestyle Blog, where we share inspiration for a balanced and fulfilling life. Discover tips on wellness, travel, delicious recipes, and daily motivation. Join our community and explore new ways to enhance your everyday experiences and create a life you love.</p>
                    </div>
                </Container>
                {/* Background image 2 */}
                <div> 
              

                <Container>
                <div className='flex p-4 ml-0 h-96 overflow-hidden'>
    <img src={z2} alt="Background" className='p-4 w-96 h-96 object-cover'/>
    <img src={w} alt="Background" className='p-4 w-96 h-96 object-cover'/>
    <img src={z4} alt="Background" className='p-4 w-96 h-96 object-cover'/>
    <img src={z3} alt="Background" className='p-4 w-96 h-96 object-cover'/>
</div>



                    </Container></div>

                {/* Background image 3 */}
                <Container>
                    
                <div className='flex gap-10 justify-center p-12 bg-amber-700 bg-opacity-30 mt-8'>

                    {/* image */}
    <div className='w-1/2 h-96'>
        <div className='w-full h-full overflow-hidden'>
        <img src={z7} alt="Background" className='w-full h-full object-cover'/>
    </div></div>


           {/* content */}
    <div className='w-1/2 h-96'>
        <div className='w-full h-full overflow-hidden'>
        {/* <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2> */}
        <p className="font-medium text-white text-xl w-full h-full object cover italic">Books are like my best friends, always there when I need them. They whisk me away to magical lands and let me live a thousand lives in one. When I crack open a novel, it's like stepping into a whole new world where anything is possible. I get to meet new friends, go on thrilling adventures, and sometimes even fall in love. Each page turn is like a new chapter in my own story, and I just can't get enough. There's something so comforting about getting lost in a good book, like I'm wrapped in a warm hug from my favorite characters. Whether it's a rainy day or a sunny afternoon, you can always find me with my nose buried in a book, lost in a world of words.</p>
        
    </div></div>
    
    
    </div></Container>


     {/* 3 layout*/}
     <Container>
                    
                    <div className='flex gap-10 justify-center p-12 mt-8'>
    
                        {/* image */}
                        
        <div className='w-1/2 h-96'>
            <div className='w-full h-full overflow-hidden'>
            <img src={l1} alt="Background" className='w-full h-full object-cover rounded-t-full rounded-none'/>
        </div></div>
    
     {/* image */}
     <div className='w-1/2 h-96'>
            <div className='w-full h-full overflow-hidden'>
            <img src={l3} alt="Background" className='w-full h-full object-cover rounded-t-full rounded-none'/>
        </div></div>
        
               


                        {/* image */}
        <div className='w-1/2 h-96'>
            <div className='w-full h-full overflow-hidden'>
            <img src={l2} alt="Background" className='w-full h-full object-cover rounded-t-full rounded-none'/>
        </div></div>
        
        
        </div></Container>






    <Container>
                    
                <div className='flex gap-10 justify-center p-12 bg-amber-700 bg-opacity-30 mt-8'>


           {/* content */}
    <div className='w-1/2 h-96'>
        <div className='w-full h-full overflow-hidden'>
        {/* <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2> */}
        <p className="font-medium text-white text-xl w-full h-full object cover italic">
 Every morning and night, I treat it with love and attention, knowing that it will bloom beautifully with each passing day. Just like a good book, my skincare routine is my trusted companion, guiding me through the ups and downs of life. From gentle cleansers that whisk away the day's impurities to hydrating serums that replenish my skin's moisture, each product is like a chapter in my skincare story.

Like the characters in my favorite novels, my skin has its own story to tell. Sometimes it's radiant and glowing, other times it's battling breakouts and blemishes. But no matter what challenges come my way, I face them head-on with determination and grace. After all, every scar tells a story, and every imperfection is a reminder of the journey I've been on.

</p>

    </div></div>

     {/* image */}
     <div className='w-1/2 h-96'>
        <div className='w-full h-full overflow-hidden'>
        <img src={z5} alt="Background" className='w-full h-full object-cover'/>
    </div></div>

    
    
    </div></Container>


{/* 2 3slayout */}
    <Container>
                    
                    <div className='flex  justify-center items-center p-12 mt-8 '>
    
                        {/* image */}
                        
        <div className='w-1/2 h-96'>
            <div className='w-full h-full overflow-hidden'>
            <img src={z1} alt="Background" className='w-full h-full object-cover '/>
        </div></div>
    
    {/* content */}
    <div className='w-1/2 h-96 flex justify-center items-center'>
  <div className='w-full h-full overflow-hidden'>
    {/* <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2> */}
    <p className="bg-amber-700 bg-opacity-30 font-medium text-white text-xl w-full h-full object-cover italic p-8 text-center">
      "Just as meditation nourishes the mind, clean eating fuels the body, creating a harmonious balance that fosters overall wellness"
    </p>
  </div>
</div>

        
               


                        {/* image */}
        <div className='w-1/2 h-96'>
            <div className='w-full h-full overflow-hidden'>
            <img src={l4} alt="Background" className='w-full h-full object-cover '/>
        </div></div>
        
        
        </div></Container>

    <Container>
                    
                <div className='flex gap-10 justify-center p-12 bg-amber-700 bg-opacity-30 mt-8 mb-8'>

                    {/* image */}
    <div className='w-1/2 h-96'>
        <div className='w-full h-full overflow-hidden'>
        <img src={z6} alt="Background" className='w-full h-full object-cover'/>
    </div></div>


           {/* content */}
    <div className='w-1/2 h-96'>
        <div className='w-full h-full overflow-hidden'>
        {/* <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2> */}
        <p className="font-medium text-white text-xl w-full h-full object cover italic">Walking in the hills feels like stepping into a painting. The trails wind through lush greenery, inviting exploration. Each step brings a sense of wonder and adventure, as if embarking on a journey through nature's storybook.

Amidst the rocks and whispering winds, I find solace and peace. The hills offer a sanctuary away from the chaos of daily life. Whether meditating on a rocky outcrop or simply soaking in the views, I feel grounded and renewed.

Grateful for this connection with nature, I wander the hills, inspired by their beauty and resilience. With each step, I embrace the tranquility and embrace the wonder of the world around me.</p>


        
    </div></div>
    
    
    </div></Container>




                    



            </div>
        );
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
