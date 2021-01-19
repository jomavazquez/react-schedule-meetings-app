import React from 'react';
import PropTypes from 'prop-types';

const Meeting = ({ meeting, handleDelete }) => (
    <div className="meeting">
        <p>Pet: <span>{ meeting.petname }</span></p>
        <p>Owner: <span>{ meeting.petowner }</span></p>
        <p>Date: <span>{ meeting.petdate }</span></p>
        <p>Time: <span>{ meeting.pettime }</span></p>
        <p>Sintoms: <span>{ meeting.petsintoms }</span></p>
        <button
            className="button delete u-full-width"
            onClick={ () => handleDelete( meeting.id ) }
        >
            Delete
        </button>
    </div>
);

Meeting.propTypes = {
    meeting: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
}
 
export default Meeting;