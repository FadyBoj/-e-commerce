import React from 'react'
import { BsDot } from 'react-icons/bs'
const OrderItem = (props) => {
  return (
    <div className='order-item'>
        <div className='order-id'>KKA45012</div>
        <div className='cutomer-name'>Olivia Nules</div>
        <div className='order-name'>Nike T-shirt</div>
        <div className='delivery-date'>12.04.2023</div>
        <div className='delivery-price'>$24,90</div>

        { props.type === 'pending' &&
        <div className='pending'>
            <div className='dot'>&#x2022;</div>
            <div>Pending</div>
        </div>
        }

        { props.type === 'complete' &&
        <div className='complete'>
            <div className='dot'>&#x2022;</div>
            <div>Completed</div>
        </div>

        }

         { props.type === 'canceled' &&
        <div className='canceled'>
            <div className='dot'>&#x2022;</div>
            <div>Canceled</div>
        </div>

        }

    </div>
  )
}

export default OrderItem