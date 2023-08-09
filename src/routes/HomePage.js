import React from 'react';

//components

import NewHeader from '../components/NewHeader';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TopDeals from '../components/TopDeals';
import Footer from '../components/Footer';

import '../js/app.js';


export default function HomePage()
{

    const [mobileMenu,setMobileMenu] = React.useState(false)

    console.log(mobileMenu)

    const handleScroll = ()=>{
        setMobileMenu((prevValue)=>{
            return !prevValue
        });
    }

    const makeFalse = ()=>{
        setMobileMenu(false)
    }

    if(mobileMenu){
    document.body.style.overflow = "hidden";
    window.scrollTo(0,0)
    }
    else{
    document.body.style.overflow = "unset";
    }

    window.addEventListener('resize',()=>{
        if(window.innerWidth >= 1374)
        {
            document.body.style.overflow = "unset";
            makeFalse()

        }
        else if(window.innerWidth < 1374 && mobileMenu)
        {
            document.body.style.overflow = "hidden";

        }
    })
    

    


    return(
        <div> 
            <NewHeader/>
            <Hero />
            <TopDeals windowWidth={window.innerWidth}/><br /><br /><br />
            <Footer />
        </div>
       
    )
}