import React, {usestate} from "react";

export default function Lookup(){
    const [isCurrent, setIsCurrent] = React.useState(true)

    function change(){
        setIsCurrent((prevIsCurrent) => !prevIsCurrent)
    }
    /* !prevIsCurrent = prevIsCurrent ? false : true  */
    return(

        <div className="usestate--main">
            <div onClick={change} className="usestate--btn">
                <p className="usestate--text">{isCurrent ? "YES" : "NO"}</p>
            </div>
        </div>

    )
}