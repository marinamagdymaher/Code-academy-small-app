import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Card.css";
import { useState } from "react";


const taskToCard = [
  { link: "/", title: "Home", paragraph: "mvfnivnfinviofnvvrvr" },
  { link: "/web", title: "web", paragraph: "mvfnivnfinviofndrgtv" },
  { link: "/linex", title: "linex", paragraph: "mvfnivnfinviofnvrvrjiv" },
  { link: "/network", title: "network", paragraph: "mvfnivnfinviofnnhnjmi,v" },
];

// export default  function Card() {
//   return (
//     <div>
//       <div className="elements-container">
//         {taskToCard.map((element, i) => (
//           <Link to={element.link} key={i}>
//             <div className="elements">
//               <span>{i + 1}</span>
//               <p>{element.title}</p>
//               <Box element={element}/>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

export function Box() {
  // const [filteredUsers, setFilteredUsers] = useState(users);
  return (
    <>
      <main className="main">
        {taskToCard.filter((element,i) => (
          <div className="box" key={i}>
            <h1>{element.title}</h1>
            <h1>{element.paragraph}</h1>
          </div>
        ))}
      </main>
    </>
  );
}
