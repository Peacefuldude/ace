import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Styles
import styles from './SignUp.module.css'

// Functions
import { FormsValidate } from '../../../../Helpers/Functions/FormsValidate';

const SignUp = () => {

    const [data, setData] = useState({
        phonenumber: "",
        discordid: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(FormsValidate(data, "signup"))
    }, [data])

    const [touched, setTouched] = useState({});
    const focusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: true,
    })
    }
    const unFocusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: false,
        })
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [welcomeMassage, setWelcomeMassage] = useState(false);
    const [isError, setIsError] = useState("");

    const axiosConfic = {
        headers: {
            'Content-Type': 'application/json',
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const SIGN_UP_DATA = data;
            axios.post("https://jsonplaceholder.typicode.com/posts", SIGN_UP_DATA, axiosConfic)
                .then((response)=> {
                    if (response.data.success) {
                        setButtonDisable(true)
                        setWelcomeMassage(true)
                        setTimeout(()=>Navigate("/login"), 3000)
                    }
                })

                .catch((errors)=> {
                    if (errors.response.data.message) {
                        setIsError(errors.response.data.message)
                        setButtonDisable(false)
                    }
                })
                
        } else {
            setTouched({
                phonenumber: true,
                discordid: true,
            })
        }
    }

    return ( 
        <div className={styles.SignUp_container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>حساب کاربری خود را تکمیل کنید.</h1>
                    <div>
                        <p>دیسکورد:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='discordid'
                            placeholder='آی دی دیسکورد خود را وارد کنید'
                            value={data.discordid}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.discordid && touched.discordid) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.discordid}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>تلفن همراه:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='phonenumber'
                            placeholder='شماره تلفن همراه خود را وارد کنید'
                            value={data.phonenumber}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.phonenumber && touched.phonenumber) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.phonenumber}</h6>}
                        </div>
                    </div>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="button" className={styles.signUpButton}><Link to="/login">حساب دارید؟</Link></button>
                        <button type="submit" className={styles.submitButton}>ثبت نام</button>
                    </div>
                    { isError &&
                            <div className={isError ? styles.formdiv_Active : styles.formdiv}>
                                <h6>{isError}</h6>
                            </div>
                        }
                    <div className={styles.formdiv}>
                        {welcomeMassage && <h6>خوش آمدید! منتظر بازنشانی صفحه بمانید</h6>}
                    </div>
            </form>
        </div>
     );
}
 
export default SignUp;