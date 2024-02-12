import React from "react";

function RankCard(prop){
    return (
        <div id={prop.id} >
            <img src={prop.image}></img>
            <p>Name: {prop.name}</p>
            <p>Price: {prop.price}</p>
            <p>Link: {prop.link}</p>
        </div>
    )
}

export default RankCard