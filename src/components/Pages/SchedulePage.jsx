import React from 'react';

const SchedulePage = () => {
  const renderCalendar = () => {
    const calendarData = [
      { date: 1, events: ['Faculty Meeting - 10:00 AM'] },
      { date: 5, events: ['Science Fair - All Day'] },
      { date: 10, events: ['Mid-term Exams Begin'] },
      { date: 15, events: ['Tuition Due Date'] },
      { date: 20, events: ['Parent-Teacher Conference'] },
      { date: 25, events: ['Faculty Development Workshop'] },
      { date: 31, events: ['Halloween - No Classes'] }
    ];

    let calendarHTML = [];
    let dayCounter = 1;

    for (let week = 0; week < 6; week++) {
      let weekDays = [];
      for (let day = 0; day < 7; day++) {
        if (week === 0 && day < 1) {
          weekDays.push(<td key={`empty-${day}`}></td>);
        } else if (dayCounter > 31) {
          weekDays.push(<td key={`empty-end-${day}`}></td>);
        } else {
          const dayEvents = calendarData.find(d => d.date === dayCounter);
          weekDays.push(
            <td key={`day-${dayCounter}`}>
              <div className="calendar-day">{dayCounter}</div>
              {dayEvents && dayEvents.events.map((event, index) => (
                <div key={`event-${dayCounter}-${index}`} className="calendar-event">
                  {event}
                </div>
              ))}
            </td>
          );
          dayCounter++;
        }
      }
      calendarHTML.push(<tr key={`week-${week}`}>{weekDays}</tr>);
    }

    return calendarHTML;
  };

  return (
    <div id="schedule-page" className="page-content active">
      <div className="page-header">
        <h1 className="page-title">Schedule Management</h1>
        <p className="page-subtitle">View and manage class schedules, rooms, and timetables</p>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Class Schedule - Week of October 16, 2023</h2>
          <button className="card-action" id="generate-schedule-btn">Generate Schedule</button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody id="schedule-table-body">
            <tr>
              <td>8:00 - 9:30</td>
              <td>MATH101 (Room 201)</td>
              <td>PHYS201 (Lab 3)</td>
              <td>MATH101 (Room 201)</td>
              <td>PHYS201 (Lab 3)</td>
              <td>MATH101 (Room 201)</td>
            </tr>
            <tr>
              <td>9:45 - 11:15</td>
              <td>COMP301 (Lab 5)</td>
              <td>ENGL101 (Room 105)</td>
              <td>COMP301 (Lab 5)</td>
              <td>ENGL101 (Room 105)</td>
              <td>COMP301 (Lab 5)</td>
            </tr>
            <tr>
              <td>11:30 - 1:00</td>
              <td>HIST202 (Room 301)</td>
              <td>CHEM102 (Lab 2)</td>
              <td>HIST202 (Room 301)</td>
              <td>CHEM102 (Lab 2)</td>
              <td>HIST202 (Room 301)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Academic Calendar - October 2023</h2>
        </div>
        <table className="calendar">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody id="calendar-body">
            {renderCalendar()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchedulePage;