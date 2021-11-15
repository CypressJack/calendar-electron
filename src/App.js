import './style.css';
import CalendarList from './calendar-list';

const events = [
  {
    summary: "Dev huddle",
    start: {
      dateTime: '2021-11-22T13:30:00-08:00',
      timeZone: 'America/Vancouver'
    },
    creator: { email: 'kaelan@stikkymedia.com' },
    description: "Join via: <a href='https://uberconference.com/stikkyops'>https://uberconference.com/stikkyops</a><br>&nbsp;<br>For the Devs, this is a short round-robin of:&nbsp;<ul><li>Your <b>#1</b> weekly priority</li><li>Status report on last week's #1 priority</li><li>Secondary weekly priorities</li><li>Your chance to bring up issues, requests for help, etc.</li></ul><b>For non-devs</b>: sit in and listen, ask questions, bring up issues, etc."
  },
  {
    summary: "Dev Group Training/Troubleshooting",
    start: {
      dateTime: '2021-11-25T13:30:00-08:00',
      timeZone: 'America/Vancouver'
    },
    creator: { email: 'kaelan@stikkymedia.com' },
    description: "Join via: <a href='https://uberconference.com/stikkyops'>https://uberconference.com/stikkyops</a><br>&nbsp;<br>For the Devs, this is a short round-robin of:&nbsp;<ul><li>Your <b>#1</b> weekly priority</li><li>Status report on last week's #1 priority</li><li>Secondary weekly priorities</li><li>Your chance to bring up issues, requests for help, etc.</li></ul><b>For non-devs</b>: sit in and listen, ask questions, bring up issues, etc."
  }
]



function App() {
  return (
    <div className="app">
      <h1>Today's events</h1>
      <CalendarList events={events}/>
    </div>
  );
}

export default App;
