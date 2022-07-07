import React from 'react';
import FeedbackItem from './FeadbackItem';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackList = ({ feedback, handleDelete }) => {
    // checking if feedback exist
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }
    return (
        // without animation
        /*<div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>*/


        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div key={item.id} initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
                    </motion.div>
                ))}
            </AnimatePresence>
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