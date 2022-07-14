import React from 'react';
import { useContext } from 'react';
import FeedbackItem from './FeadbackItem';
import Spinner from './shared/Spinner';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
    //context
    const { feedback, isLoading } = useContext(FeedbackContext)

    // checking if feedback exist
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>
    }

    return isLoading ? (<Spinner />) : (
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
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
};

export default FeedbackList;