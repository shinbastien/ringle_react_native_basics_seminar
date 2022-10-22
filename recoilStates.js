import {atom} from "recoil";

export const cntAtom = atom({
    key: "cntAtom",
    default: 0
})

export const appliedAtom = atom({
    key: "appliedAtom",
    default: {}
})