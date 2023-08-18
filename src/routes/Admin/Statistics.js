import React from 'react'

//Components
import Header from '../../components/profile/DashBoardHeader';
import AdminDashboard from '../../components/AdminDashboard';



const Statistics = () => {
  return (
    <div className='statistics'>

        <div className='half-1'>
            <AdminDashboard id={1} />
        </div>

        <div className='half-2'>
            <Header/>
        </div>
        
    </div>
  )
}

export default Statistics