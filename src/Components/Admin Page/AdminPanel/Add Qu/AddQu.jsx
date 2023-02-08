import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

// Functions
import { AddQuVal } from "../../../../Helpers/Functions/AddQuVal";

// Styles
import styles from "./AddQu.module.css";

const AddQu = () => {

    // useEffect(() => {
    //     if (!localStorage.getItem("admin")) {
    //         Navigate("/home");
    //     }
    // }, []);

    const [data, setData] = useState({
        question: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(AddQuVal(data));
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
    const [addMassage, setAddMassage] = useState(false);

    const userToken = JSON.parse(localStorage.getItem('admin'));

    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            "Authorization": "Bearer " + userToken.token,

            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };
    
    const [isError, setIsError] = useState("");
    const [question, setQuestion] = useState([

    ]);
    const Navigate = useNavigate();
    const inputRef = useRef(null);

    const pushQuestionHandler = async (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            setQuestion((prevState)=> [ data.question, ...prevState ])
            inputRef.current.value = "";
            console.log(question);
        } else {
            setTouched({
                question: true,
            });
        }
    }
    
    const submitHandler = async (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const ADD_QUESTION_DATA = question;
            setButtonDisable(true)
            axios
            .post(
                "https://api.vip4care.ir/blog/create",
                ADD_QUESTION_DATA,
                axiosConficPost
                )
                .then((response)=> {
                    if (response.data.success) {
                        alert("مجموعه با موفقیات اضافه شد!")
                        setAddMassage(true)
                        setTimeout(()=>Navigate("/addquestion"), 2000)
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
                    question: true,
                });
            }
            
        };

        return (
        <div>
            <div className={styles.container}>
            <section>
                <p>فهرست</p>
                <button className={styles.section_btn}><Link to="/addquestion">اضافه کردن مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/deletequestion">حذف مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/editquestion">ویرایش مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/users">کاربرها</Link></button>
            </section>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>ایجاد مجموعه سوال</h1>
                    <div>
                        <p>سوال مورد نظر را در فیلد زیر تایپ و سپس عملیات مورد نظر را با استفاده از کلید ها انتخاب کنید.</p>
                    </div>
                    <div>
                        <input
                            ref={inputRef}
                            className={styles.formInput}
                            type="text"
                            name="question"
                            placeholder="سوال جدید را وارد کنید"
                            value={data.question}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
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
                    <div
                        className={
                            buttonDisable
                                ? styles.formButtonsDisabled
                                : styles.formButtons
                        }
                    >
                        <button type="button" className={styles.submitButton} onClick={pushQuestionHandler}>
                            اضافه کردن سوال به مجموعه
                        </button>
                        <button type="button" className={styles.finishButton} onClick={submitHandler}>اتمام این مجموعه</button>
                    </div>
                    { addMassage &&
                        <div className={addMassage ? styles.formdiv_Active : styles.formdiv}>
                            <h6>{addMassage}</h6>
                        </div>
                    }
                    { isError &&
                        <div className={isError ? styles.formdiv_Active : styles.formdiv}>
                            <h6>{isError}</h6>
                        </div>
                    }
                </form>
                <div className={styles.showQu}>
                {
                    question?.map((service, index) => <p key={index}>سوال: {service}</p>)
                }
                </div>
            </div>
        </div>
    );
};

export default AddQu;
