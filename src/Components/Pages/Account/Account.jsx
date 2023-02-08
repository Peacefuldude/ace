import React from 'react'

// Styles
import styles from './Account.module.css'

// Components
import Myaccount from './Myaccount/Myaccount';

const Account = () => {
    return ( 
        <div className={styles.account_container}>
            <section className={styles.AboutUs}>
                <  Myaccount/>
            </section>
        </div>
     );
}
 
export default Account;