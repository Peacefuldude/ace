import React from 'react';
import axios from 'axios';

// Styles
import styles from './DeleteQu.module.css'

const DeleteQu = ({productData}) => {

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

    const deleteHandler = (event) => {
        event.preventDefault();
        axios.delete(`https://api.vip4care.ir/blog/delete${productData._id}`, axiosConficPost)
            .then((response)=> {
                if (response.data.success) {
                    alert("عملیات با موفقیت به پایان رسید.")
                    window.location.reload()
                }
            })
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.textDiv}>
                <button onClick={deleteHandler}>حذف مجموعه</button>
            </div>
        </div>
     );
}
 
export default DeleteQu;