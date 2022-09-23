import React, {useState} from 'react';
import {useAppDispatch} from "../hooks/redux-hooks";
import {incrementByAmount, decrementByAmount, increment, decrement} from "../store/slices/personSlice";
import {Title, Input, Button, Form} from "./UI";

/**
 * Component used to edit person's age value
 * @constructor
 */
const Age = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState<null | number>(10);

    /**
     * Handles change of age input
     * @param event
     */
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        setAmount(event.target.value ? +event.target.value : null);
    }

    return (
        <>
            <Title>Age:</Title>
            <Form onSubmit={(e) => e.preventDefault()}>
                <div className="flex justify-between align-middle px-5 mb-5">
                    <Button onClick={(e) => dispatch(increment())}>Increment</Button>
                    <Button onClick={(e) => dispatch(decrement())}>Decrement</Button>
                </div>
                <div className="flex justify-between align-middle px-5 mb-5">
                    <Input
                        type="number"
                        value={amount ?? ""}
                        onChange={handleChange}
                    />
                    <div className="p-4 w-[30%]">
                        <Button onClick={(e) => dispatch(incrementByAmount(amount ?? 0))}>Add</Button>
                        <Button onClick={(e) => dispatch(decrementByAmount(amount ?? 0))}>Subtract</Button>
                    </div>
                </div>
            </Form>
        </>
    );
};

export default Age;