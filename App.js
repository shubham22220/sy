// import React, {useState} from "react";

// const { createContext } = require("react");



// const App =()=>{
//     const state= useState();
// console.log(state);

// const [count,setCount]= useState(0);



// const IncNum=()=>{
//     setCount(count + 1);
    
//     // console.log('clicked' + count ++);
// };
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={IncNum}>CLICK ME</button>
//         </>
//     );
// };

// export default App;


// import React,{useState} from "react";


// const App = ()=>{
//     let newTime= new Date().toLocaleTimeString();

//     const [ctime,setCtime]=useState(newTime);
//     const UpdateTime=()=>{
//         newTime= new Date().toLocaleTimeString();
//         setCtime(newTime);
//     };
//     return(
//        <>
//        <h1>{ctime}</h1>
//        <button onClick={UpdateTime}>get time</button>
//        </>
//     );
// };

// export default App;


//DIGITAL CLOCK IN REACT

import React, { useState } from "react";

const App=()=>{
    let time=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
    const UpdateTime=()=>{
     time=new Date().toLocaleTimeString();
     setCtime(time);
    };


  setInterval(UpdateTime,1000)
    return(
        <>
         <h1>{ctime}</h1>
         
        </>
    );
    };

export default App;


// import React, { useState } from "react";

// const App=()=>{
//     const blue="#0000ff"
//     const  [bg, setBg]  =useState(blue);
//     const [name, setName]= useState("click me");
//     const bgChange =()=>{
//         // console.log('clicked');
//       let newBg ="#ffa500"
//       setBg(newBg);
//       setName('wow!!');
//     };

//     const bgBack=()=>{
//         setBg(blue);
//         setName("oho!!");
//     };

//     return(
//         <>
//         <div style={{backgroundColor: bg}}>
//             <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
//         </div>
//         </>
//     );
// };

// export default App;




//USE STATE IN REACT

// import { useState } from 'react';

// const App=()=>{
//     const [name, setName]= useState("");

//     const inputEvent=(event)=>{
//         console.log(event.target.value);
//         setName(event.target.value);
//     };
//     return(
//    <>
//        <div>
//            <h1>Hello</h1>
//            <input type = 'text' placeholder="Enter Your Name" 
//                onChange={inputEvent}
//                value=""
//            />
//            <button>click me</button>
//        </div>
//    </>
//     );

// };

// export default App;


