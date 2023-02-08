import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Images
import empty from '../../../Helpers/Images/empty-folder.png'

// Styles
import styles from './AdminPage.module.css'

const AdminPage = () => {

    const Navigate = useNavigate();

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
                <div>
                    <p>چیزی برای نمایش وجود ندارد</p>
                    <img src={empty} alt="nothing here to see" />
                </div>
            </main>
        </div>
     );
}
 
export default AdminPage;