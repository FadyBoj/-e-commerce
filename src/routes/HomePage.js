import React from 'react';

//components

import NewHeader from '../components/NewHeader';
import Hero from '../components/Hero';
import TopDeals from '../components/TopDeals';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

import '../js/app.js';


export default function HomePage()
{

    const [mobileMenu,setMobileMenu] = React.useState(false);
    const [animateClass,setAnimateClass] = React.useState('');
    const mobileMenuRef = React.useRef();


    const handleMobileMenu = (value)=>{
        setMobileMenu(value);
        setTimeout(()=>{
            setAnimateClass('mobile-menu-animate')
        },1)
    }

    React.useEffect(()=>{
        const handleClickOutSide = (event)=>{
            try {
                if(mobileMenu && !mobileMenuRef.current.contains(event.target))
                {
                    setMobileMenu(false)
                }
            } catch (error) {
                
            }
        }

        document.addEventListener('click',handleClickOutSide);

        return () =>{
            document.removeEventListener('click',handleClickOutSide);
        }

    })

    return(
        <div className={mobileMenu ? 'page-content':''}>

            <MobileMenu 
            refs={mobileMenuRef}
            animateClass={animateClass} 
            handleMenu={handleMobileMenu}
            style={mobileMenu ? {transform:'unset'}:{transform:'translateX(-100%)'}}
            />
            <NewHeader handleMenu={handleMobileMenu} />
            <Hero />
            <TopDeals windowWidth={window.innerWidth}/><br /><br /><br />
            <Footer />

            </div>
       
    )
}