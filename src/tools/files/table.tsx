import styles from "./table.module.scss";
import * as React from "react";

export function FilesTable() {

    return <div className={styles.filesTable}>
        <FileRow/>
    </div>
}

function FileRow() {
    return <div className={styles.fileRow}>
        <div className={styles.fileIcon}>
            <img src={'/files/tools/files.png'}></img>
        </div>
        <div className={styles.fileName}></div>
    </div>
}
