import { useMemo, useRef, useState } from "react";
import UseReducerHook from "../components/UseReducerHook";

const Hooks = () => {

    const [count, setCount] = useState(0);
    // Memoizing a value
    const memoizedValue = useMemo(() => {
        // do heavy calculations based on count
        return count * 2;
    }, [count]);


    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div className="container">
            <h2>React Hooks</h2>

            <div className="row g-0">
                <div className="col-md-4">
                    <div className="card p-3">
                        <h4>UseMemo</h4>
                        <p>Count: {count}</p>
                        <button className="mb-2" onClick={() => setCount(count + 1)}>Increment</button>
                        <p>Memoized Value: {memoizedValue}</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card p-3">
                        <h4>UseRef</h4>
                        <input className="my-2" ref={inputRef} type="text" />
                        <button onClick={focusInput}>Focus Input</button>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card p-3">
                    <h4>UseReducer</h4>

                        <UseReducerHook/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hooks