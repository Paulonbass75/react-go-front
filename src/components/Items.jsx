import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Items() {
  const [items, setItems] = useState([]); // state for items

  useEffect(() => {
    let itemList = [
      {
        id: 1,
        name: "Item 1",
        price:"$100",
        quantity: 1,
        description: "This is item 1",
      },
      {
        id: 2,
        name: "Item 2",
        price: "$200",
        quantity: 1,
        description: "This is item 2",
      },
      {
        id: 3,
        name: "Item 3",
        price: "$300",
        quantity: 1,
        description: "This is item 3",
      },
    ];
    setItems(itemList);
  }, []);

  return (
    <div className="">
      <h2>Items</h2>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>

              <Link to={`/Items/${item.id}`}>
                {item.name}
              </Link>
              </td>

              <td>{item.description}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//  <tbody>
//                     {movies.map((m) => (
//                         <tr key={m.id}>
//                             <td>
//                                 <Link to={`/movies/${m.id}`}>
//                                     {m.title}
//                                 </Link>
//                             </td>
//                             <td>{m.release_date}</td>
//                             <td>{m.mpaa_rating}</td>
//                         </tr>   