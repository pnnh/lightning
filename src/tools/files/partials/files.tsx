import React from 'react'
import {useEffect, useState} from 'react'
import './files.scss'
import {PLSelectResult} from "@/atom/common/models/protocol";
import {PSFileModel} from "@/atom/common/models/filesystem";
import {useAtom} from "jotai/index";
import {currentPathAtom, filesViewAtom, ViewTable} from "@/tools/files/partials/state";
import {FilesTreeView} from "@/tools/files/partials/table";
import {FilesGridView} from "@/tools/files/partials/grid";

export function FilesContainer() {
    const [filesState, setFilesState] = useState<PLSelectResult<PSFileModel>>()
    const [currentPath, setCurrentPath] = useAtom(currentPathAtom)
    const [view, setView] = useAtom(filesViewAtom)

    useEffect(() => {
        window.BridgeAPI.selectFiles('', {}).then(selectResult => {
            setFilesState(selectResult)
        })
    }, [currentPath])

    if (!filesState || !filesState.data || !filesState.data.range || filesState.data.range.length <= 0) {
        return <div>Empty</div>
    }
    return view === ViewTable ? <FilesTreeView filesState={filesState}/> : <FilesGridView filesState={filesState}/>
}
