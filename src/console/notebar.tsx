import {useEffect, useState} from 'react'
import {libraryAtom, noteAtom, notebookAtom} from './providers/notebook'
import React from 'react'
import {selectNotes} from "@/services/client/personal/notes";
import './notebar.scss'
import {useAtomValue, useSetAtom} from "jotai";
import {PSNoteModel} from "@/atom/common/models/personal/note";
import {PLSelectResult} from "@/atom/common/models/protocol";

export function ConsoleNotebar() {
    const [notesResult, setNotesResult] = useState<PLSelectResult<PSNoteModel>>()
    const libraryState = useAtomValue(libraryAtom)
    const notebookState = useAtomValue(notebookAtom)
    useEffect(() => {
        if (!libraryState || !libraryState.current || !libraryState.current.urn || !notebookState ||
            !notebookState.current || !notebookState.current.urn) {
            return
        }
        selectNotes(libraryState.current.urn, notebookState.current.urn).then(selectResult => {
            setNotesResult(selectResult)
        })
    }, [notebookState])

    if (!notesResult || !notesResult.data.range || notesResult.data.range.length <= 0) {
        return <div>Empty</div>
    }
    return <div className={'noteList'}>
        {
            notesResult.data.range.map(item => {
                return <NoteCard key={item.urn} item={item}/>
            })
        }
    </div>
}

function NoteCard({item}: { item: PSNoteModel }) {
    const setNote = useSetAtom(noteAtom)

    return <div className={'noteCard'} onClick={() => {
        setNote({
            current: item
        })
    }}>
        <div className={'noteSelf'}>
            <div className={'noteName'}>
                {item.title}</div>
        </div>
    </div>
}
