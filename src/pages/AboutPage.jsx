import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';


function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>My Feedback App</h1>
                <p>Wanted to learn how to make a feedback app for a comment system or some type of provided service.</p>
                <p>Also use the router the two pages</p>

                <p><Link to='/'>Back home</Link></p>
            </div>
        </Card>
    )
}

export default AboutPage;
