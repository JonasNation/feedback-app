import { useState } from 'react';
import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = ({ handleAdd }) => {
    // prop comes from App

    // state
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    // form validation, input must be greater than 10 characters
    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating,
            }
            handleAdd(newFeedback);
            setText('');
        }
    }

    // function to add reviews
    const handleTextChange = (event) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Must be atleast 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(event.target.value);
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>
                    How would you rate our service?
                </h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type='text' placeholder='Write a review' value={text} onChange={handleTextChange} />
                    <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;
