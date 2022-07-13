import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react';
import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
    // props coming from FeedbackList

    // context
    const { deleteFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => deleteFeedback(item.id)}><FaTimes color='purple' /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
};

FeedbackItem.prototypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
