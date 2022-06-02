import {useState} from 'react'
function App() {
  const [count,setCount] = useState(0)
  function upCount(){
    setCount(count+1)
  }
  function downCount(){
    setCount(count-1)
  }
  return (
    <div className="counter">
    <button onClick={upCount}> up </button>
    <button onClick={downCount}> down </button>
    <h1> counter: {count} </h1>
    </div>
  );
}

export default App;
