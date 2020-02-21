import React from 'react';

const GreetToYou = ()=>{
    const pName = 'Abdulraheem Sherif A'
    //like this too
    const stylesChange={
        color:"yellow",
        backgroundColor:"grey",
        padding:" 10px 20px 10px 20px"
    }
    const date  = new Date()
    const hours = date.getHours();
    let timeOfDay
    if (hours<12){
        timeOfDay = 'Morning'
        stylesChange.color = "brown"
    }else if(hours >12 && hours <17){
        timeOfDay = 'Afternoon'
        stylesChange.color = "red"
    }else{
        timeOfDay = 'Night'
        stylesChange.color = "orange"
    }
    //like this too
    const styles={
        color:"yellow",
        backgroundColor:"grey",
        padding:" 10px 20px 10px 20px"
    }
    return (
        <div>
            <h1 style={stylesChange}>Good {timeOfDay}, Mr. {pName}</h1>
            <h1 style={styles}>Good {timeOfDay}, Mr. {pName}</h1>
            <h1 style={{color:"red", backgroundColor:"blue", padding:" 10px 20px 10px 20px"}}>Welcome ' {pName} !</h1>
        </div>
        
    )
}

export default GreetToYou