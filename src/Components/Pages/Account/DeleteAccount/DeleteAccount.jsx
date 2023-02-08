import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

// Styles
import styles from './DeleteAccount.module.css'

const DeleteAccount = () => {

    // const userToken = JSON.parse(localStorage.getItem('user'));

    // const axiosConficPost = {
    //     headers: {
    //         "Dev": "vip4c@reDevelop3r",
    //         "Authorization": "Bearer " + userToken.token,

    //         // "Access-Control-Allow-Origin": "*",
    //         // "Access-Control-Allow-Headers":"*",
    //         // "Access-Control-Allow-Methods":"*"
    //     },
    // };

    // const [userProfile, setUserProfile] = useState([]);

    // const Navigate = useNavigate();

    // const deleteHandler = (event) => {
    //     event.preventDefault();
    // const LOGOUT_DATA = true;
    //     axios.post(`https://api.vip4care.ir/blog`, LOGOUT_DATA, axiosConficPost)
    //         // Uncomment to see the full response log
    //         .then((response) => {
    //             console.log(response)
    //             localStorage.clear("user");
    //             setTimeout(() => Navigate("/home"), 3000)
    //         })
    //         .catch((errors)=> console.log(errors))
    //         // Uncomment to findout that its working!
    // }

    // The Main tag which is cummented is not available in this version of the web page.
    // what it does is that it will make a MAP on the Services that the user made and whow all pf them.

    return (
        <div>
            <div className={styles.container}>
                <section>
                    <h1>خروج از حساب کاربری؟</h1>
                    <button className={styles.section_btn}><Link className={styles.sss}>می خواهم از حساب خود خارج شوم</Link></button>
                    <button className={styles.logout_btn}><Link to="/account" >برگشت به صفحه من</Link></button>
                </section>
                {/* <main>
                    <h2>لیست تمامی خدمات دریافتی شما تا به اینجا</h2>
                    {
                        Services?.map(service => <  Service key={service.id} productData={service} />)
                    }
                </main> */}
            </div>
        </div>
     );
}
 
export default DeleteAccount;