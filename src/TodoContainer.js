import React, { useState } from "react";

// const TodoContainer = (props) => {
//   if (typeof props.dataTodo == "string") {
//     var data = JSON.parse(props.dataTodo);
//   } else {
//     var data = props.dataTodo;
//   }
//   console.log("data");
//   console.log(data);
//   return (
//     <div>
//       {data.length === 0 ? (
//         <h1>You're all done here</h1>
//       ) : (
//         data.map((item) => (
//           <div key={item.createdAt}>
//             <input type="text" defaultValue={item.text}></input>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    if (typeof props.dataTodo == "string") {
      this.data = JSON.parse(props.dataTodo);
    } else {
      this.data = props.dataTodo;
    }
    console.log("data");
  }

  render() {
    return (
      <div>
        {this.data.length === 0 ? (
          <h1>You're all done here</h1>
        ) : (
          this.data.map((item) => (
            <div key={item.createdAt}>
              <input type="text" defaultValue={item.text}></input>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default TodoContainer;
