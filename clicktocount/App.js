import React,{ useState} from 'react';
import './index.css';
let count =1;
const Count ="";



const App = () => {
  const state = useState();
  const [count,setcount] = useState(0);

  const Inc = () =>{
  
  setcount(count+1);

  }
  return(
    <>
    <div className="count">
    <h1>{count} </h1>
    <button onClick={Inc}>clik me</button>
    </div>
    </>
  )
  
}

export default App;