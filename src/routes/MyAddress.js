import React from 'react'
import { Link } from 'react-router-dom';
//components

import Header from '../components/Header'
import DashBoardHeader from '../components/profile/DashBoardHeader'

import Footer from '../components/Footer'
import ProfileDashboard from '../components/profile/ProfileDashboard'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const MyAddress = () => {

    const [loading,setLoading] = React.useState('animating');
    setTimeout(()=>{
        setLoading('default')
      },1000)
    const [isAdress,setIsAdress] = React.useState(false)

  return (
   <div>
        <div className='my-address'>
            <div className='split-1'>
                <ProfileDashboard id={2}/>
            </div>

            <div className='split-2'>
                
                <DashBoardHeader/>
                <div className='address'>
                { loading === 'animating' &&
                    <div className='loading-container'>
                    <Stack sx={{ color: '#1d4ca1' }} spacing={2} direction="row">
                        <CircularProgress color="inherit" />
                    </Stack>
                    </div>
                }
                    { !isAdress &&
                    <div className='no-address'>
                        <div><img alt='location' draggable="false" className='location-icon' src={require('../images/location.png')}/></div>
                        <div>You have no addresses on Shoperz, add one now and get your orders easily</div>
                        <div>
                       <Link to={'/profile/address/new-address'}><button className='address-btn'>Add New Address</button></Link>
                       </div>
                    </div>
                    }
                </div>
            </div>
        </div>
        <Footer/>
   </div>
  )         
}

export default MyAddress