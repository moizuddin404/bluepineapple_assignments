import { useState } from "react";

export function CounterButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <div className='main'>
                <h1 className='countHead'>{count}</h1>
                <button onClick={handleClick} className='counterBtn'>Counter</button>
            </div>
        </>
    );

}
