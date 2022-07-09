import { FaTimes } from 'react-icons/fa'
import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
// state using hooks
// import { useState } from 'react';

const FeedbackItem = ({ item, handleDelete }) => {
    // props coming from FeedbackList

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
