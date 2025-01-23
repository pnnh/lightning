import styles from "./grid.module.scss";
import * as React from "react";

export function FilesGrid() {
    return <div className={styles.fileGrid}>
        <FileCard/>
    </div>

}

function FileCard() {
    return <div className={styles.fileCard}>
        <div className={styles.fileIcon}>
            <img src={'/files/tools/files.png'}></img>
        </div>
        <div className={styles.fileName}></div>
    </div>
}
