import React, {useState} from 'react'
import {useEffect} from 'react'
import './library.scss'
import {PLSelectResult} from "@/atom/common/models/protocol";
import {PSFileModel} from "@/atom/common/models/filesystem";
import {useAtom} from "jotai";
import {currentPathAtom} from "@/tools/files/partials/state";

export function LibrarySelector() {
    const [libraryListState, setLibraryListState] = useState<PLSelectResult<PSFileModel>>()
    const [currentPath, setCurrentPath] = useAtom(currentPathAtom)

    useEffect(() => {
        window.BridgeAPI.selectFiles('', {
            directory: true
        }).then(selectResult => {
            if (selectResult && selectResult.data && selectResult.data.range && selectResult.data.range.length > 0) {
                setLibraryListState(selectResult)
            }
        })
    }, [])

    if (!libraryListState || !libraryListState?.data ||
        !libraryListState.data.range || libraryListState.data.range.length <= 0) {
        return <div>暂无笔记本</div>
    }
    return <>
        <div className={'notebookSelector'}>
            <div className={'notebookTitle'}>
                <span>位置</span>
            </div>
        </div>
        {
            <div className={'libraryContainer'}>
                <div className={'libraryList'}>
                    {
                        libraryListState.data.range.map(((item, index) => {
                            return <div key={index} className={'notebookItem'} onClick={() => {
                                setCurrentPath(item)
                            }}>
                                <span className={'notebookName'}>{item.Name}</span>
                            </div>
                        }))
                    }
                </div>
            </div>
        }
    </>
}
