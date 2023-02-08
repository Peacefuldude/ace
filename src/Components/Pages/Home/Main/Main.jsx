import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Styles
import styles from './Main.module.css'

// Images
import trever from '../../../../Helpers/Images/trever.png'

const Main = () => {

    const [active, setActive] = useState(false);
    useEffect(()=> {
        setActive(true);
    }, [])

    const [changer, setChanger] = useState(1)
    const [styler, setStyler] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setChanger(changer + 1)
        }, 900)
        setStyler(!styler)
    }, [changer])

    return ( 
        <div className={active ? styles.Main_container : styles.main_div_deactive}>
            <div className={styles.main_div}>
                <main>
                    <p className={styles.p_paragraph}><span className={styler ? styles.h1_span : styles.h1_span_active}>ace community</span>super fast, super safe!</p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                    <div className={styles.rule_btn_Div}>
                        <button className={styles.rules_anchor}>
                            <Link to="/rules" className={styles.rules_btn}>قوانین</Link>
                        </button>
                        <h3>:از اینکه قوانین ما را مطالعه می کنید و به آن پایبند هستید، سپاسگزاریم</h3>
                    </div>
                </main>
                <section>
                    <img src={trever} alt="trever" className={styles.trever} />
                </section>
            </div>
        </div>
     );
}
 
export default Main;