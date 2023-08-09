import React from 'react'


//Components
import ProfilePic from '../ProfilePic';

//icons
import { AiOutlineSearch } from 'react-icons/ai';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { VscBell } from 'react-icons/vsc';
import NotfiDot from '../made-icons/NotfiDot';


const DashBoardHeader = () => {

  const [notfication,setNotfication] = React.useState(true);
  

  return (


      <div className='dashboard-header'>

          <form className='dash-search-container'>
              <div className='dash-search-icon' type="submit"><AiOutlineSearch/></div>
              <div><input placeholder='Search' className='dash-input' type='text' /></div>
          </form>


          <div className='dash-nav'>
            <div>Home</div>
            <div>Contact Us</div>
            <div>About Us</div>
            <div>Services</div>

          </div>

          

          <div className='user-content'>

          <div className='points'>
              <div><AiTwotoneThunderbolt className='thunder-icon' size={20} fill='#7dbe54'/></div>
              <div>40</div>
            </div>

           

            <div className='notfication'>
              {
                notfication ? 
                <NotfiDot size={25} />:
                <VscBell size={25}/>
              }
            </div>

            <ProfilePic/>

    
          </div>

    </div>
  )
}

export default DashBoardHeader