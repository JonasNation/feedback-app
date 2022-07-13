import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    // state
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is feedback item one',
            rating: 10,
        },
        {
            id: 2,
            text: 'This item is feedback item two',
            rating: 10,
        },
        {
            id: 3,
            text: 'This item is feedback item three',
            rating: 10,
        }
    ])

    // adds uniqe id to new feedback and  displays new feedback with feedback from data file 
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    // function to delete a feedback item, also alerts before delete event
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {

            // filters the item that will be deleted
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
            }}
        >

            {children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext;