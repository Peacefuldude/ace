import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import styles from './SteamSignUp.module.css'

const SteamSignUp = () => {
    return ( 
        <div className={styles.SteamSignUp_container}>
            <Link to="/signup">
                <button className={styles.return_btn}>بازگشت به سایت و ادامه فرایند ثبت نام</button>
            </Link>
        </div>
     );
}
 
export default SteamSignUp;