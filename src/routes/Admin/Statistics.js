import React from 'react'

//Components
import Header from '../../components/profile/DashBoardHeader';
import AdminDashboard from '../../components/AdminDashboard';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';
import * as echarts from 'echarts';

//Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxDashboard } from 'react-icons/rx';

const Statistics = () => {
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

  const pieData = [
    { value: 200, name: 'Beverages',itemStyle:{color:'#3d52d7'}},
    { value: 423, name: 'Sweets',itemStyle:{color:'#e8db1e'} },
    { value: 343, name: 'Fishes',itemStyle:{color:'#31cfdd'} },
  ];

  let pieTotalValue = 0;

    pieData.forEach((item)=>{
      pieTotalValue +=  item.value;
    })

  const piePercentage = pieData.map((item) =>{
    
    return ((item.value / pieTotalValue) * 100 || 0).toFixed(2);
  })

 
  const pieRef = React.useRef();
  
  React.useEffect(()=>{
    const myChart = echarts.init(pieRef.current, null, {
      renderer: 'svg'});

    let option;

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '1%',
        left: 'center',
        itemStyle:{fontWeight:'700'}
      },
      
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: pieData
        }
      ]
    };
    
    option && myChart.setOption(option);
  })
 
  //handle admin dashboard
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
    <div style={{position:'relative'}} >
      <div className='statistics'>
        { visivleDashboard &&
          <div className='handleBrightness'>
          </div>
        }
          

          <div className='half-1'>
              <AdminDashboard   refs={dashboardRef} id={1} />
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
              <div className='statistics-grid'>

                <div className='grid-1 grid'>
                  <div className='pie'>
                    <div className='title'>Best selling products</div>
                    {windowChanged ?<div ref={pieRef} className='pieElement'></div>:'' }
                    {!windowChanged ?<div ref={pieRef} className='pieElement'></div>:'' }
                    
                    <div className='legends'>
                      <div><p className='leg-title'>Beverages</p><p>{piePercentage[0]}%</p></div>
                      <div><p className='leg-title'>Sweets</p><p>{piePercentage[1]}%</p></div>
                      <div><p className='leg-title'>Fishes</p><p>{piePercentage[2]}%</p></div>
                    </div>
                  </div>
                </div>

                <div className='grid-2 grid'>

                  <div className='line-chart-cont'>
                    { windowChanged ? <LineChart  />:''}
                    { !windowChanged ? <LineChart  />:''}
                  </div>

                </div>

              </div>
              <div className='grid-3'>
                <div className='bar-chart-cont'>
                    { windowChanged ? <BarChart />:''}
                    { !windowChanged ? <BarChart />:''}
                </div>
              </div>
          </div>

          <div>
            
          </div>
          
      </div>
    </div>
  )
}

export default Statistics