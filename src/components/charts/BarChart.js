import React from 'react'
import * as echarts from 'echarts';


const BarChart = () => {

    const barChartRef = React.useRef();

    React.useEffect(() =>{
        const myChart = echarts.init(barChartRef.current    , null, {
        renderer: 'svg'
        });
        let option;
        let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在'];
        // prettier-ignore
        let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123];
        let yMax = 500;
        let dataShadow = [];
        for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
        }
        option = {
        title: {
            text: 'My Total Sales',
            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
            left:'center'
        },
        xAxis: {
            data: dataAxis,
            axisLabel: {
            inside: true,
            color: '#fff'
            },
            axisTick: {
            show: true  
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
                barBorderRadius: [5, 5, 0, 0],
                barBorderWidth: 0,
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
                ]),
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