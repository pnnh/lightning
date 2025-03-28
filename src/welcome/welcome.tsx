import * as React from "react";
import styles from './welcome.module.scss'
import {useNavigate} from "react-router-dom";
import {useBaseUrl} from "@/config/browser";

export function WelcomePage() {
    const navigate = useNavigate();
    const baseUrl = useBaseUrl()
    return <div className={styles.welcomePage}>
        <h1>欢迎使用</h1>
        <div className={styles.toolGrid}>
            <div className={styles.toolCard}>
                <div className={styles.toolIcon}>
                    <img src={`${baseUrl}/images/tools/files.png`}></img>
                </div>
                <div>文件管理</div>
            </div>
            <div className={styles.toolCard}>
                <div className={styles.toolIcon}>
                    <img src={`${baseUrl}/images/tools/notes.png`}></img>
                </div>
                <div className={styles.toolName}>笔记管理</div>
            </div>
            <div className={styles.toolCard} onClick={() => navigate("/images")}>
                <div className={styles.toolIcon}>
                    <img src={`${baseUrl}/images/tools/images.png`}></img>
                </div>
                <div className={styles.toolName}>图片管理</div>
            </div>
            <div className={styles.toolCard}>
                <div className={styles.toolIcon}>
                    <img src={`${baseUrl}/images/tools/password.png`}></img>
                </div>
                <div className={styles.toolName}>密码生成</div>
            </div>
            <div className={styles.toolCard}>
                <div className={styles.toolIcon}>
                    <img src={`${baseUrl}/images/tools/uuid.png`}></img>
                </div>
                <div className={styles.toolName}>UUID生成</div>
            </div>
            <div className={styles.toolCard}>
                <div className={styles.toolIcon}>
                    <img src={`${baseUrl}/images/tools/uuid.png`}></img>
                </div>
                <div className={styles.toolName}>Base系列</div>
            </div>
        </div>
    </div>
}

