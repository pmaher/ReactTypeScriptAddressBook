import React from 'react';

import Header from './Header';

export default (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <div className="container">
            <Header />
            {props.children}
         </div>
    )
}