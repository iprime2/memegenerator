import React from 'react'
import boxes from './boxes'

export default function Box(props) { 
    
    const [onValue, setOnValue] = React.useState(props.on)


    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    
    
    return(
        <div onClick={props.onHandle} style={styles} className="box" ></div>
    )
}
