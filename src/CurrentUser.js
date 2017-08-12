import React, { PropTypes } from 'react';
import { auth } from './firebase';

const CurrentUser = ({ user }) => {
    return (
        <div>
            { user.displayName } <br/>
            <button onClick={ () => auth.signOut() }>
                Sign Out
            </button>
        </div>
    );
}

CurrentUser.propTypes = {
    user: PropTypes.shape({
        displayName: PropTypes.string,
        email: PropTypes.string.isRequired,
        photoURL: PropTypes.string,
        uid: PropTypes.string.isRequired
    })
}

export default CurrentUser;