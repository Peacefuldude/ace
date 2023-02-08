import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// Styles
import styles from "./UserDetails.module.css";

const UserDetails = () => {

    const { id } = useParams()

    const [data, setData] = useState()
    const Navigate = useNavigate();

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

    useEffect(()=>{
        axios
            .post(
                "https://api.vip4care.ir/blog/create",
                id,
                axiosConficPost
                )
                .then((response)=> {
                    if (response.data.success) {
                        setData(response)
                    }
                })
    }, [])
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
                <div className={styles.showQu}>
                {/* {
                    question?.map((service, index) => <p key={index}>سوال: {service}</p>)
                } */}
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
