import React from 'react';
import Age from "./Age";
import Work from "./Work";
import Name from "./Name";
import Reset from "./Reset";

/**
 * Component used to display all available manipulation with person values
 * @constructor
 */
const Edit = (): JSX.Element => {
    return (
        <div>
            <Age/>
            <Name/>
            <Work/>
            <Reset/>
        </div>
    );
};

export default Edit;