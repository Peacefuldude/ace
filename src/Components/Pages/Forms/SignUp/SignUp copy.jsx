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
        name: "",
        lastname: "",
        phonenumber: "",
        discordid: "",
        steamid: "",
        password: "",
        confirmPassword: ""
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
                name: true,
                lastname: true,
                phonenumber: true,
                discordid: true,
                steamid: true,
                password: true,
                confirmPassword: true
            })
        }
    }

    return ( 
        <div className={styles.SignUp_container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>حساب کاربری خود را بسازید</h1>
                    <div>
                        <p>نام:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='name'
                            placeholder='نام خود را وارد کنید'
                            value={data.name}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.name && touched.name) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.name}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>نام خانوادگی:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='lastname'
                            placeholder='نام خانوادگی خود را وارد کنید'
                            value={data.lastname}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.lastname && touched.lastname) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.lastname}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>دیسکورد:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='discordid'
                            placeholder='آید دی دیسکورد خود را وارد کنید'
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
                        <p>استیم:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='steamid'
                            placeholder='آید دی استیم خود را وارد کنید'
                            value={data.steamid}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.steamid && touched.steamid) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.steamid}</h6>}
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
                    <div>
                        <p>رمز عبور:</p>
                        <input 
                            className={styles.formInput}
                            type='password'
                            name='password'
                            placeholder='رمز عبور خود را وارد کنید'
                            value={data.password}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={(errors.password && touched.password) ? styles.formdiv_Active : styles.formdiv}>
                            {<h6>{errors.password}</h6>}
                        </div>
                    </div>
                    <div>
                        <p>تکرار رمز عبور:</p>
                        <input
                            className={styles.formInput}
                            type="password"
                            name="confirmPassword"
                            placeholder='رمز عبور خود را دوباره وارد کنید'
                            value={data.confirmPassword}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        <div className={styles.formdiv}>
                            {errors.confirmPassword && touched.confirmPassword && <h6>{errors.confirmPassword}</h6>}
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