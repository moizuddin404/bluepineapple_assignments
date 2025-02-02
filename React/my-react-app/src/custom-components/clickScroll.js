/** scrolling images from user click **/

import { useRef } from "react";

export function ClickScroll() {
    const listRef = useRef(null)

    function scrollToIndex(index) {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll('li > img')[index];

        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <>
            <nav>
                <button onClick={() => scrollToIndex(0)} >Light house</button>
                <button onClick={() => scrollToIndex(1)} >Beach</button>
                <button onClick={() => scrollToIndex(2)} >Mountains</button>
            </nav>
            <div>
                <ul ref={listRef}>
                    <li>
                        <img src="F:/bluepineapple_assignments/React/my-react-app/public/images/lighthouse.jpeg" alt="lighthouse" width="400px" />
                    </li>
                    <li>
                        <img src="../../public/images/beach.jpeg" alt="beach" />
                    </li>
                    <li>
                        <img src="../../public/images/mountains.jpg" alt="Mountains" />
                    </li>
                </ul>
            </div>
        </>
    );

}