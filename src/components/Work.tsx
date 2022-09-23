import React, {useMemo, useState} from 'react';
import {useAppSelector} from "../hooks/redux-hooks";
import {changeWork, selectWork, Work as WorkType, Works} from "../store/slices/personSlice";
import {workDict} from "../utils/workDict";
import {useDispatch} from "react-redux";
import {Button, Form, Input, Title} from "./UI";

/**
 * Component used to edit work values of person
 * @constructor
 */
const Work = (): JSX.Element => {
    const work = useAppSelector(selectWork)
    const dispatch = useDispatch();
    const [values, setValues] = useState<WorkType>({
        salary: work ? work?.salary : 0,
        type: work ? work?.type : Works.DEVELOPER,
    });

    /**
     * Array generated from all available works
     */
    const works = useMemo(() => Array.from(workDict.values()), [workDict]);

    /**
     * Handles change of select
     * @param event
     */
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setValues(prevState => {
            return {
                ...prevState,
                type: Array.from(workDict.keys())[+event.target.value]
            }
        })
    }

    /**
     * handles form submission
     * @param event
     */
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        dispatch(changeWork(values));
    }

    return (
        <>
            <Title>Work:</Title>
            <Form onSubmit={handleSubmit}>
                <select
                    className="w-[100%] bg-transparent my-5"
                    onChange={handleSelectChange}
                >
                    {works.map((work, index) => {
                        return (
                            <option key={work} value={index} selected={index === 0}>{work}</option>
                        )
                    })}
                </select>
                <Input
                    type="number"
                    value={values.salary ? +values.salary : 0}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setValues(prevState => {return {...prevState, salary: +e.target.value}})}
                />
                <Button>Submit</Button>
            </Form>
        </>
    );
};

export default Work;