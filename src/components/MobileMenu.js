import React from 'react'

//Icons
import { RxCross2 } from 'react-icons/rx'
import Shoperz from './shoperz'

import { HiOutlineHome } from 'react-icons/hi'
import { AiOutlineShopping } from 'react-icons/ai'
import { PiPhoneDisconnect } from 'react-icons/pi'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { PiShoppingCartLight } from 'react-icons/pi';
import { IoIosHeartEmpty } from 'react-icons/io';


const MobileMenu = (props) => {

    document.addEventListener('DOMContentLoaded',()=>{
        try {
            const categoryBtn = document.getElementById('category-btn');
            const mobileCategories = document.getElementsByClassName('mobile-categories')[0];
            const categoryArrow = document.getElementsByClassName('category-arrow')[0];
            const specialCategory = document.getElementsByClassName('special-category')[0];

            categoryBtn.addEventListener('click',()=>{

                categoryArrow.classList.toggle('category-arrow-animate')
                mobileCategories.classList.toggle('category-animate');
                specialCategory.classList.toggle('handle-height')
            })

        } catch (error) {
            
        }
    })

  return (
    <div ref={props.refs} style={props.style} className='mobile-menu'>
        
        <div className='exit-container'>
            <Shoperz width={150} />
            <div onClick={()=>{props.handleMenu(false)}} className='exit-icon-cont'><RxCross2 size={30} /></div>
        </div>


        <div className='mobile-menu-nav'>

            <div className='mobile-nav-element mobile-nav-text'>
                <div><HiOutlineHome  size={26} /></div>
                <div>Home</div>
            </div>

            <div className=' special-category '>

                <div id='category-btn' className='mobile-category-element mobile-nav-text '>

                    <div  className='mobile-category'>
                        <div><AiOutlineShopping  size={26} /></div>
                        <div>Categories</div>
                    </div>

                    <div className='category-arrow' ><IoIosArrowDown size={29}/></div>
                </div>
                
                <div className={`mobile-categories`}>
                    <div className='parent-category mobile-nav-text'>Legums</div>
                    <div className='parent-category mobile-nav-text'>Sauces</div>
                    <div className='parent-category mobile-nav-text'>Fishes</div>
                    <div className='parent-category mobile-nav-text'>Sweets</div>
                    <div className='parent-category mobile-nav-text last-parent'>Beverages</div>
                </div>
                

            </div>

            <div className='mobile-nav-element mobile-nav-text'>
                <div><PiPhoneDisconnect  size={26} /></div>
                <div>Contact Us</div>
            </div>

            <div className='mobile-nav-element mobile-nav-text'>
                <div><IoIosInformationCircleOutline  size={26} /></div>
                <div>About Us</div>
            </div>

            <div className='mobile-nav-element mobile-nav-text'>
                <div><HiOutlineHome  size={26} /></div>
                <div>Services</div>
            </div>

            <div className='mobile-menu-icons'>
                <div className='mobile-menuIcon'><PiShoppingCartLight size={30} /></div>
                <div className='mobile-menuIcon'><IoIosHeartEmpty size={30} /></div>
            </div>

        </div>

    </div>
  )
}

export default MobileMenu