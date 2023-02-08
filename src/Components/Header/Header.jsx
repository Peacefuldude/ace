import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';

// Styles
import styles from './Header.module.css'
import hamStyles from './hamMenu.module.css'

// Images
import logo from '../../Helpers/Images/logo-png.png'

const Header = () => {

    const burger = useRef();
    const [menus, setMenu] = useState(false);

    const toggleMenu = () => {
        if (menus) {
            burger.current.classList.add(hamStyles.burgerActive);
            setMenu(false);
            return;
        }

        if (!menus) {
            burger.current.classList.remove(hamStyles.burgerActive);
            setMenu(true);
            return;
        }
    }

    return ( 
        <div>
                <div onClick={toggleMenu} className={hamStyles.toggleDiv}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={hamStyles.burger} ref={burger}>
                    <div onClick={toggleMenu} className={hamStyles.toggleDivInMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>فهرست</p>
                    <nav className={hamStyles.nav}>
                        <Link to="/home">
                            <button>خانه</button>
                        </Link>
                        {!localStorage.getItem('aceuser') && <Link to="/account">
                            <button>صفحه من</button>
                        </Link>}
                        {/* {localStorage.getItem('aceuser') && <Link to="/account">
                            <button>صفحه من</button>
                        </Link>} */}
                        {!localStorage.getItem('aceuser') && <Link to="/login">
                            <button>وارد شوید</button>
                        </Link>}
                        {!localStorage.getItem('aceuser') && <Link to="/signup">
                            <button>ثبت نام</button>
                        </Link>}
                    </nav>
                </div>
            <div className={styles.header_container}>
                <div></div>
                <section>
                    <img src={logo} alt="logo" />
                </section>
                <div></div>
                <div></div>
                <nav>
                    <Link to="/home">
                        <button>خانه</button>
                    </Link>
                    {!localStorage.getItem('aceuser') && <Link to="/account">
                        <button>صفحه من</button>
                    </Link>}
                    {/* {localStorage.getItem('aceuser') && <Link to="/account">
                        <button>صفحه من</button>
                    </Link>} */}
                    {!localStorage.getItem('aceuser') && <Link to="/login">
                        <button>وارد شوید</button>
                    </Link>}
                    {!localStorage.getItem('aceuser') && <Link to="/signup">
                        <button>ثبت نام</button>
                    </Link>}
                    {/* <button onClick={()=> {
                        localStorage.setItem('aceuser', "user1")
                    }}>make user</button> */}
                </nav>
                <div></div>
                <div></div>
            </div>
        </div>
     );
}
 
export default Header;