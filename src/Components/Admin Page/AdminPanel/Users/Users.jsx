import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import UserCard from "./User/UserCard";

// Styles
import styles from "./Users.module.css";

const Users = () => {
    const Navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const BASE_URL = "https://api.vip4care.ir/user";

    useEffect(() => {
        const getServices = async () => {
            const response = await axios.get(`${BASE_URL}/allusers`)
                .then((respone)=> setUsers(respone.data.foundedUsers))
                .catch((errors)=> console.log(errors))
        };

        getServices();
    }, []);

    return (
        <div className={styles.container}>
            <section>
                <p>فهرست</p>
                <button className={styles.section_btn}><Link to="/addquestion">اضافه کردن مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/deletequestion">حذف مجموعه سوال</Link></button>
                <button className={styles.section_btn}><Link to="/users">کاربرها</Link></button>
            </section>
            <main>
                {users?.map((blog) => (
                    <UserCard key={blog._id} productData={blog} />
                ))}
            </main>
        </div>
    );
};

export default Users;
