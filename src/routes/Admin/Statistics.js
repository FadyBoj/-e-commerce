import React from 'react'

//Components
import Header from '../../components/profile/DashBoardHeader';
import AdminDashboard from '../../components/AdminDashboard';
import LineChart from '../../components/charts/LineChart';
import * as echarts from 'echarts';


const Statistics = () => {

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

  console.log(piePercentage)
 
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
 

  return (
    <div className='statistics'>

        <div className='half-1'>
            <AdminDashboard id={1} />
        </div>

        <div className='half-2'>
            <Header/>
            <div className='statistics-grid'>

              <div className='grid-1 grid'>
                <div className='pie'>
                  <div className='title'>Best selling products</div>
                  <div ref={pieRef} className='pieElement'></div>
                  <div className='legends'>
                    <div><p className='leg-title'>Beverages</p><p>{piePercentage[0]}%</p></div>
                    <div><p className='leg-title'>Sweets</p><p>{piePercentage[1]}%</p></div>
                    <div><p className='leg-title'>Fishes</p><p>{piePercentage[2]}%</p></div>
                  </div>
                </div>
              </div>

              <div className='grid-2 grid'>
                <div className='line-chart-cont'>
                  <LineChart />
                </div>
              </div>

            </div>
        </div>
        
    </div>
  )
}

export default Statistics