

import HomePage from './components/HomePage'
import "./App.css";
import { useState } from "react";
import SignUp from './components/SignUp';

function App() {
  return(
  <SignUp/>
  )
//   const [text, settext] = useState("");
//   const [tasks, settasks] = useState([]);
//   const [editBtn, seteditBtn] = useState("Edit");

//   let handleOnChange = (val) => {
//     settext(val.target.value);
//   };
//   let addTsks = () => {
//     settasks([...tasks, text]);
//     settext("");
//   };
//   let deleteTasks = (id) => {
//     let fltr = tasks.filter((val, indx) => {
//       return indx !== id;
//     });
//     console.log(fltr);
//     settasks(fltr);
//   };

//  let editFnc = (items,index) => {
//   if(editBtn === "Edit"){
//     seteditBtn("Update");
//     settext(items)
    
//   }else{
//     seteditBtn("Edit");
//     tasks.splice(index,1,text)
//     settext("");
//   }
//  }

//   return (
//     <>
//       <div className="App App-header">
//         <h2> Todo List: </h2>
//         <div>
//           <input
//             placeholder="Enter task here..."
//             value={text}
//             onChange={handleOnChange}
//           />
//           <button onClick={addTsks}>Add </button>
//         </div>
//         <div>
//           {tasks.map((items, index) => {
//             return (
//               <p key={index}>
//                 {items}{" "}
//                 <button
//                   onClick={() => {
//                     editFnc(items,index);
//                   }}
//                 >
//                  {editBtn}
//                 </button>
//                 <button
//                   onClick={() => {
//                     deleteTasks(index);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </p>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
}

export default App;