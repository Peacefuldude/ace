import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Styles
import styles from './AdminVerfi.module.css'

const AdminVerfi = () => {

    const [data, setData] = useState({
        name: "",
        password: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [welcomeMassage, setWelcomeMassage] = useState(false);
    const [errorMassage, setErrorMassage] = useState(false);

    const axiosConfic = {
        headers: {
            'Content-Type': 'application/json',
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        }
    }

    const adminConfic = {
        name: "admin",
        password: "12345678"
    }

    const [isError, setIsError] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        if (data.name === adminConfic.name && data.password === adminConfic.password) {
            const ADMIN_LOGIN_DATA = data;
            // Uncomment the line below to see if the admin login is working or not.
            // localStorage.setItem('admin', JSON.stringify("response.data"))
            axios.post("https://jsonplaceholder.typicode.com/posts", ADMIN_LOGIN_DATA, axiosConfic)
                .then(response => localStorage.setItem('admin', JSON.stringify(response.data)))
                .then(setButtonDisable(true))
                .then(setWelcomeMassage(true))
                .then(setErrorMassage(false))
                .then(setTimeout(()=>Navigate("/adminpage"), 2000))
                .catch(error => setIsError(error.message))
        } else {
            setErrorMassage(true);
        }
    }

    return ( 
        <div>
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>نام و رمز عبور خود را وارد کنید</h1>
                    <div>
                        <p>نام:</p>
                        <input
                            className={styles.formInput}
                            type='text'
                            name='name'
                            placeholder='نام خود را وارد کنید'
                            value={data.name}
                            onChange={changeHandler}
                        />
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
                        />
                    </div>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="submit" className={styles.submitButton}>ورود</button>
                    </div>
                    <div className={styles.formdiv_Active}>
                        {welcomeMassage && <h6>خوش آمدید! منتظر بازنشانی صفحه بمانید</h6>}
                    </div>
                    <div className={styles.formdiv_Active}>
                        {errorMassage && <h6>نام یا رمز عبور شما نامعتبر است.</h6>}
                    </div>
                    <div className={styles.formdiv_Active}>
                        {isError && <h6>{isError}</h6>}
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default AdminVerfi;