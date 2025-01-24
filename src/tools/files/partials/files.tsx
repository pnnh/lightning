import React from 'react'
import {useEffect, useState} from 'react'
import './files.scss'
import {PLSelectResult} from "@/atom/common/models/protocol";
import {PSFileModel} from "@/atom/common/models/filesystem";
import {useAtom} from "jotai/index";
import {currentPathAtom} from "@/tools/files/partials/state";

export function FileListContainer() {
    const [filesState, setFilesState] = useState<PLSelectResult<PSFileModel>>()
    const [currentPath, setCurrentPath] = useAtom(currentPathAtom)

    useEffect(() => {
        window.BridgeAPI.selectFiles('', {}).then(selectResult => {
            setFilesState(selectResult)
        })
    }, [currentPath])

    if (!filesState || !filesState.data || !filesState.data.range || filesState.data.range.length <= 0) {
        return <div>Empty</div>
    }
    return <div className={'fileListContainer'}>
        {
            filesState.data.range.map(item => {
                return <FileList key={item.Uid} item={item} filesResult={filesState} level={0}/>
            })
        }
    </div>
}

function FileList({item, filesResult, level}: {
    item: PSFileModel,
    filesResult: PLSelectResult<PSFileModel>, level: number
}) {

    const [childrenFilesState, setChildrenFilesState] = useState<PLSelectResult<PSFileModel>>()

    return <div className={'fileList'}>
        <div className={'directorySelf'} style={{paddingLeft: level.toString() + 'rem'}}>
            <div className={'openIcon'}>
                {
                    item.IsDir &&
                    <img src={!childrenFilesState ? '/icons/console/triangle-right-fill.png' :
                        '/icons/console/triangle-down-fill.png'} alt={'open'}
                         onClick={() => {
                             if (!childrenFilesState) {
                                 window.BridgeAPI.selectFiles(item.Uid, undefined).then(selectResult => {
                                     setChildrenFilesState(selectResult)
                                 })
                             } else {
                                 setChildrenFilesState(undefined)
                             }
                         }}/>
                }
            </div>
            <div className={'directoryName'}>
                {item.Name}
            </div>
        </div>
        <div className={'childrenFileList'}>
            {childrenFilesState && childrenFilesState.data && childrenFilesState.data.range && childrenFilesState.data.range.length > 0 &&
                childrenFilesState.data.range.map(((item, index) => {
                    return <FileList key={item.Uid} item={item} filesResult={childrenFilesState}
                                     level={level + 1}/>
                }))
            }
        </div>
    </div>
}
