import styles from './files.module.scss'
import * as React from "react";
import {useState} from "react";
import {FileListContainer} from "./partials/files";
import {NotebookBar} from "./partials/sidebar";

const ViewTable = 'table'
const ViewGrid = 'grid'

export function FilesPage() {
    const [view, setView] = useState(ViewTable)

    return <div className={styles.imageFilesPage}>
        <div className={styles.leftArea}>
            <NotebookBar></NotebookBar>
        </div>
        <div className={styles.rightArea}>
            <div className={styles.rightToolbar}>

            </div>
            <FileListContainer></FileListContainer>
        </div>
    </div>
}
