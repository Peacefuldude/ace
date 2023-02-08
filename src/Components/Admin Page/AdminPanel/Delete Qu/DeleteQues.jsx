import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Questions from './Delete Questions/DeleteQu'

// Styles
import styles from "./DeleteQues.module.css";

const DeleteQues = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("admin")) {
            Navigate("/home");
        }
    }, []);

    const [DeleteQuestions, setDeleteQuestions] = useState([
        "ssss",
        "sssssssss"
    ]);

    // useEffect(() => {
    //     const getQuestions = async () => {

    //         const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA"
    //         await axios.get("https://api.vip4care.ir/blog/get", {
    //             "Content-Type": "application/json",
    //             "Dev": "vip4c@reDevelop3r",
    //             "Authorization": "Bearer " + jwtToken,
    //             // "Access-Control-Allow-Origin": "*",
    //             // "Access-Control-Allow-Headers":"*",
    //             // "Access-Control-Allow-Methods":"*"
    //         })
    //             .then((response) => setDeleteQuestions(response.data.blogs))
    //             // .then((response)=> console.log(response.data.blogs))
    //     };
        
    //     getQuestions();
    // }, []);

    return (
        <div className={styles.container}>
            <section>
                <p>فهرست</p>
                <button className={styles.section_btn}><Link to="/addquestion">اضافه کردن مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/deletequestion">حذف مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/editquestion">ویرایش مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/users">کاربرها</Link></button>
            </section>
            <main>
                {DeleteQuestions?.map((service, index) => (
                    <Questions key={index} productData={service} />
                ))}
            </main>
        </div>
    );
};

export default DeleteQues;
