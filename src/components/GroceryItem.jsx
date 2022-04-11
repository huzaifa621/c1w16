import CartButton from "./CartButton";

// reusable card component
const GroceryItem = ({discount,id,imgURL,mrp,sellingPrice,title}) => {
  let bag = "";
  if(title.length>=25) {
    for(let i=0;i<=25;i++) {
      bag += title[i];
    }
    bag += "...";
  }
  else {
    bag = title;
  }
  return (
    <>
      <div>
      <div style={{border: "2px solid lightgray", padding: "5px", borderRadius: "10px"}}>
        <div style={{display: "flex"}}>
          <div style={{color: "green"}}>{discount}</div>
          <div>
            <img src={imgURL} alt={id} />
          </div>
        </div>
        <h4>{bag}</h4>
        <div>
          <span style={{marginRight: "20%"}}>{sellingPrice}</span>
          <span>MRP - <s>{mrp}</s></span>
        </div>
        </div>
        <CartButton />
      </div>
    </>
  );
};
export default GroceryItem;
