import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Functions
import { FormsValidate } from '../../../../Helpers/Functions/FormsValidate';

// Styles
import styles from "./Login.module.css";

const Login = () => {
    
    const [data, setData] = useState({
        phonenumber: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(FormsValidate(data, "login"));
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

    const [buttonDisable, setButtonDisable] = useState(false);
    const [massage, setMassage] = useState(false);
    const [code, setCode] = useState();
    const Navigate = useNavigate();
    const [isError_1, setIsError_1] = useState("")

    const axiosConfic = {
        headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const LOGIN_DATA = data;
            setButtonDisable(true)
            axios
                .post("https://vip4care.ir", LOGIN_DATA, axiosConfic)
                .then((response)=> {
                    if (response.data.success) {
                        setMassage(true)
                        setTimeout(()=>Navigate("/home"), 2000)
                    }
                })

                .catch((errors)=> {
                    if (errors.response.data.message) {
                        setIsError_1(errors.response.data.message)
                        setButtonDisable(false)
                    }
                })
        } else {
            setTouched({
                phonenumber: true,
            });
        }
    };

    // Code input functions
    // THese two will not be checked by the formsValidate functions.
    const [codeData, setCodeData] = useState({
        phonenumber: "",
        code: "",
    });

    const codeChangeHandler = (event) => {
        setCodeData({
            ...codeData,
            [event.target.name]: event.target.value,
        });
    };

    const [codeMassage, setCodeMassage] = useState(true);
    const [codeMassageTrue, setCodeMassageTrue] = useState(false);
    const [codeMassageFalse, setCodeMassageFlase] = useState(false);

    const codeCheckHandler = (event) => {
        event.preventDefault();
        if (
            code.data.data.results.randomNum.toString() ===
            codeData.code.toString()
        ) {
            setCodeMassageTrue(true);
            setCodeMassage(false);
        } else {
            setCodeMassageFlase(true);
            setCodeMassage(true);
        }

        const NEW_LOGIN_DATA = codeData
        .then(setButtonDisable(true))
            axios
                .post("https://vip4care.ir", NEW_LOGIN_DATA, axiosConfic)
                .then((response)=> {
                    if (response.data.success) {
                        setCode(response)
                        setMassage(true)
                        localStorage.setItem('aceuser', JSON.stringify(response.data))
                        setTimeout(()=>Navigate("/home"), 2000)
                    }
                })

                .catch((errors)=> {
                    if (errors.response.data.message) {
                        setButtonDisable(false)
                    }
                })
    };

    // Uncomment and change the "code" condition to "isTrue" to see the results offline.
    // const isTrue = true;

    return (
        <div>
            <div className={styles.Login_container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>به حساب خود وارد شوید</h1>
                    <div>
                        <p>شماره تلفن شما:</p>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="phoneNumber"
                            placeholder="شماره تلفن خود را وارد کنید"
                            value={data.phoneNumber}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div
                            className={
                                errors.phoneNumber && touched.phoneNumber
                                    ? styles.formdiv_Active
                                    : styles.formdiv
                            }
                        >
                            {<h6>{errors.phoneNumber}</h6>}
                        </div>
                    </div>
                    <div className={buttonDisable && styles.submitButton}>
                        <button type="submit" className={styles.button}>
                            ورود
                        </button>
                    </div>
                    <div className={styles.submitdiv}>
                        {massage && (
                            <h6>
                                در صورت وارد کردن درست اطلاعات خود، کد بازیابی
                                ای به شما ارسال می شود، کد مورد نظر را در فیلد
                                زیر وارد کنید.
                            </h6>
                        )}
                        { isError_1 &&
                            <div className={isError_1 ? styles.formdiv_Active : styles.formdiv}>
                                <h6>{isError_1}</h6>
                            </div>
                        }
                    </div>
                </form>
                {code && (
                    <div className={styles.formContainer}>
                        <h1>کد ارسال شده را به همراه شماره تلفن خود وارد کنید</h1>
                        <div>
                            <input
                                className={styles.formInput}
                                type="text"
                                name="phonenumber"
                                placeholder="شماره تلفن شما"
                                value={codeData.phonenumber}
                                onChange={codeChangeHandler}
                            />
                        </div>
                        <div>
                            <input
                                className={styles.formInput}
                                type="text"
                                name="code"
                                placeholder="Code"
                                value={codeData.code}
                                onChange={codeChangeHandler}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                onClick={codeCheckHandler}
                                className={
                                    codeMassage
                                        ? styles.codeCheck
                                        : styles.codeCheckfalse
                                }
                            >
                                تایید کد
                            </button>
                        </div>
                        <div
                            className={
                                codeMassageTrue || codeMassageFalse
                                    ? styles.checkdiv_Active
                                    : styles.checkdiv
                            }
                        >
                            {
                                <h6
                                    className={
                                        codeMassageTrue
                                            ? styles.checkdivtrue_Active
                                            : styles.checkdivtrue
                                    }
                                >
                                    اهراز هویت شما با موفقیت به پایان رسید.
                                </h6>
                            }
                            {
                                <h6
                                    className={
                                        codeMassageFalse
                                            ? styles.checkdivfalse_Active
                                            : styles.checkdivfalse
                                    }
                                >
                                    متاسفانه کد وارد شده صحبح نمی باشد، دوباره تلاش کنید.
                                </h6>
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;