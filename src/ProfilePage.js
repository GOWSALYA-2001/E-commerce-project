import React, { useState } from 'react';

const ProfilePage = ({ setUsername }) => {
    const [username, setUsernameLocal] = useState('');
    const [displayedUsername, setDisplayedUsername] = useState('');

    const handleUsernameChange = (event) => {
        setUsernameLocal(event.target.value);
    };

    const handleUsernameSubmit = () => {
        setDisplayedUsername(username);
        setUsername(username); // Call the setUsername function passed from the parent component
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Profile</h1>
            <div style={styles.profile} onClick={handleUsernameSubmit}>
                <img src="./images/d1.png" alt="user-profile" className="img-fluid ms-4 me-5" style={{ width: '35px', cursor: 'pointer' }} />
                <p>{displayedUsername ? displayedUsername : 'Click to set username'}</p>
            </div>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                style={styles.input}
            />
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
        textAlign: 'center',
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        cursor: 'pointer',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        marginBottom: '20px',
    },
};

export default ProfilePage;
