import React from "react";

export default function Star(props){

    let starIcon = props.isFilled? "star.png" : "empty-star.png"

    return(
        <img src={starIcon} className="card--favorite" onClick={props.onHandle} />
    )
}