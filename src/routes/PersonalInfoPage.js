import React from 'react'

//components
import DashBoardHeader from '../components/profile/DashBoardHeader'
import Footer from '../components/Footer'
import ProfileDashboard from '../components/profile/ProfileDashboard'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const PersonalInfoPage = () => {

  const [loading,setLoading] = React.useState('animating');
  setTimeout(()=>{
    setLoading('default')
  },1000)

  return (
    <div>
    <div className='personal-info'>
      
      <div className='split-1'>

        <ProfileDashboard id={1} />
      </div>

      <div className='split-2'>
        
      <DashBoardHeader/>
        <div className='personal-details'>
        { loading === 'animating' &&
            <div className='loading-container'>
               <Stack sx={{ color: '#1d4ca1' }} spacing={2} direction="row">
                  <CircularProgress color="inherit" />
              </Stack>
            </div>
                }
          <div className='main--header'>Personal details</div>
          <form>
                <div className='inpts'>
                  
            <div className='label-input'>
              <div>
                
                <div className='sec-1'>
                  <div className='inpt-container'>
                    <div>First name</div>
                    <input className='inpt' name='firstname' type='text' />
                  </div>

                  <div className='inpt-container'>
                    <div>Last name</div>
                    <input className='inpt' name='firstname' type='text' />
                  </div>
                </div>

                </div>

                

                </div>


                <div className='label-input'>
              <div>
                  
                  <div className='sec-1'>

                    <div className='inpt-container'>
                      <div>Email</div>
                      <input className='inpt' name='email' type='text' />
                      <div className='email-msg'>Change Email Address ?</div>
                    </div>


                    <div className='inpt-container'>
                    <div>Phone number</div>
                    <input className='inpt' name='phonenumber' type='text' />
                    <div className='phone-msg'>You can't change your phone number</div>
                    </div>

                  </div>

                  <br /><br />
                  <div className='space'></div>
                  <br /><br />
                  <div className='sec-1'>

                  <div className='inpt-container'>
                    <div>Password</div>
                    <div className='inpt password-inpt' name='phonenumber'>
                      &#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;
                    </div>
                    <div className='password-msg'>Change Password ?</div>
                  </div>

                  </div>


                  
                </div>
 
                  
                </div>

                </div>

                
              

                <div>
                  <button className='save-btn'><p className='text'>Save changes</p></button>
                </div>

          </form>
        </div>
      </div>

    </div>
    <Footer />
    </div>
  )
}

export default PersonalInfoPage