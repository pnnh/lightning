import {atom} from 'jotai'

const directoryAtom = atom('')

const noteAtom = atom<{
    current: PSNoteModel | undefined,
}>({
        current: undefined,
})

const notebookAtom = atom<{
    models: PSNotebookModel[],
    current: PSNotebookModel | undefined,
}>({
        models: [],
        current: undefined,
})

const libraryAtom = atom<{
    models: PSLibraryModel[],
    current: PSLibraryModel | undefined,
}>({
        models: [],
        current: undefined,
})

export {noteAtom, directoryAtom, notebookAtom, libraryAtom}
