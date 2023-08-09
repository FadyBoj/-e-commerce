import React from 'react'
import { Link } from 'react-router-dom';

const DashboradItem = (props) => {
  return (
     <Link to={props.href}><div onClick={()=>{props.handleClick(props.id)}} className={`dashborad-item ${props.active ? 'active-dashboard':''}`}>
            <div className='icon-container'>
                {props.icon}
            </div>
            
            <div className='row-2'>
                <div>
                    {props.option}
                </div>
                <div className='info'>
                    {props.info}
                </div>
            </div>
        </div></Link>
        
  )
}

export default DashboradItem