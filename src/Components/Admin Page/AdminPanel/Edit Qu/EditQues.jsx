import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Question from "./Question/Question";

// Styles
import styles from "./EditQues.module.css";

const EditQues = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("admin")) {
            Navigate("/home");
        }
    }, []);

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {

            const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA"
            const response = await axios.get("https://api.vip4care.ir/addService/getServices", {
                "Content-Type": "application/json",
                "Dev": "vip4c@reDevelop3r",
                "Authorization": "Bearer " + jwtToken,
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Headers":"*",
                // "Access-Control-Allow-Methods":"*"
            })
                .then((response) => setQuestions(response.data.services))
                // .then((response)=> console.log(response.data.blogs))
        };
        
        getQuestions();
    }, []);

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
                {questions?.map((service) => (
                    <Question key={service._id} productData={service} />
                ))}
            </main>
        </div>
    );
};

export default EditQues;
