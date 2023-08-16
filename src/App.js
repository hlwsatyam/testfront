import logo from './logo.svg';
import './App.css';
import react, { useEffect } from 'react'
import axios from 'axios'
function App() {
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:8000/table").then((res) => {
        console.log(res.data)
      })
    }
    fetchData()
  }, [])
  return (
    < div className="App" >
      <div className="App-header">
        Hey Data is Coming ?
      </div>
    </ div >
  );
}
export default App;
