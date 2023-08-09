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

   })

    return(
        <div className='hero'>

            <div  className='content'>

                <div className='hero-img'>
                    <div><img alt='hero-img' draggable={false} className='hero-img' src={require('../images/HeroImg.webp')}/></div>

                    <div className='text'>
                        <p className='title'>Shoperz Sale</p>
                        <p className='main'>Let your Groceries Come to you</p>
                        <div>
                            <button className='shop-now'>Shop now</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}