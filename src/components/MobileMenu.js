import React from 'react'

export default function MobileMenu(props){
    return(
        <div className={props.visible ? 'set--visible':''}>
        <div className='mobile--menu--container'>

            <div className='main--hero'>
                <div className='btn1'>Register</div>
                <div className='btn2'>Login</div>
            </div>

            <div className='mobile-filters'>

            <div className='filterItem'> 
            <div>Legums</div>
            <div className='arrow--icon'><ion-icon name="chevron-forward-outline"></ion-icon></div>
             <div className='space'></div>
             </div>

            <div className='filterItem'>  
            <div>Sauces</div> 
            <div className='arrow--icon'><ion-icon name="chevron-forward-outline"></ion-icon></div>
            <div className='space'></div>
            </div>

            <div className='filterItem'> 
            <div>Fishes</div> 
            <div className='arrow--icon'><ion-icon name="chevron-forward-outline"></ion-icon></div>
            <div className='space'></div>
            </div>

            <div className='filterItem'> 
            <div>Canned food</div> 
            <div className='arrow--icon'><ion-icon name="chevron-forward-outline"></ion-icon></div>
            <div className='space'></div>
            </div>

            <div className='filterItem'>
            <div>Cleaning products</div>
            <div className='arrow--icon'><ion-icon name="chevron-forward-outline"></ion-icon></div>
            <div className='space'></div>
            </div>

            <div className='filterItem'>
            <div>Sweets</div>
            <div className='arrow--icon'><ion-icon name="chevron-forward-outline"></ion-icon></div>
            <div className='space'></div>
            </div>
            
            <div className='filterItem'> 
             <div>Drinks</div>
             <div className='arrow--icon'><ion-icon name="chevron-forward-outline"></ion-icon></div>
             <div className='space'></div>
             </div>
                
            </div>

        </div>
        </div>
    )
}