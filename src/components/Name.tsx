import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {changeName, selectName} from "../store/slices/personSlice";

/**
 * Component used to edit name value of a person
 * @constructor
 */
const Name = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const name = useAppSelector(selectName);

    return (
        <div>
            <input type="text" value={name ? name : "Not Specified"} onChange={(e) => dispatch(changeName(e.target.value))}/>
        </div>
    );
};

export default Name;