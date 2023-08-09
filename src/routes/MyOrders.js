import React from 'react'

import DashBoardHeader from '../components/profile/DashBoardHeader';
import Footer from '../components/Footer';
import ProfileDashboard from '../components/profile/ProfileDashboard';
import OrderItem from '../components/OrderItem';

//icons
import { AiOutlineGlobal } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoFilterSharp } from 'react-icons/io5'

const MyOrders = () => {

    const [activePosition,setActivePosition] = React.useState({value:'px',id:0});

        
        
    
       

  return (
    <div className='parent-container'>
        <div className='my-orders'>

            <div className='split-1'>
                <ProfileDashboard id={3}/>
            </div>


            <div className='split-2'>
                <DashBoardHeader/>
                <div className='if-orders'>

                    <div className='orders'>

                        <div className='details'>
                            <div className='main-title'>Order Details</div>
                            <p className='secondary-title'>
                                In the order details section, you can review and manage all orders with their details.
                                You can view and edit many information such as IDs of all orders, ordered product, order 
                                date, price and other status. Access to this areais limited. Only adminstrators and team leaders 
                                can reach.The changes you make will be approved after they are checked  
                            </p>
                        </div>

                        <div className='orders-nav'>
                            <div className='items'>
                                <div className={`nav-element ${activePosition.id === 0 ? 'active-order-nav':''}`} onClick={()=>{setActivePosition({value:'0px',id:0})}}>All Orders</div>
                                <div className={`nav-element ${activePosition.id === 1 ? 'active-order-nav':''}`} onClick={()=>{setActivePosition({value:'110px',id:1})}}>Pending</div>
                                <div className={`nav-element ${activePosition.id === 2 ? 'active-order-nav':''}`} onClick={()=>{setActivePosition({value:'220px',id:2})}}>canceled</div>
                                <div className={`nav-element ${activePosition.id === 3 ? 'active-order-nav':''}`} onClick={()=>{setActivePosition({value:'330px',id:3})}}>Completed</div>
                            </div>
                            <div style={{transform:`translateX(${activePosition.value})`}} className='active-board'></div>
                            <div className='active-space'></div>
                        </div>

                        <div className='orders-api'>
                            <div className='order-search-container'>
                                <div className='orders-search-icon'><AiOutlineSearch size={20} /></div>
                                    <div><input className='orders-search' placeholder='Search for order ID, Order status pr something...' type='text'/>
                                </div>
                                <div className='filters-btn'>
                                    <div><IoFilterSharp className='filter-icon' size={20} /></div>
                                    <div>Filters</div>
                                </div>

                            </div>
                            <br/><br/>
                            <div className='orders-preview'>

                                <div className='orders-header'>
                                    <div>Order ID</div>
                                    <div>Customer</div>
                                    <div>Order</div>
                                    <div>Delivery Date</div>
                                    <div>Delivery Pricing</div>
                                    <div>Delivery Status</div>
                                </div>
                                <div className='orders-space'></div>
                                
                                <div className='orders-container'>
                                <OrderItem type={'pending'}/>
                                <OrderItem type={'complete'}/>
                                <OrderItem type={'complete'}/>
                                <OrderItem type={'complete'}/>
                                <OrderItem type={'canceled'}/>
                                <OrderItem type={'complete'}/>
                                <OrderItem type={'complete'}/>
                                </div>


                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MyOrders