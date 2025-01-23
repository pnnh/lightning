import * as React from "react";
import styles from './welcome.module.scss'
import { useNavigate } from "react-router-dom";

export function WelcomePage() {
    const navigate = useNavigate();
    return <div className={styles.welcomePage}>
        <h1>欢迎使用</h1>
        <div className={styles.toolGrid}>
            <div className={styles.toolCard}>
                <div className={styles.toolIcon}>
                    <img src={'/images/tools/files.png'}></img>
                </div>
                <div>文件管理</div>
            </div>
            <div className={styles.toolCard}>
                <div className={styles.toolIcon}>
                    <img src={'/images/tools/notes.png'}></img>
                </div>
                <div className={styles.toolName}>笔记管理</div>
            </div>
            <div className={styles.toolCard} onClick={()=> navigate("/images")}>
                <div className={styles.toolIcon}>
                    <img src={'/images/tools/images.png'}></img>
                </div>
                <div className={styles.toolName}>图片管理</div>
            </div>
            <div className={styles.toolCard}>
                <div className={styles.toolIcon}>
                    <img src={'/images/tools/password.png'}></img>
                </div>
                <div className={styles.toolName}>密码生成</div>
            </div>
            <div className={styles.toolCard}>
                <div className={styles.toolIcon}>
                    <img src={'/images/tools/uuid.png'}></img>
                </div>
                <div className={styles.toolName}>UUID生成</div>
            </div>
        </div>
    </div>
}

