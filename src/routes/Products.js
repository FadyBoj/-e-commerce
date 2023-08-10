import React from 'react'

//componenets

import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';
import MobileMenu from '../components/MobileMenu';
//css

import ProductsSection from '../components/ProductsSection';

export default function Products()
{

    const [mobileMenu,setMobileMenu] = React.useState(false);
    const [animateClass,setAnimateClass] = React.useState('');

    const handleMobileMenu = (value)=>{
        setMobileMenu(value);
        setTimeout(()=>{
            setAnimateClass('mobile-menu-animate')
        },1)
    }

    return(

        <div className={mobileMenu ? 'page-content':''}>
            
            <MobileMenu 
            animateClass={animateClass} 
            handleMenu={handleMobileMenu}
            style={mobileMenu ? {left:'0px'}:{left:'-100%'}}
            />
            <NewHeader handleMenu={handleMobileMenu} />
            <ProductsSection />
            <Footer />
        </div>


    )
}