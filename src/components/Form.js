import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ createMeeting }) => {

    // Create state of the meeting
    const [ meeting, updateMeeting ] = useState({
        petname: '',
        petowner: '',
        petdate: '',
        pettime: '',
        petsintoms: ''
    });

    // Create state of errors
    const [ error, updateError ] = useState( false );

    // Every time user write in an input, we call this function
    const handleChange = e => {
        updateMeeting({
            ...meeting,
            [e.target.name]: e.target.value
        })
    }

    // Extracting values
    const { petname, petowner, petdate, pettime, petsintoms } = meeting;

    // User press send form
    const handleSubmitForm = e => {
        e.preventDefault();
        
        // Validating
        if( petname.trim() === '' || petowner.trim() === '' || petdate.trim() === '' || pettime.trim() === '' || petsintoms.trim() === '' ){
            updateError( true );
            return;
        }

        // Refresh the error message
        updateError( false );

        // Assign an ID
        meeting.id = uuidv4();

        // Create the meeting
        createMeeting( meeting );

        // Reset form
        updateMeeting({
            petname: '',
            petowner: '',
            petdate: '',
            pettime: '',
            petsintoms: ''            
        });
    }

    return (
        <>
            <h2>Schedule date</h2>
            {
                error ? <p className="alert-error">All fields are required.</p> : null 
            }
            <form 
                onSubmit={ handleSubmitForm }
            >
                <label>Pet name</label>
                <input 
                    type="text" 
                    name="petname"
                    className="u-full-width"
                    placeholder="Pet name"
                    onChange={ handleChange }
                    value={ petname }
                />
                <label>Pet owner name</label>
                <input 
                    type="text"
                    name="petowner"
                    className="u-full-width"
                    placeholder="First name of the owner"
                    onChange={ handleChange }
                    value={ petowner }
                />
                <label>Date</label>
                <input 
                    type="date"
                    name="petdate"
                    className="u-full-width"
                    onChange={ handleChange }
                    value={ petdate }
                />
                <label>Hour</label>
                <input 
                    type="time"
                    name="pettime"
                    className="u-full-width"
                    onChange={ handleChange }
                    value={ pettime }
                />                                
                <label>Sintoms</label>
                <textarea
                    className="u-full-width"
                    name="petsintoms"
                    onChange={ handleChange }
                    value={ petsintoms }
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Schedule
                </button>
            </form>
        </>
    );
}
 
export default Form;