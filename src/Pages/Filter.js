import { useState } from "react";



export default function FilterComponent({ links }) {
  const arrayFilter = ["السن اقل من 12 سنة", "السن من 12 الي 16 سنة", "السن من 16 الي 20 سنة", "من سن 16 الي 40 سنة"];
  const [selectedFilterData, setSelectedFilterData] = useState([]);
  const filterData = (button) => {
    const filtered = links.filter((data) => {
      return data.age === button;
    });
    setSelectedFilterData(filtered);
  };

  return (
    <>
      <div >
        <h3 className="text-yellow-300 font-bold">Filter</h3>
        {arrayFilter.map((button, i) => (
          <button
            className="btn bg-blue-300 p-2 text-yellow-300 font-bold"
            key={i}
            onClick={() => filterData(button)}
          >
            {button}
          </button>
        ))}
        <div className="d-flex flex-row justify-center align-center gap-10 p-5">
          {selectedFilterData.map((data, i) => (
            <div key={i} className="bg-blue-900 p-5 text-blue-250">
              <h3 className="text-5xl font-bold ">{data.title}</h3>
              <p className="text-2xl">{data.age}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


// import React, { useState, useEffect } from "react";
// export default function PackingList({
//   newItems,
//   handleDeleteItem,
//   handleAddItem,
//   onToggleItem,onClearList
// }) {
//   const [sortBy, setSortBy] = useState("input");
//   let sortedItem;

//   if (sortBy === "input") sortedItem = newItems;

//   if (sortBy === "description")
//     sortedItem = newItems
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));

//   if (sortBy === "packed")
//     sortedItem = newItems
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));

//   return (
//     <div className="list">
//       <ul>
//         {sortedItem.map((item) => (
//           <li key={item.id}>
//             <input type="checkbox" onChange={() => onToggleItem(item.id)} />
//             <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//               {item.quantity} {item.description}
//             </span>
//             <button onClick={() => handleDeleteItem(item.id)}>❌</button>
//           </li>
//         ))}
//       </ul>
//       <div className="actions">
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="input">Sort by input order</option>
//           <option value="description">Sort by description</option>
//           <option value="packed">Sort by packed status</option>
//         </select>
//         <button onClick={onClearList}>Clear list</button>
//       </div>
//     </div>
//   );
// }
