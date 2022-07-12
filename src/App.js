import { v4 as uuidv4 } from 'uuid';
/* creates a route to another page */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './components/Data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

// main app component using JSX(Javascript XML) allows me to write html in my components
const App = function () {
    // app level state - feedback will be passed to components
    const [feedback, setFeedback] = useState(FeedbackData);

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
        // must always have one parent element or will return an error
        <Router>
            <Header />
            <div className="container app__container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    )
};

export default App;

/*
    // variables used for main component must be wrapped in curly brace----
    const title = 'My react app';
    const body = 'This will be cool';
 
    // create a list must use a key attribute key={index}---
    const comments = [
        { id: 1, text: 'Comment one' },
        { id: 2, text: 'Comment two' },
        { id: 3, text: 'Comment three' },
    ];

    // conditionals------
    const loading = true;
    if(loading) return <h1>Loading...>/h1>;

    const showComments = false;
 
    // goes into the app return---
    <div className="container">
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>

        {showComments &&  
            <div className="comments">
                <h3>
                    Comments ({comments.length})
                </h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        }
 
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    </div>
    )
*/