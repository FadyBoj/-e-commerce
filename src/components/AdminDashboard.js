import React from 'react'

//Components

import { Link } from 'react-router-dom';

//icons
import Shoperz from './shoperz'
import { RxDashboard } from 'react-icons/rx';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { RiInboxUnarchiveLine ,RiLogoutBoxLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { BiCommentError } from 'react-icons/bi';

const AdminDashboard = (props) => {
  return (
    <div className='admin-dashboard'>
        <div>
          <Shoperz width={140}/>
        </div>

        <div className='dash-items'>

            <Link className='link-router' to={'/admin/statistics'}><div className={`item ${props.id === 1 ? 'active-admin-item':''}`}>
                <RxDashboard size={20}  />
                <div>Statistics</div>
            </div></Link>

            <Link className='link-router' to={'/admin/orders'}><div className={`item ${props.id === 2 ? 'active-admin-item':''}`}>
                <LiaClipboardListSolid size={25}  />
                <div>Orders</div>
            </div></Link>

            <Link className='link-router' to={'/admin/products'}><div className={`item ${props.id === 3 ? 'active-admin-item':''}`}>
                <RiInboxUnarchiveLine size={20}  />
                <div>Products</div>
            </div></Link>

            <Link className='link-router' to={'/admin/users'}><div className={`item ${props.id === 4 ? 'active-admin-item':''}`}>
                <FiUsers size={20}  />
                <div>Users</div>
            </div></Link>

            <Link className='link-router' to={'/admin/complaints'}><div className={`item ${props.id === 5 ? 'active-admin-item':''}`}>
                <BiCommentError size={20}  />
                <div>Complaints</div>
            </div></Link>

            <Link className='link-router' to={'/sign-out'}><div className={`item ${props.id === 6 ? 'active-admin-item':''}`}>
                <RiLogoutBoxLine size={20}  />
                <div>Sign out</div>
            </div></Link>


        </div>
    </div>
  )
}

export default AdminDashboard