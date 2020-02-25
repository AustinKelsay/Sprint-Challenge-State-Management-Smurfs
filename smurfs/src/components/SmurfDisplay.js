import React, {useContext} from "react";
import SmurfsContext from "../contexts/SmurfsContext";
import "./App.css";

const SmurfDisplay = () => {
    const {smurfs} = useContext(SmurfsContext)
    console.log(smurfs);

    return smurfs.map((smurf) => {
        return(
            <div key={smurf.id} className="smurf">
                <p>{smurf.name}</p>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
            </div>)
    })
}

export default SmurfDisplay;