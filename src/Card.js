import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Card({ productData }) {
  let navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/item/${productData.id}`);
  };

  return (
    <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
        <div className="card">
            <div className="image-container" style={{ height: '250px', overflow: 'hidden' }}>
                <img src={`${process.env.PUBLIC_URL}/${productData.image}`} className="card-img-top" alt={productData.title} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{productData.title}</h5>
                <p className="card-text">$price {productData.price}</p>
                <button onClick={handleViewMore} className="btn btn-primary">
                    View More
                </button>
            </div>
        </div>
    </div>
  );
}

export default Card;
