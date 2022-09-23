import React, {useState} from 'react';
import {useAppDispatch} from "../hooks/redux-hooks";
import {incrementByAmount, decrementByAmount, increment, decrement} from "../store/slices/personSlice";

/**
 * Component used to edit person's age value
 * @constructor
 */
const Age = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState(10);

    /**
     * Handles change of age input
     * @param event
     */
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        setAmount(Number(event.target.value));
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <button onClick={(e) => dispatch(increment())}>Increment</button>
            <button onClick={(e) => dispatch(decrement())}>Decrement</button>
            <input type="number" value={amount} onChange={handleChange}/>
            <button onClick={(e) => dispatch(incrementByAmount(amount))}>Add</button>
            <button onClick={(e) => dispatch(decrementByAmount(amount))}>Subtract</button>
        </form>
    );
};

export default Age;