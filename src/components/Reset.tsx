import React from 'react';
import {useAppDispatch} from "../hooks/redux-hooks";
import {reset} from "../store/slices/personSlice";
import {Button} from "./UI";

/**
 * Component used to reset all person values
 * @constructor
 */
const Reset = (): JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <Button onClick={(e:React.MouseEvent<HTMLButtonElement>) => dispatch(reset())}>Reset</Button>
    );
};

export default Reset;