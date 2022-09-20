import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Landingpage } from './components/Landingpage/Landingpage';

function App() {

  const [newdata, setNewdata] = useState([]);

  async function getdata() {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((res) => {
        setNewdata(res.data.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="App">
   <Landingpage props={{newdata,getdata}}/>
    </div>
  );
}

export default App;
