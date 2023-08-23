import React from 'react'
import * as echarts from 'echarts';

const LineChart = () => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  
  const alternative = {
     "-1":11,
     "-2":10,
     "-3":9,
     "-4":8,
     "-5":7,
     "-6":6,
     "12":0,
     "13":1,
     "14":2,
     "15":3,
     "16":4,
     "17":5,
  }
  
  let latestMonths =  [];
  
  for(let i = 0; i < 6; i++)
  {
     const monthNum = new Date().getMonth() - i;
     if(monthNum < 0)
     {
        const month = monthNames[alternative[String(monthNum)]];
        latestMonths.push(month);
     }
     else{
        const month = monthNames[monthNum];
        latestMonths.push(month);
     }
  }
  
  console.log(latestMonths.reverse())

    const lineChartRef = React.useRef();

    React.useEffect(() =>{
        const myChart = echarts.init(lineChartRef.current, null, {
            renderer: 'svg'
            });
            let option;
            option = {
                color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                title: {
                  text: 'Total Revenue'
                },
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'cross',
                    label: {
                      backgroundColor: '#6a7985'
                    }
                  }
                },
                legend: {
                  data: ['Revenue']
                },
                toolbox: {
                  feature: {
                    saveAsImage: {}
                  }
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis: [
                  {
                    type: 'category',
                    boundaryGap: false,
                    data: latestMonths
                  }
                ],
                yAxis: [
                  {
                    type: 'value'
                  }
                ],
                series: [
                 
                  {
                    name: 'Revenue',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                      width: 0
                    },
                    showSymbol: false,
                    label: {
                      show: true,
                      position: 'top'
                    },
                    areaStyle: {
                      opacity: 0.8,
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#A5FECB'
                        },
                        {
                          offset: 1,
                          color: '#20BDFF'
                        }
                      ])
                    },
                    emphasis: {
                      focus: 'series'
                    },
                    data: [312,543,233,723,43,433]
                  }
                ]
              };
              
              option && myChart.setOption(option);
    })


  return (
    <div className='line-chart' ref={lineChartRef}>

    </div>
  )
}

export default LineChart