import React, { PropTypes } from 'react';
import { auth } from './firebase';

cosnt CurrentUser = ({ user }) => {
    return (
        <div></div>
    );
}

CurrentUser.propTypes = {
    user: PropTypes.shape({
        displayName: PropTypes.string,
        email: PropTypes.string.isRequired,
        photoURL: propTypes.string.isRequired
    })
}

export default CurrentUser;