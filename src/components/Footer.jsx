import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            // https://stackoverflow.com/questions/41293014/new-date-getfullyear-in-react
            <p>&copy; {(new Date().getFullYear())}, Jace.</p>
        )
    }
}

