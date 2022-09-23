import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from '../store';

export enum Works{
    DEVELOPER,
    DOCTOR,
    TEACHER
}

export type Work = {
    type: Works,
    salary: number
}

type PersonState = {
    age: number
    name: string
    work: null | Work
}

const initialState: PersonState = {
    age: 21,
    name: "Adam",
    work: {
        type: Works.DEVELOPER,
        salary: 10000
    }
}

export const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.age = state.age + action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.age = state.age - action.payload;
        },
        increment: (state) => {
            state.age = state.age + 1;
        },
        decrement: (state) => {
            state.age = state.age - 1;
        },
        reset: (state) => {
            state.age = 0;
            state.name = "";
            state.work = null;
        },
        changeName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        changeWork: (state, action: PayloadAction<Work>) => {
            state.work = action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount, decrementByAmount, reset, changeName, changeWork } = personSlice.actions;
export const selectAge = (state: RootState) => state.person.age;
export const selectName = (state: RootState) => state.person.name;
export const selectWork = (state: RootState) => state.person.work;
export default personSlice.reducer;