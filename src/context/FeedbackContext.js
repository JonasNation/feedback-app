import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    // state
    const [feedback, setFeedback] = useState([])

    // loading flag for feedback items
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchFeedback()
    }, [])

    // fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
        const data = await response.json()
        setFeedback(data);
        setIsLoading(false)
    }

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

    // function to set feedback item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // function to update feedback item
    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedItem } : item))
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                isLoading,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >

            {children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext;