import React from 'react'


//Components
import ProfilePic from '../ProfilePic';

//icons
import { AiOutlineSearch } from 'react-icons/ai';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { VscBell } from 'react-icons/vsc';
import NotfiDot from '../made-icons/NotfiDot';
import { GiHamburgerMenu } from 'react-icons/gi';

//Icons
import Shoperz from '../../components/shoperz'

const DashBoardHeader = () => {

  const [notfication,setNotfication] = React.useState(true);
  const [windowWidth,setwindowWidth] = React.useState(window.innerWidth);

    
  React.useEffect(()=>{
    const handleResize = ()=>{
      setwindowWidth(window.innerWidth);
    }

    window.addEventListener('resize',handleResize);

    return () =>{
      window.removeEventListener('resize',handleResize);
    }

  })

  return (


      <div className='dashboard-header'>

          
          <Shoperz width={130} height={130} />

          <div className='dash-nav'>
            <div>Home</div>
            <div>Contact Us</div>
            <div>About Us</div>
            <div>Services</div>

          </div>

          

          <div className='user-content'>


          { windowWidth > 1057 &&
            <div className='notfication'>
              {
                notfication ? 
                <NotfiDot size={25} />:
                <VscBell size={25}/>
              }
            </div>
          }

            { windowWidth > 1057 &&
            <ProfilePic/>
            }

            { windowWidth < 1057 &&
              <div className='dash-menu-cont'>
              <GiHamburgerMenu size={25}/>
            </div>
            }

    
          </div>

    </div>
  )
}

export default DashBoardHeader