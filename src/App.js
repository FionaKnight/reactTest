import React, {useState, useEffect} from 'react';
import logo from './logo.jpg';
import './App.css';
import Rescue from './Rescue/Rescue';


function App() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    let uri = window.location.search.substring(1); 
    let params = new URLSearchParams(uri);
    let myURL;
    console.log(params);
    if (params===null) {
      myURL = 'https://fionaknight.github.io/jsondata/animal3.json';
    } else {
      myURL = `https://fionaknight.github.io/jsondata/${params.get("file")}.json`;
    }
   

    fetch(myURL).then(function(jresponse) {
    if (jresponse.ok) {
            jresponse.json().then(function(json) {
              setAnimals(json);
            });
        } else {
            console.log("Error getting file " + jresponse.status + ": " + jresponse.statusText);
        }
    });
});

return (
    <div className="App">
        <img src={logo} className="App-logo" alt="Bee Happy Logo" />
        <div id="container">
        <Rescue animals={animals} />
        </div>
    </div>
  );
}

export default App;
