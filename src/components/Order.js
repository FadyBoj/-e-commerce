import React from 'react';

//Icons
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { BiTime } from 'react-icons/bi';
import { IoLocationSharp } from 'react-icons/io5';
import { FaRegCreditCard } from 'react-icons/fa';
import { LiaMoneyBillWaveSolid } from 'react-icons/lia'

export default function Order(props) {

    const cleanTime = (time) =>{

        const days = time / (60 * 60 * 24);
        const hours = (days - days.toFixed(0)) * 24;
        const minutes = (hours - hours.toFixed(0)) * 60;
       
        const daysFormat = days.toFixed(0) > 0 ? `${days.toFixed(0)} days ` : ''
        const hoursFormat = hours.toFixed(0) > 0 ? `${hours.toFixed(0)} hours `: '';
        let minutesFormat = '';
      
        if(hoursFormat.length > 0 || daysFormat.length > 0)
        {
          minutesFormat = ''
        }
        else{
          minutesFormat = `${minutes.toFixed(0) > 0 ? minutes.toFixed(0) : 2} minutes`
        }
      
        const timeFormat = daysFormat + hoursFormat + minutesFormat;
      
        return(timeFormat)
      
      }

     const currentTime = Date().toString();
     const diff = (new Date(currentTime) - new Date(props.time)) / 1000;

  const viewBtnRef = React.useRef();

  return (
    <div className='order'>

        <div className='sec-1'>
            <div style={{fontWeight:"bold",fontSize:15}}>{props.clientName}</div> 
            <div className='order-font'>{props.clientID}</div>
        </div>

        <div className='sec-2'>

            <div className='order-sec-details'>
                <BiTime style={{transform:'translateY(-1.3px)'}} size={14} fill='#989898'/>
                <div>{cleanTime(diff)} ago</div>
            </div>

            <div className='order-sec-details'>
                <IoLocationSharp size={14} fill='#989898'/>
                <div>{props.address}</div>
            </div>

            <div className='order-sec-details'>
                <FaRegCreditCard size={14} fill='#989898'/>
                <div>${props.price} {props.paymentType}</div>
            </div>

        </div>

        <div className='sec-3'>
            <LiaMoneyBillWaveSolid size={30} />
            <div className='invoice'>{props.invoice}</div>
        </div>

        <div>
            <button 
            ref={viewBtnRef}
            className='view-btn'
            onMouseDown={()=>{
                viewBtnRef.current.classList.add('view-btn-clicked')
            }}
            onMouseUp={()=>{
                viewBtnRef.current.classList.remove('view-btn-clicked')
            }}
            onMouseLeave={()=>{
                viewBtnRef.current.classList.remove('view-btn-clicked')
            }}
            
            >
                <p className='indexText'>View</p>
            </button>
        </div>

    </div>
  )
}
