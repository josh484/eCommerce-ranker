import React from "react";

function RankCard(prop){
    return (
        <>
            <p>Name: {prop.name}</p>
            <p>Price: {prop.price}</p>
        </>
    )
}

export default RankCard