import React from 'react';
import FeedbackItem from './FeadbackItem';
import PropTypes from 'prop-types';

const FeedbackList = ({ feedback, handleDelete }) => {
    // checking if feedback exist
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>
    )
};

FeedbackList.prototype = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
};

export default FeedbackList;