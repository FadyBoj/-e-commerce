import React from 'react'

//componenets
import DashboradItem from './DashboradItem'
import ShoperzSvg from '../shoperz';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { FaClipboardList } from 'react-icons/fa6'
import { MdPayment } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'


const ProfileDashboard = (props) => {


  const [dashboardInfo,setDashBoardInfo] = React.useState([
    {
      id:1,
      option:'Personal Detalis',
      info:'Name, Email, Password',
      active:true,
      icon:<BsFillPersonFill size={25}/>,
      href:'/profile/personal-info'
    },
    {
      id:2,
      option:'My address',
      info:'Modify your address',
      active:false,
      icon:<FaLocationDot size={25}/>,
      href:'/profile/address'
    },
    {
      id:3,
      option:'My Orders',
      info:'view your orders',
      active:false,
      icon:<FaClipboardList size={25}/>,
      href:'/profile/my-orders'
    },
    {
      id:4,
      option:'My Payments',
      info:'Billing & Cards',
      active:false,
      icon:<MdPayment size={25}/>,
      href:'/profile/my-payments'
    },
    {
      id:5,
      option:'Sign out',
      info:'Sign out from your account',
      active:false,
      icon:<FiLogOut size={25}/>,
      href:'/sign-out'

    }
  ])

  const setActiveDashBoard = (id)=>{
    setDashBoardInfo((prevInfo)=>{
      return prevInfo.map((item)=>{
        return item.id === id ? {...item,active:true} : {...item,active:false}
      })
    })
  }

  const dashboardElemetns = dashboardInfo.map((item,index)=>{
    return <DashboradItem
          key={item.id}
          id={item.id}
          option={item.option}
          info={item.info}
          icon={item.icon}
          active={props.id === item.id ? true : false}
          handleClick={setActiveDashBoard}
          href={item.href}/>
  })



  return (
    <div className='profile-dashboard'>
      <div className='logo'><ShoperzSvg width={140}  /></div>
      <div style={{marginTop:'50px',display:'flex',flexDirection:'column',gap:'30px'}}>
        {dashboardElemetns}
      </div>
        
    </div>
  )
  
  }
export default ProfileDashboard