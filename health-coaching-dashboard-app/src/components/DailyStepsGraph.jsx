import { Component } from "react";
import Chart from "react-apexcharts";
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklyStepsData } from "../scripts/getWeeklyStepsData";

const currUser = await getCurrentUser();
const weeklyStepsData = await getWeeklyStepsData(currUser);

class DailyStepsGraph extends Component {
  constructor(props) {
    super(props);
    const dayOverview = this.props.dayOverview;
    const l = ['Sunday Overview', 'Monday Overview', 'Tuesday Overview', 'Wednesday Overview', 'Thursday Overview', 'Friday Overview', 'Saturday Overview'];
    const dayIndex = l.indexOf(dayOverview);

    this.state = {
    
      series: [weeklyStepsData[dayIndex].steps * 100 / 10000],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: '70%',
                image: 'steps.png',
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
        
            dataLabels: {
              show: true,
              name: {
                offsetY: -50,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: function(val) {
                  return parseInt(weeklyStepsData[dayIndex].steps);
                },
                color: '#111',
                fontSize: '36px',
                show: true,
                offsetY: 70,
              }
            }
          }
        },
        fill: {
            colors: ['#ABE5A1']
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Steps'],
      },
    
    
    };
  }



  render() {
    return (
      <div>
        <div id="card">
          <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
        </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default DailyStepsGraph;