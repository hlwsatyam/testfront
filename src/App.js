import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [text, settext] = useState("hellow")
  useEffect(() => {
    // const fetchData = async () => {
    //   await axios.post("https://satyamnewsapi.onrender.com/table", { text }).then((res) => {
    //     console.log(res.data)
    //   })
    // }
    // fetchData()

    const fetchData = async () => {
      await axios.get("https://satyamnewsapi.onrender.com/").then((res) => {
        settext(res.data)

      })
    }
    fetchData()

  }, [text])


  const change = () => {
    settext("world!")

  }


  return (
    < div className="App" >
      <div className="App-header">
        Hey Data is Coming ? :
        <h1> {text} </h1>
        <button onClick={change}   >Send data To Backend!</button>
      </div>
    </ div >
  );
}
export default App;
