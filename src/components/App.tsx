import React from 'react';

export default (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <div className="container">
            {props.children}
         </div>
    )
}