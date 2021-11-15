import './style.css';
import CalendarList from './calendar-list';
import React, { useState, useEffect } from "react";
const { ipcRenderer } = window.require('electron');

function App() {
  const [eventState, setEventState] = useState([]);
  useEffect(() => {
    ipcRenderer.send('data', 'i want data');
    setInterval(() => {
      ipcRenderer.send('data', 'i want data');
    }, 600000)
    ipcRenderer.on('data-reply', (event, arg) => {
      setEventState(arg);
      console.log('reply', arg);
    });
  }, []);
  return (
    <div className="app">
      <h1>Upcoming Events</h1>
      <CalendarList events={eventState}/>
    </div>
  );
}

export default App;
