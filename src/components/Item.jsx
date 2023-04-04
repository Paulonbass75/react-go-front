import React from "react";
import { useState} from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Item() {
  const [item, setItem] = useState({}); // state for items
  let { id } = useParams();

  useEffect(() => {
    let itemList = 
      {
        id: 1,
        name: "Item 1",
        price:"$100",
        quantity: 1,
        description: "This is item 1",
      }

      
     setItem(itemList);
  }, [id]);

  return (
    <div className="">
      <h2>Item: {item.name}</h2>
      <small><em>{item.price}, {item.quantity} In stock</em></small>
      <hr />
      <p>{item.description}</p>
    </div>
  );
}
