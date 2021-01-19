import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from "./components/Form";
import Meeting from './components/Meeting';

const App = () => {

  // Meetings in localStorage
  let initialMeetings = JSON.parse( localStorage.getItem('meetings') );
  if( !initialMeetings ){
    initialMeetings = [];
  }

  // Create state of the meetings
  const [ meetings, updateMeetings ] = useState( initialMeetings );

  // useEffect for making some actions when state changes
  useEffect( () => {
    if( initialMeetings ){
      localStorage.setItem('meetings', JSON.stringify( meetings ));
    }else{
      localStorage.setItem('meetings', JSON.stringify( [] ));
    }
  }, [ meetings, initialMeetings ] );

  // Function to take current meetings and add a new one
  const createMeeting = meeting => {
    updateMeetings( [...meetings, meeting] );
  }

  // Function to delete a meeting by id
  const handleDelete = id => {
    const newMeetings = meetings.filter( m => m.id !== id );
    updateMeetings( newMeetings );
  }

  return (
    <>
      <h1>Veterinary Clinic Admin</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createMeeting={ createMeeting } />
          </div>
          <div className="one-half column">
            <h2>My meetings</h2>
            {
              meetings.length === 0 
              ? 
                <p className="meeting">Your book is empty.</p>
              : 
                meetings.map( meeting => (
                  <Meeting 
                    key={ meeting.id }
                    meeting={ meeting } 
                    handleDelete={ handleDelete }
                  />
                ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

Form.prototype = {
  createMeeting: PropTypes.func.isRequired
}

export default App;