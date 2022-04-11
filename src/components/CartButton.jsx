import React from "react"
import "../App.css"

// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count, setCount] = React.useState(0)
    const handleAdd = (value) => {
      setCount(count+value);
    }

  return count==0 ?
  <div>
    <button style={{width: "100%", background: "#87ceeb", height: "40px", borderRadius: "10px", color: "white", border: "transparent", margin: "5px"}} onClick={()=>handleAdd(1)}>Add to Cart</button>
  </div>
    :
  <div style={{display:"flex", justifyContent: "center", margin: "5px"}}>
      <button style={{width:"35px",height:"35px", borderRadius: "10px", background:"skyblue", border: "transparent", fontSize:"20px", color: "white"}} onClick={()=>handleAdd(-1)}>-</button>
      <p className="count-item">{count}</p>
      <button style={{width:"35px",height:"35px", borderRadius: "10px", background:"skyblue", border: "transparent", fontSize:"20px", color: "white"}} onClick={()=>handleAdd(1)}>+</button>
  </div>
};
export default CartButton
