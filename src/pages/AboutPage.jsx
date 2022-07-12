import React from 'react';
import Card from '../components/shared/Card';

function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>My Feedback App</h1>
                <p>Wanted to learn how to make a feedback app for a comment system or some type of provided service.</p>
                <p>Also use the router for different pages</p>

                <p><a href="/">Back home</a></p>
            </div>
        </Card>
    )
}

export default AboutPage;
