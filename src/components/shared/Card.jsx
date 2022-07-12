import React from 'react';
import PropTypes from 'prop-types';

// card is  a style component
const Card = ({ children, reverse }) => {

    return (
        // conditional class
        /*<div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>*/

        // conditional style
        <div className='card' style={{
            backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : 'white',
            color: reverse ? 'white' : 'black'
        }}>
            {children}

        </div>
    )
};

Card.defaultProps = {
    reverse: false,
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
};

export default Card;
