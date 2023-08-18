import React from 'react'

//Components
import Header from '../../components/profile/DashBoardHeader';
import AdminDashboard from '../../components/AdminDashboard';



const Complaints = () => {
  return (
    <div className='statistics'>

        <div className='half-1'>
            <AdminDashboard id={5} />
        </div>

        <div className='half-2'>
            <Header/>
        </div>
        
    </div>
  )
}

export default Complaints