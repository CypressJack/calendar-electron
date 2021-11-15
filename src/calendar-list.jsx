import './style.css';

function CalendarList(props) {

  let eventsList = [];

  for (const singleEvent of props.events) {

    let date = new Date(singleEvent.start.dateTime);
    date = date.toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
    const calendarEvent = (
      <li className="calendar-event">
        <h3 className="event-name">
          {singleEvent.summary}
        </h3>
        <h4 className="event-start">
          Start Time: {date}
        </h4>
        <h4>
          Notification: {singleEvent.notification ? singleEvent.notification.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}) : 'no notification scheduled'}
        </h4>
      </li>
    )
    eventsList.push(calendarEvent);
  }

  return (
    <ul className="calendar-list">
      {eventsList.map((event)=>{return event})}
    </ul>
  );
}

export default CalendarList;