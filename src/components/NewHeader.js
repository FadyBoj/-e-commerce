import React from 'react'


//Components
import ProfilePic from './ProfilePic';
import Shoperz from './shoperz'
//icons
import { AiOutlineSearch } from 'react-icons/ai';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { VscBell } from 'react-icons/vsc';
import NotfiDot from './made-icons/NotfiDot';


const NewHeader = () => {

    const [notfication,setNotfication] = React.useState(true);

  return (
    <div className='new-header'>
          <div className='sec-1'>
              <div style={{transform:'translateY(-5px)'}}><Shoperz width={160} height={90} /></div>

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

        <div className='sec-2'>
                  
        </div>
    </div>
  )
}

export default NewHeader