import React from 'react'

import SliderShow from './SliderShow'

export default function Hero()
{
    const captionRef = React.useRef();
    const landingRef = React.useRef();
   document.addEventListener('DOMContentLoaded',()=>{
       const title = document.querySelector('.title');
       const main = document.querySelector('.main');
       const shopNow = document.querySelector('.shop-now');


       setTimeout(()=>{
        title.style.opacity = '1';
        title.style.transform = 'unset';
        landingRef.current.style.cssText = 'transform:translate(0px,-130px)'

       },400)


       setTimeout(()=>{
        main.style.opacity = '1';
        main.style.transform = 'unset'

       },1000)

       setTimeout(()=>{
        shopNow.style.opacity = '1';
        shopNow.style.transform = 'unset';
        captionRef.current.style.opacity = '1';
        captionRef.current.style.transform =  'unset';
        setTimeout(()=>{
            shopNow.style.transition = 'all 250ms'
        },1500)
    },1500)


    setTimeout(()=>{
        title.style.transition = 'unset';
        main.style.transition = 'unset';
    },2800)

   })

    return(
        <div className='hero'>

            <div  className='content'>

                <div className='hero-img-container'>

                    <div className='hero-img'>
                        <div className='text'>
                            <div>
                            <p className='title'>Shoperz Sale</p>
                            <p className='main'>Make Healthy life with <span>fresh</span> grocery</p>
                            <p ref={captionRef} className='title'>Get the best quality and most delicious
                            grocery in the world, you can get them all using our website
                            </p>
                            </div>  
                            <div>
                                <button className='shop-now'>Shop now</button>
                            </div>
                        </div>

                        <img ref={landingRef} alt='landing' className='landing-img' src={require('../assests/fresh-no-bg.png')}/>

                    </div>

                </div>

            </div>
        </div>
    )
}