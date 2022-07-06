import React from 'react';
import PropTypes from 'prop-types';

// component shortcut rfce creates function with export

function Header({ text }) {

    return (
        <header>
            <div className="container header__container">
                <h2 className='header__title'>{text}</h2>
            </div>
        </header>
    )
};

Header.defaultProps = {
    text: 'Feedback UI',
};

Header.propTypes = {
    text: PropTypes.string,
};

export default Header;

// set default props Header.defaultProps = {text: 'Feedback UI} goes above export
// set prop types which is imported and it checks the type of your props (string, number, boolean etc) use shorthand impt and it will be imported then above export Header.propTypes = {text: PropTypes.string} will get error if anything other than a string is used