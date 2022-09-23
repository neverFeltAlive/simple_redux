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
        <div className="bg-blue-200 mx-auto py-5 px-8 rounded-xl h-fit w-[400px]">
            <Name/>
            <Age/>
            <Work/>
            <Reset/>
        </div>
    );
};

export default Edit;