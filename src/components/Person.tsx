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
        <div className="container mx-auto w-[400px] py-10 px-20 m-10 text-xl font-medium rounded-xl h-fit">
            <h3 className="flex justify-between mt-2 px-5">Name: <span className="font-bold">{name ? name : "Not Specified"}</span></h3>
            <h3 className="flex justify-between mt-2 px-5">Age: <span className="font-bold">{age}</span></h3>
            <div className="flex justify-between mt-5 bg-gray-200 p-5 rounded-xl">
                <h3>Job:</h3>
                <div className="font-bold text-right">
                    <p>{work ? workDict.get(work.type) : "Not Specified"}</p>
                    <p>{work?.salary ? work?.salary : 0} &#x24;</p>
                </div>
            </div>
        </div>
    );
};

export default Person;