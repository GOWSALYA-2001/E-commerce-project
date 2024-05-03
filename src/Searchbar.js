import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = ({ username }) => {
    return (
        <div className="bg-light p-2 shadow-sm d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <img src="./images/a1.webp" alt="Logo" className="rounded-circle me-3" style={{ width: '70px' }} />
                <h1 className="fs-4 fw-normal" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '32px', color: '#333' }}>STYLIGHT</h1>
            </div>

            <div className="d-flex align-items-center" style={{ width: '350px' }}>
                <FaSearch className="text-primary" />
                <input className="form-control ms-2" placeholder='Search Product' style={{ border: 'none', boxShadow: 'none' }} />
            </div>

            <div className="d-flex align-items-center">
                <Link to="/cart" className="me-3">
                    <img src="./images/c1.png" alt="Shopping Cart" className="img-fluid" style={{ width: '35px', cursor: 'pointer' }} />
                </Link>
                <Link to="/liked-items" className="me-3">
                    <img src="./images/c2.png" alt="heart" className="img-fluid" style={{ width: '35px' }} />
                </Link>
                <Link to="/profile" className="me-3">
                    <img src="./images/d1.png" alt="user-profile" className="img-fluid" style={{ width: '35px', cursor: 'pointer' }} />
                </Link>
                {username && (
                    <p className="me-3">Welcome {username}</p>
                )}
            </div>
        </div>
    );
};

export default SearchBar;