import React from 'react';

import './loading.styles.css';

export const Loading = ({ loading }: any) => {
    const loadingRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (loadingRef.current !== undefined && !loading) {
            loadingRef!.current!.style!.display = "none";
        }
    }, [loading])

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

