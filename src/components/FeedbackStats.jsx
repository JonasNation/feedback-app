import React from 'react';
import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {

    // calculate ratings average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0) / feedback.length;

    // fixes the average value to one decimal
    average = average.toFixed(1).replace(/[.,]=$/, '');

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.prototypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats;
