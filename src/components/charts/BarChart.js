import React from 'react'
import * as echarts from 'echarts';


const BarChart = () => {

    const barChartRef = React.useRef();

    React.useEffect(() =>{
        const myChart = echarts.init(barChartRef.current    , null, {
        renderer: 'svg'
        });
        let option;
        let dataAxis = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        // prettier-ignore
        let data = [1,2,3,4,5,6,7,8,9,10,11,12];
        let yMax = 500;
        let dataShadow = [];
        for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
        }
        option = {
        title: {
            text: 'My Total Progress',
            subtext: 'Your progress through the year',
            left:'center'

        },
        xAxis: {
            data: dataAxis,
            axisLabel: {
            inside: false,
            color: '#000',
            },
            axisTick: {
            show: false
            },
            axisLine: {
            show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
            show: false
            },
            axisTick: {
            show: false
            },
            axisLabel: {
            color: '#999'
            }
        },
        
        series: [
            {
            type: 'bar',
            showBackground: true,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
                ])
            },
            emphasis: {
                itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#2378f7' },
                    { offset: 0.7, color: '#2378f7' },
                    { offset: 1, color: '#83bff6' }
                ])
                }
            },
            data: data
            }
        ]
        };
        // Enable data zoom when user click bar.
        const zoomSize = 6;
        myChart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue:
            dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
        });

        option && myChart.setOption(option);
    })

  return (
    <div ref={barChartRef} className='bar-chart'>

    </div>
  )
}

export default BarChart