import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from "@ramonak/react-progress-bar";

// Styles
import styles from './Myaccount.module.css'

// Images
import image from '../../../../Helpers/Images/empty-folder.png'
import discord from '../../../../Helpers/Images/discord.png'
import steam from '../../../../Helpers/Images/steam.png'

// Functions
import { AddAnVal } from '../../../../Helpers/Functions/AddAnVal';

const Myaccount = () => {

    const Navigate = useNavigate();

    // useEffect(() => {
    //     if (!localStorage.getItem("aceuser")) {
    //         Navigate("/login");
    //     }
    // }, []);

    const [data, setData] = useState({
        answer: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(AddAnVal(data));
    }, [data]);

    const [touched, setTouched] = useState({});
    const focusHandler = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        });
    };
    const unFocusHandler = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: false,
        });
    };

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

    // useEffect(() => {
    //     const getUser = async () => {
    //         axios.get("https://api.vip4care.ir/user/profile", axiosConficPost)
    //             .then((response)=> setUserProfile(response.data.user))
    //             // .catch((error)=> console.log(error))
    //     };

    //     getUser();

    // }, []);

    // Only for test. nodt forget to add aaxios response and replace the "mydata" with it.
    // const [mydata, setMydata] = useState()
    const [mydata, setMydata] = useState([
        "نام کارکتر شما چه باشد؟",
        "چه لباسی می پوشد؟ سیگار هم میکشد؟",
        "زن است یا مرد؟"
    ])

    return ( 
        <div className={styles.Myaccount_container}>
            <div></div>
            <div className={styles.main_div}>
                <main>
                    {
                        mydata &&
                        <section className={styles.questions_section}>
                            <h2>به سوالات زیر پاسخ دهید!</h2>
                            <div className={styles.questions_div}>
                                {
                                    mydata?.map((questions, index) =>
                                    <div key={index}>
                                        <p>سوال: {questions}</p>
                                        <input
                                            className={styles.formInput}
                                            type="text"
                                            name="answer"
                                            placeholder="پاسخ خود را وارد کنید"
                                            value={data.question}
                                            onChange={changeHandler}
                                            onFocus={focusHandler}
                                            onBlur={unFocusHandler}
                                        />
                                    </div>)
                                }
                                <button type="button" className={styles.finishButton}>ثبت پاسخ ها</button>
                                <div
                                    className={
                                        errors.title && touched.title
                                        ? styles.formdiv_Active
                                        : styles.formdiv
                                    }
                                >
                                    {<h6>{errors.title}</h6>}
                                </div>
                            </div>
                        </section>
                    }
                    <section className={styles.profile_section}>
                        <div className={styles.profile_pic}>
                            <img src={image} alt="profile" />
                        </div>
                        <h3>نیکولای ولاهووویچ</h3>
                        <h4>نه من اهل نیوجرسی هستم، همونجایی که مرداش شام درست میکنن</h4>
                        <div className={styles.apps_icons}>
                            <img src={discord} alt="" />
                            <img src={steam} alt="" />
                        </div>
                    </section>
                    <section className={styles.membership_section}>
                        <div>
                            <h3>اعتبار حساب( به روز )</h3>
                            <ProgressBar className={styles.ProgressBar} completed="60" />
                        </div>
                        <div className={styles.membership_div}>
                            <h3>شارژ حساب</h3>
                            <div className={styles.membership_div_btn}>
                                <Link to="/">
                                    <button className={styles.silver_btn}>SILVER</button>
                                </Link>
                                <Link to="/">
                                    <button className={styles.gold_btn}>GOLD</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section className={styles.footer_section}>
                        <div>
                            <Link to="/editaccount">
                                <button className={styles.edit_btn}>ویرایش اطلاعات</button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/home">
                                <button className={styles.home_btn}>به خانه بازگردید</button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/logout">
                                <button className={styles.logout_btn}>از حساب خود خارج شوید</button>
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
            <div></div>
        </div>
     );
}
 
export default Myaccount;