// main app component using JSX(Javascript XML) allows me to write html in my components
const App = function () {
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
    return (
        // must always have one parent element or will return an error
        <div className="container">
            <h1>My App</h1>
        </div>
    )
};

export default App;