import React from 'react';
import styles from './style/parallax.module.css';

const Parallax = ({ children }) => {
    return (
        <div className={styles.parallaxContainer}>
            {/* <div className={styles.parallaxBackground} style={{ backgroundImage: `url(tomasevic/public/img/bck.jpg)` }}></div> */}
            <div className={styles.parallaxBackground} style={{ backgroundImage: `url(../img/bck.jpg)` }}></div>
            <div className={styles.parallaxContent}>
                {children}
            </div>
        </div>
    );
};

export default Parallax;
