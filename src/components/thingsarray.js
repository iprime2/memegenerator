import React from "react";

export default function Thingsarray(){

    const [thingsArray, setThingsArray] = React.useState(['Things 1', 'Things 2'])

    
    function addItems(){
        setThingsArray(prevThingsArray =>{
            return [...prevThingsArray, `Things ${prevThingsArray.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(things => <p> {things} </p>)


    return(


        <div className="things--main">
            <div onClick={addItems}  className="things--btn">ADD ITEMS</div>
                {thingsElements}
        </div>
    )
}