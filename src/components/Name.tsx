import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {changeName, selectName} from "../store/slices/personSlice";
import {Title, Input} from "./UI";

/**
 * Component used to edit name value of a person
 * @constructor
 */
const Name = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const name = useAppSelector(selectName);

    return (
        <>
            <Title>Name:</Title>
            <Input
                type="text"
                value={name ? name : ""}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(changeName(e.target.value))}
            />
        </>
    );
};

export default Name;