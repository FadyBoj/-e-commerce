import React from 'react'

import { CgProfile } from 'react-icons/cg';
import { RiSettings2Line } from 'react-icons/ri';
import { TbLogout2 } from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io';

const ProfilePic = () => {


  const [profileDropDown,setProfileDropDown] = React.useState(false);
  const dropDownRef = React.useRef();

  const handleDropDown = ()=>{
    setProfileDropDown((prevValue)=>{
      return !prevValue
    })
  }
  
  React.useEffect(()=>{

    const handleClickOutSide = (event)=>{
      try {
        if(!dropDownRef.current.contains(event.target))
        {
          setProfileDropDown(false)
        }
      } catch (error) {
        
      }
    }

    document.addEventListener('click',handleClickOutSide);

    return ()=>{
      document.removeEventListener('click',handleClickOutSide)
    }


  })

  return (
    <div ref={dropDownRef} onClick={()=>{handleDropDown()}} className='profile-pic-container'> 
                  <div className='content'>
                      <div className='pfp' style={{backgroundImage:`url(${require('../images/John-wick.jpg')})`}}></div>
                      <div className='name'>
                        <p>John wick</p>
                        <p className='type'>Client</p>                  
                      </div>
                      <div 
                      className={`drop-down-arrow ${profileDropDown ? 'handle-drop-down':''}`}><IoIosArrowDown size={23} /></div>
                      { profileDropDown &&
                      <div className='drop-down'>

                        <div className='first ele'> <CgProfile size={20} /> <div>My profile</div></div>
                        <div className='ele'> <RiSettings2Line size={20} /> <div>Settings</div></div>
                        <div className='last ele'> <TbLogout2 size={20}/> <div>Logout</div></div>
                      
                      </div>
                      }
                  </div>

            </div>  
  )
}

export default ProfilePic