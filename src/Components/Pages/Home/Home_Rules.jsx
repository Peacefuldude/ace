import React from 'react'

// Styles
import styles from './Home.module.css'

// Components
import Header from '../../Header/Header';
import Rules from './Rules/Rules';

const Home_Rules = () => {
    return ( 
        <div className={styles.container}>
            <section className={styles.Header}>
                <  Header/>
            </section>
            <section className={styles.AboutUs}>
                <  Rules/>
            </section>
        </div>
     );
}
 
export default Home_Rules;