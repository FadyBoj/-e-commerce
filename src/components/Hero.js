import React from 'react'

import SliderShow from './SliderShow'

export default function Hero()
{

   document.addEventListener('DOMContentLoaded',()=>{
       const title = document.querySelector('.title');
       const main = document.querySelector('.main');
       const shopNow = document.querySelector('.shop-now');



       setTimeout(()=>{
        title.style.opacity = '1';
        title.style.transform = 'unset'
       },400)


       setTimeout(()=>{
        main.style.opacity = '1';
        main.style.transform = 'unset'
       },900)

       setTimeout(()=>{
        shopNow.style.opacity = '1';
        shopNow.style.transform = 'unset';
        setTimeout(()=>{
            shopNow.style.transition = 'all 250ms'
        },1500)
    },1700)


    setTimeout(()=>{
        title.style.transition = 'unset';
        main.style.transition = 'unset';
    },1800)

   })

    return(
        <div className='hero'>

            <div  className='content'>

                <div className='hero-img-container'>

                    <div className='hero-img'>
                        <div className='text'>
                            <div>
                            <p className='title'>Shoperz Sale</p>
                            <p className='main'>Let your Groceries Come to you</p>
                            </div>  
                            <div>
                                <button className='shop-now'>Shop now</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}