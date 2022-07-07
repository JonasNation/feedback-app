import { useState } from 'react';
import React from 'react';
import Card from './shared/Card';

const FeedbackForm = () => {
    // state
    const [text, setText] = useState('');
    // function to add reviews
    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    return (
        <Card>
            <form>
                <h2>
                    How would you rate our service?
                </h2>
                {/* @todo - rating select components */}
                <div className="input-group">
                    <input type='text' placeholder='Write a review' value={text} onChange={handleTextChange} />
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm;
