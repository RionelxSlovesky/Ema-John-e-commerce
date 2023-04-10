import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product}) => {

    const {id, img, price, name, quantity} = product;

    return (
        <div className='review-item'>
            <img className='review-img' src={img} alt="" />
            <div className='review-details'>
                <h4>{name}</h4>
                <h4>Price: {price * quantity}</h4>
                <h4>Shipping Charge:</h4>
            </div>
            <button className='review-delete-btn'><FontAwesomeIcon className='review-icon' icon={faTrashAlt} /></button>
            
        </div>
    );
};

export default ReviewItem;