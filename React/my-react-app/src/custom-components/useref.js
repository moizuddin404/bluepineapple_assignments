import { useRef } from "react";

export function FocusField() {
    const ref = useRef(null);
    function focusClick() {
        ref.current.focus();
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input ref={ref} type="text" className="inpMessage" /><br />
                <button onClick={focusClick} className="counterBtn" >Focus</button>
            </div>
        </>
    );

}