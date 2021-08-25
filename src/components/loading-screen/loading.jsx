import { useRef } from 'react';

import './loading.styles.css';

export const Loading = ({ loading }) => {
    const loadingRef = useRef();
    if (loadingRef.current !== undefined) {
        
    (!loading) ? loadingRef.current.style.display = "none" : console.table()
    }
    return (
        <div className="loader"
            ref={loadingRef}
        >
            <img
                id="loadingImage"
                alt=""
                src="/favicon.svg"
                draggable="false"
                ></img>

        </div>
    )
}

