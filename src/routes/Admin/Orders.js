import React from 'react'

//Components
import Header from '../../components/profile/DashBoardHeader';
import AdminDashboard from '../../components/AdminDashboard';

//Icons
import { RxDashboard } from 'react-icons/rx';
import { BiSolidDownArrow } from 'react-icons/bi'
 
const Orders = () => {

  const dashboardRef = React.useRef();

  const [windowChanged,setwindowChanged] = React.useState(false);
  const [windowWidth,setwindowWidth] = React.useState(window.innerWidth);


  React.useEffect(()=>{
    const handleResize = ()=>{
      setwindowChanged(prevValue => !prevValue);
      setwindowWidth(window.innerWidth);
      if(window.innerWidth < 1317)  
      {
        dashboardRef.current.classList.remove('show-adminDashboard');
        setVisibleDashboard(false)
      }
    }

    window.addEventListener('resize',handleResize);

    return () =>{
      window.removeEventListener('resize',handleResize);
    }

  })

  const [visivleDashboard,setVisibleDashboard] = React.useState(false);
  const [visibleStatusDropDown,setVisibleStatusDropDown] = React.useState(false);

  //Refs

  const orderDropDownRef = React.useRef();
  const statusFilterContainerRef = React.useRef();
  const statusFilterRef = React.useRef();


  const showDashBoard = ()=>{
    setTimeout(()=>{
      setVisibleDashboard(true)
      dashboardRef.current.classList.add('show-adminDashboard');
    },1)
  }

  React.useEffect(()=>{
    const handleClickOutside = (e)=>{
      if(dashboardRef.current && !dashboardRef.current.contains(e.target))
      {
        dashboardRef.current.classList.remove('show-adminDashboard');
        setVisibleDashboard(false)

      }
    }

    document.addEventListener('click',handleClickOutside);

    return() =>{
      document.removeEventListener('click',handleClickOutside)
    }

  })

  React.useEffect(() =>{
    if(visivleDashboard)
    {
      document.body.classList.add('noScroll')
    }
    else{
      document.body.classList.remove('noScroll')

    }
  },[visivleDashboard])


  const handleOrdersDropDown = () =>{

    setVisibleStatusDropDown(prev => !prev)

  }

  React.useEffect(() =>{
    const handleClickOutSide = (e) =>{
      if( orderDropDownRef.current && orderDropDownRef.current.classList.contains('goDown') && e.target.contains(statusFilterContainerRef.current))
      {
        orderDropDownRef.current.classList.remove('goDown')
        setVisibleStatusDropDown(false)
      }
    }

    document.addEventListener('click',handleClickOutSide);

    return () =>{
      document.removeEventListener('click',handleClickOutSide)
    }

  })




  return (
    <div className='statistics'>

        <div className='half-1'>
            <AdminDashboard refs={dashboardRef} id={2} />
        </div>

        <div className='half-2'>
            <Header/>
            { windowWidth  < 1317 &&
              <div 
              className='menu-icon-container'
              onClick={()=>{showDashBoard()}}
              >
                <RxDashboard size={24} /></div>
              }
              

              <div className='orders-details-container'>

                <div className='orders-api'>
                  <div className='section-1'>

                    <h1>Orders</h1>

                    <div ref={statusFilterContainerRef} onClick={handleOrdersDropDown} className='status-filter-container'>

                      <div 
                      ref={statusFilterRef}
                      className='status-filter'
                      onMouseDown={()=>{
                        statusFilterRef.current.classList.add('element-clicked')
                      }}
                      onMouseUp={()=>{
                        statusFilterRef.current.classList.remove('element-clicked')
                      }}
                      onMouseLeave={()=>{
                        statusFilterRef.current.classList.remove('element-clicked')

                      }}
                      >
                        <div>Status: </div>
                        <div className='orders-arrow'
                        style={visibleStatusDropDown ? {transform:'translateY(-2px)rotate(180deg)'}:{}} 
                        > 
                        <BiSolidDownArrow
                        
                        fill='#616161' /> 
                        </div>
                      </div>
                        <div  
                        ref={orderDropDownRef}
                        className={`order-filter-dropdown ${visibleStatusDropDown ? 'goDown': 'goUp'}`}
                        >
                      </div>
                     
                    </div>

                     <div className='date-filter'>
                      <div>Date: </div>
                      <div className='orders-arrow'> <BiSolidDownArrow  fill='#616161' /> </div>
                    </div>

                  </div>
                </div>

                <div className='orders-details'>

                </div>

              </div>

        </div>
        
    </div>
  )
}

export default Orders