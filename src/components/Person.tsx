import {useAppSelector} from "../hooks/redux-hooks";
import {selectAge, selectName, selectWork} from "../store/slices/personSlice";
import {workDict} from "../utils/workDict";

/**
 * Component which displays current values of person
 * @constructor
 */
const Person = (): JSX.Element => {
    const name = useAppSelector(selectName);
    const age = useAppSelector(selectAge);
    const work = useAppSelector(selectWork);

    return (
        <div>
            <h1>Name: {name ? name : "Not Specified"}</h1>
            <h3>Age: {age}</h3>
            <div>
                <h5>Job:</h5>
                <p>{work ? workDict.get(work.type) : "Not Specified"}</p>
                <p>{work?.salary ? work?.salary : 0} &#x24;</p>
            </div>
        </div>
    );
};

export default Person;