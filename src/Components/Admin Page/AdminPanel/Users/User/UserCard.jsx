import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './UserCard.module.css'

const BlogCard = ({productData}) => {

    return ( 
        <div className={styles.container}>
            <h3>{productData.username}</h3>
            <p>{productData.email}</p>
            <button className={styles.userdiv_btn}>
                <Link to={`/usersdetails/${productData._id}`}>دیدن جزئیات</Link>
            </button>
        </div>
     );
}
 
export default BlogCard;