import styles from './files.module.scss'
import * as React from "react";
import {useState} from "react";
import {FilesContainer} from "./partials/files";
import {NotebookBar} from "./partials/library";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GridOnIcon from '@mui/icons-material/GridOn';
import {useAtom} from "jotai";
import {filesViewAtom, ViewGrid, ViewTable} from "@/tools/files/partials/state";


export function FilesPage() {
    const [view, setView] = useAtom(filesViewAtom)

    return <div className={styles.imageFilesPage}>
        <div className={styles.leftArea}>
            <NotebookBar></NotebookBar>
        </div>
        <div className={styles.rightArea}>
            <div className={styles.rightToolbar}>
                <AccountTreeIcon onClick={() => setView(ViewTable)}/>
                <GridOnIcon onClick={() => setView(ViewGrid)}/>
            </div>
            <FilesContainer></FilesContainer>
        </div>
    </div>
}
