import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Functions
import { AddQuVal } from "../../../../../Helpers/Functions/AddQuVal";

// Styles
import styles from "./EditDetails.module.css";

const EditDetails = () => {

    // Reciving details and preparing it. 
    const { id } = useParams();

    // Handlers and States related to the inputs
    const [data, setData] = useState({
        title: "",
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

    const [description, setDescription] = useState({
        description: "",
    });
    
    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [EditMassage, setEditMassage] = useState(false);

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
    
    const [status, setStatus] = useState("")
    const [errorMassage, setErrorMassage] = useState(false);
    const [isError, setIsError] = useState("")
    
    const submitHandler = async (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const EDIT_SERVICE_DATA = {
                title: data.title,
                description: description
            };
            const sotoanm =await axios.get("https://api.vip4care.ir/addService/getServices")
            .then((response) => {
                
                const lastElement = response.data.services.length
                const lastElemntId = response.data.services[lastElement -1]._id
                return  lastElemntId
            })
            axios
            .put(
                `https://api.vip4care.ir/addService/edit${sotoanm}`,
                EDIT_SERVICE_DATA,
                axiosConficPost
                )
                // Uncomment to see the full response log
                .then((response) => console.log(response))
                .then(setButtonDisable(true))
                .then(setEditMassage(true))
                .then(alert("بلاگ اضافه شد!"))
                .catch((errors)=> console.log(errors))
            
            } else {
                setErrorMassage(true);
                setTouched({
                    title: true,
                });
            }
            
        };
        
    return (
        <div className={styles.container}>
            {data.length !== 0 && (
                <div className={styles.container}>
            <section>
                <p>فهرست</p>
                <button className={styles.section_btn}><Link to="/addquestion">اضافه کردن مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/deletequestion">حذف مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/editquestion">ویرایش مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/users">کاربرها</Link></button>
            </section>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h1>مشخصات کارت جدید را وارد کنید</h1>
                    <div>
                        <p>سرتیتر:</p>
                        <input
                            className={styles.formInput}
                            type="text"
                            name="title"
                            placeholder="سرتیتر کارت را وارد کنید"
                            value={data.title}
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
                        <button type="submit" className={styles.submitButton}>
                            تایید سوالات
                        </button>
                    </div>
                    <div className={styles.formdiv}>
                        {EditMassage && <h6>کارت جدید با موفقیت ایجاد شد</h6>}
                    </div>
                    <div className={styles.formdiv_Active}>
                        {isError && <h6>{isError}</h6>}
                    </div>
                </form>
                </div>
            )}
        </div>
    );
};

export default EditDetails;
