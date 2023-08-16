import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [text, , setText] = useState("hellow")
  useEffect(() => {

    const fetchData = async () => {
      await axios.post("http://localhost:8000/table", { text }).then((res) => {
        console.log(res.data)
      })
    }
    fetchData()
  }, [text])
  return (
    < div className="App" >
      <div className="App-header">
        Hey Data is Coming ?

        <button>Send data To Backend!</button>
      </div>
    </ div >
  );
}
export default App;
