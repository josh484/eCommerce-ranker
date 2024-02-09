import React from "react";

function RankCard(prop){
    return (
        <>
            <img src={prop.image}></img>
            <p>Name: {prop.name}</p>
            <p>Price: {prop.price}</p>
            <p>Link: {prop.link}</p>
        </>
    )
}

export default RankCard