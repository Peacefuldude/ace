import React from 'react'

// Styles
import styles from './Home.module.css'

// Components
import Header from '../../Header/Header';
import Main from './Main/Main';

const Home = () => {
    return ( 
        <div className={styles.container}>
            <section className={styles.Header}>
                <  Header/>
            </section>
            <section className={styles.AboutUs}>
                <  Main/>
            </section>
        </div>
     );
}
 
export default Home;