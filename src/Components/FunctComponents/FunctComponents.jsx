import React, { Children } from "react";

function ChildComponent(props) {
    return(
        <>
            <h1>Hello { props.name }</h1>
            <h2>{ props.message }</h2>
        </>
    )
}

export default ChildComponent;