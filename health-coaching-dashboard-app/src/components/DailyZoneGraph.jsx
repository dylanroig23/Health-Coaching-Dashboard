import { Component } from "react";
import Chart from "react-apexcharts";
import { getCurrentUser } from "../scripts/getCurrentUser";
import { getWeeklyZoneMinutesData } from "../scripts/getWeeklyZoneMinutesData";

const currUser = await getCurrentUser();
const weeklyZoneData = await getWeeklyZoneMinutesData(currUser);

class DailyZoneGraph extends Component {
  constructor(props) {
    super(props);
    const dayOverview = this.props.dayOverview;
    const l = ['Sunday Overview', 'Monday Overview', 'Tuesday Overview', 'Wednesday Overview', 'Thursday Overview', 'Friday Overview', 'Saturday Overview'];
    const dayIndex = l.indexOf(dayOverview);
    this.state = {
    
      series: [weeklyZoneData[dayIndex].duration * 100 / 22],
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
              image: 'zone.png',
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
                  return parseInt(weeklyZoneData[dayIndex].duration);
                },
                color: '#111',
                fontSize: '36px',
                show: true,
                offsetY: 70
              }
            }
          }
        },
        stroke: {
          lineCap: 'round'
        },
        fill: {
            colors: ['#FFD700']
        },
        labels: ['Minutes'],
        offsetY: 70,
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

export default DailyZoneGraph;