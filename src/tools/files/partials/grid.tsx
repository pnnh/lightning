import {PLSelectResult} from "@/atom/common/models/protocol";
import {PSFileModel} from "@/atom/common/models/filesystem";
import React, {useEffect, useState} from "react";
import styles from './grid.module.scss'
import {isImageType} from "@/atom/common/utils/mime";

export function FilesGridView({filesState}: { filesState: PLSelectResult<PSFileModel> }) {
    return <div className={styles.fileGrid}>
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

    return <div className={styles.fileCard}>
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
                {isImageType(item.Name) ? <ImageItem item={item}/> : item.Name}
            </div>
        </div>
    </div>
}

function ImageItem({item}: { item: PSFileModel }) {
    const [src, setSrc] = useState<string>('');
    useEffect(() => {
        console.log('ImageItem', item)
        window.BridgeAPI.getImageFileData(item.Uid).then((data) => {
            console.log('ImageItem', data)

            var base64String = btoa(
                new Uint8Array(data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );

            console.log('ImageItem2', base64String)
            setSrc(`data:image/png;base64,${base64String}`)
        })
    }, []);

    return <div className={styles.fileIcon}>
        <img src={src}></img>
    </div>
}

