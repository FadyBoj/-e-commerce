import React from 'react'

//Components
import Header from '../../components/profile/DashBoardHeader';
import AdminDashboard from '../../components/AdminDashboard';

//Icons
import { RxDashboard } from 'react-icons/rx';


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


  return (
    <div className='statistics'>

        <div className='half-1'>
            <AdminDashboard refs={dashboardRef} id={3} />
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
        </div>
        
    </div>
  )
}

export default Orders