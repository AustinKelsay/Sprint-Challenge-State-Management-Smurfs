import React, {useState} from "react"
import Axios from "axios";

const SmurfForm = () => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChange = (event) => {
        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value
        })
        console.log(smurf);
      };

    const handleSubmit = (event) => {
        console.log(smurf)
        if (smurf.name && smurf.age && smurf.height) {
            Axios
            .post(`http://localhost:3333/smurfs`, {
                ...smurf,
                id: Date.now()
            })
            .then((res) => {console.log(res)})
            .catch((err) => {console.log(err)})
        }
    }
    
    return(
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name:
                    <input type="text" name="name" value={smurf.name} onChange={handleChange} />
                </label>
                <label>
                    Age:
                    <input type="text" name="age" value={smurf.age} onChange={handleChange} />
                </label>
                <label>
                    Height
                    <input type="text" name="height" value={smurf.height} onChange={handleChange} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default SmurfForm;