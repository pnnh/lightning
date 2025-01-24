import {atom} from 'jotai'
import {PSFileModel} from "@/atom/common/models/filesystem";

export const currentPathAtom = atom<PSFileModel>()
