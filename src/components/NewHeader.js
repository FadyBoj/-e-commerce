import React from 'react'


//Components
import ProfilePic from './ProfilePic';
import Shoperz from './shoperz'

//icons
import { AiOutlineSearch } from 'react-icons/ai';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { VscBell } from 'react-icons/vsc';
import NotfiDot from './made-icons/NotfiDot';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { PiShoppingCartLight } from 'react-icons/pi' 
import { IoIosHeartEmpty } from 'react-icons/io'

const NewHeader = (props) => {

    // handle auth

    const [isAuthenticated,setIsAuthenticated] = React.useState(false);

    const [notfication,setNotfication] = React.useState(true);
    const [windowWidth,setWindowWidth] = React.useState(window.innerWidth);

    
    window.addEventListener('resize',() =>{
      setWindowWidth(window.innerWidth)
    })

    //Filters Setup

    const [animateClass,setAnimateClass] = React.useState('');
    const [delay,setDelay] = React.useState(null);
    const [exitClass,setExitClass] = React.useState('')

    const [dropDownVisibility,setDropDownVisibility] = React.useState(false);
    const dropDownRef = React.useRef();

    

   

    const handleVisibility = ()=>{
      clearTimeout(delay)
      setDropDownVisibility(true);            
        setTimeout(()=>{
            setAnimateClass('drop-down-animate');
         },10)
      
    }

    const handleMouseLeave = ()=>{
      setExitClass('drop-up-animate');

      clearTimeout(delay)
   
      setDelay(
        setTimeout(()=>{
        
          setAnimateClass('');
          setExitClass('');
          setDropDownVisibility(false);
        },70)
        )
    }

    //Filters End

  //****************//

    //Mobile Menu

  return (
    <div style={props.sticky ? {top:'0px'}:{}} className='new-header'>


      
        <div>

          <div className='sec-1'>
              <div className='menu-logo'>
                <div onClick={()=>{props.handleMenu(true)}} className='react-menu-icon'><GiHamburgerMenu color='#3d52d7' size={30} /></div>
                <div><Shoperz  width={windowWidth > 405 ? 160 : 120}  /></div>
              </div>

              <div className='user-content'>

                <div className='new-headerIcon'><PiShoppingCartLight size={25} /></div>
                <div className='new-headerIcon'><IoIosHeartEmpty size={25} /></div>

                
                <div className='notfication'>
                  {
                    notfication ? 
                    <NotfiDot size={25} />:
                    <VscBell size={25}/>
                  }
                </div>
                  { isAuthenticated ?
                    <ProfilePic/>:
                    <div className='header-sign-in'>
                      <button className='sign-in-btn'>Sign in</button>
                    </div>
                    
                  }


              </div>

        </div>

        <div className='sec-2'>

              <div className='new-nav'>
                <div className='new-nav-item' >Home</div>
                
                <div  ref={dropDownRef} onMouseEnter={()=>{handleVisibility()}} onMouseLeave={()=>{handleMouseLeave()}}  className='nav-categories'>
                    <div  className='roww-1 new-nav-item'>

                      <div  >Categories</div> 
                      <RiArrowDropDownLine size={30} />

                    </div>
                    { dropDownVisibility && 
                    <div   className={`row-2 ${animateClass} ${exitClass}`}>
                      <div className='category'>
                          <div>
                            <div className='first-category category-item'>Legums</div>
                          </div>
                          <div className='types'>
                            <div className='category-item'>Nuts</div>
                            <div className='category-item'>Peas</div>
                            <div className='category-item'>Lentils</div>
                            <div className='category-item'>Peanuts</div>
                            <div className='category-item'>Green peas</div>
                            <div className='category-item'>Navy beans</div>

                          </div>
                      </div>

                      <div className='category'>
                          <div>
                            <div className='first-category category-item'>Sauces</div>
                          </div>
                          <div className='types'>
                            <div className='category-item'>Mayonnaise</div>
                            <div className='category-item'>Blue Cheese / Roquefort</div>
                            <div className='category-item'>Buttermilk</div>
                            <div className='category-item'>Caesar</div>
                            <div className='category-item'>Creamy Cucumber</div>
                            
                          </div>
                      </div>

                      <div className='category'>
                          <div>
                            <div className='first-category category-item'>Fishes</div>
                          </div>
                          <div className='types'>
                            <div className='category-item'>Alaskan salmon</div>
                            <div className='category-item'>Cod</div>
                            <div className='category-item'>Herring</div>
                            <div className='category-item'>shrimp</div>
                            <div className='category-item'>Mackerel</div>
                            <div className='category-item'>Tuna</div>

                          </div>
                      </div>

                      <div className='category'>
                          <div>
                            <div className='first-category category-item'>Sweets</div>
                          </div>
                          <div className='types'>
                            <div className='category-item'>Macaroons</div>
                            <div className='category-item'>Paris-Brest</div>
                            <div className='category-item'>Poffertjes</div>
                            <div className='category-item'>Molten Chocolate Cake</div>
                            <div className='category-item'>Kunafah</div>
                            <div className='category-item'>Torrone</div>

                          </div>
                      </div>

                      <div className='category'>
                          <div>
                            <div className='first-category category-item'>Beverages</div>
                          </div>
                          <div className='types'>
                            <div className='category-item'>Tea</div>
                            <div className='category-item'>Coffee</div>
                            <div className='category-item'>Beer</div>
                            <div className='category-item'>Coca cola</div>
                            <div className='category-item'>Pepsi</div>
                            <div className='category-item'>Energy drinks</div>

                          </div>
                      </div>

                    </div>
                    }
                  </div>

                  <div className='new-nav-item'>Contact Us</div>
                  <div className='new-nav-item'>About Us</div>
                  <div className='new-nav-item'>Services</div>
                </div>

              <form className='dash-search-container'>  
                <div className='dash-search-icon' type="submit"><AiOutlineSearch size={20}/></div>
                <div><input placeholder='Search for products' className='dash-input' type='text' /></div>
               </form>

        </div>
        </div>
    </div>
  )
}

export default NewHeader