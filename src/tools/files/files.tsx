import styles from './files.module.scss'
import * as React from "react";
import {useState} from "react";

const ViewTable = 'table'
const ViewGrid = 'grid'

export function FilesPage() {
    const [view, setView] = useState(ViewTable)

    return <div className={styles.imageFilesPage}>
        <div className={styles.leftArea}>
            <div className={styles.navItem}>主目录</div>
        </div>
        <div className={styles.rightArea}>
            <div className={styles.rightToolbar}>

            </div>
        </div>
    </div>
}
