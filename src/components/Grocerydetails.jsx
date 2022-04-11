import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import "../App.css";

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1 style={{border: "3px solid lightgray", borderRadius: "10px", color: "pink"}}>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
            {data.map( function(el) {
                return (
                    <>
                    <GroceryItem key={el.id} {...el}/>
                    </>
                )
            })}
        </div>
        </>
    )
}
export default GroceryDetails