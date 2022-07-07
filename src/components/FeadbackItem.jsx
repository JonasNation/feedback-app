import { FaTimes } from 'react-icons/fa'
import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
// state using hooks
// import { useState } from 'react';

const FeedbackItem = ({ item, handleDelete }) => {
    /* setting state - 
    in brackets destructing the useState function [name of state, function to update state]
    , default value in useState parentisis */
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an example of a feedback item');



    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}><FaTimes color='purple' /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
};

FeedbackItem.prototype = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
