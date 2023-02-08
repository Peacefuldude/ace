import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Question.module.css'

const Question = ({productData}) => {

    return ( 
        <div className={styles.container}>
            <div className={styles.textDiv}>
                <h3>{productData.title}</h3>
                <div className={styles.description}>
                </div>
                <Link to={`/editServices/${productData.id}`}>
                    <button>ویرایش کارت</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Question;