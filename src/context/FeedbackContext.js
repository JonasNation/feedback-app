import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    // state
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is feedback item one',
            rating: 3,
        },
        {
            id: 2,
            text: 'This item is feedback item two',
            rating: 10,
        },
        {
            id: 3,
            text: 'This item is feedback item three',
            rating: 7,
        }
    ])

    // state to edit feedback
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // adds uniqe id to new feedback and  displays new feedback with feedback from contex via data component 
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

    // function to edit/update feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
            }}
        >

            {children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext;