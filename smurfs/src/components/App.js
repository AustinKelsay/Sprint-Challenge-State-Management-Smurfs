import React, { useState, useEffect } from "react";
import axios from "axios";
import SmurfDisplay from "./SmurfDisplay";
import SmurfForm from "./SmurfForm";
import SmurfsContext from "../contexts/SmurfsContext";
import "./App.css";

function App() {
  const [smurfs, setSmurfs] = useState()

    useEffect(() => {
        axios
        .get(`http://localhost:3333/smurfs`)
        .then((res) => {
            console.log(res)
            setSmurfs(res.data)
        })
        .catch((err) => console.log(err))
    }, []);

    console.log(smurfs);

    return (
      <div className="App">
        {smurfs ?
        <SmurfsContext.Provider value={{smurfs}}>
          <SmurfForm />
          <SmurfDisplay />
        </SmurfsContext.Provider>
         : null}
      </div>
    );
}

export default App;
