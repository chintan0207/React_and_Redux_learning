import { useReducer } from 'react'

function UseReducerHook() {

    const initialState = { count: 0 };

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                <button className='my-2' onClick={() => dispatch({ type: 'increment' })}>+</button>   
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            </div>
        </>
    )
}

export default UseReducerHook
