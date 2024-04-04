<<<<<<< Updated upstream
=======
/* This file contains the logic for the calendar layouts and calendar highlighting.
Some of this file contains hard-coding/non-dynamic logic due to database constraints.
*/
>>>>>>> Stashed changes
import React from 'react';
import '../calendar.css';

class CalendarLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    }

    render() {
        return (
            <div className="calendar">
<<<<<<< Updated upstream
=======
                {/*these months are dummy data/hard-coded based on when we started building the dashboard */}
>>>>>>> Stashed changes
                {this.renderMonthCalendar(2024, 1)} {/* February 2024 */}
                {this.renderMonthCalendar(2024, 2)} {/* March 2024 */}
                {this.renderMonthCalendar(2024, 3)} {/* April 2024 */}
                {this.renderMonthCalendar(2024, 4)} {/* May 2024 */}
            </div>
        );
    }

    // Function to render the calendar for a specific month and year
    renderMonthCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1);
        const startingDay = firstDayOfMonth.getDay();
        let days = [];
        let dayCounter = 1;

        // Calculate the date for February 11th
        const feb11 = new Date(year, 1, 11);
        // Calculate the date for the previous week's Saturday
        const prevSaturday = new Date();
        prevSaturday.setDate(prevSaturday.getDate() - (prevSaturday.getDay() + 7) % 7);
        // Calculate the date for twelve weeks from February 11th
        const twelfthWeek = new Date(feb11);
        twelfthWeek.setDate(twelfthWeek.getDate() + (11 * 7));

        // Create the header row with weekdays
        const headerRow = (
            <tr>
                {this.weekdays.map((day, index) => (
                    <th key={index}>{day}</th>
                ))}
            </tr>
        );

        // Create rows for the calendar
        let week = [];
        for (let i = 0; i < startingDay; i++) {
            week.push(<td key={i}></td>); // Empty cells before the start of the month
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const currentDate = new Date(year, month, day);
            const className = this.getHighlightClass(currentDate, feb11, prevSaturday, twelfthWeek);
            week.push(<td key={day} className={className}>{day}</td>);
            if ((day + startingDay) % 7 === 0 || day === daysInMonth) {
                // Add empty cells to complete the last row if necessary
                if (day === daysInMonth) {
                    for (let i = week.length; i < 7; i++) {
                        week.push(<td key={i}></td>);
                    }
                }
                days.push(<tr key={day}>{week}</tr>);
                week = [];
            }
        }

        return (
            <div className="calendar-month" key={`${year}-${month}`}>
                <h2>{new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                <table className="calendar-table">
                    <thead>{headerRow}</thead>
                    <tbody>{days}</tbody>
                </table>
            </div>
        );
    }

getHighlightClass(date, feb11, prevWeekSaturday, twelfthWeek) {
    const today = new Date();
    const currentWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const lastWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() - 6);
    const lastWeekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 6);

    if (date >= currentWeekStart && date <= lastWeekEnd) {
        return 'current-week';
    } else if (date >= lastWeekStart && date <= lastWeekEnd) {
        return 'green-highlight';
    } else if (date >= feb11 && date <= prevWeekSaturday) {
        return 'green-highlight';
    } else if (date >= twelfthWeek && date <= new Date(twelfthWeek.getFullYear(), twelfthWeek.getMonth(), twelfthWeek.getDate() + 6)) {
        return 'orange-highlight';
    } else {
        return '';
    }
    }
}

export default CalendarLayout;













