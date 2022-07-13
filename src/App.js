/* creates a route to another page */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

// main app component using JSX(Javascript XML) allows me to write html in my components
const App = function () {
    return (
        // must always have one parent element or will return an error
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container app__container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
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