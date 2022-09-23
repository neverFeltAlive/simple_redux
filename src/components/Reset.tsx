import React from 'react';
import {useAppDispatch} from "../hooks/redux-hooks";
import {reset} from "../store/slices/personSlice";

/**
 * Component used to reset all person values
 * @constructor
 */
const Reset = (): JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <button onClick={(e) => dispatch(reset())}>Reset</button>
    );
};

export default Reset;