import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";


function Statisztika() {
    const [youngest, setYoungest] = useState({});
    const [oldest, setOldest] = useState({});
    const [averageAge, setAverageAge] = useState(0);
    const [errors, setErrors] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/api/people/stats", {
            headers: {
                Acccept: "application/json"
            }
        }).then(async response => {
            if (response.status !== 200) {
                setErrors("Hiba történt a statisztika lekérdezésekor");
            } else {
                const data = await response.json();
                setYoungest(data.youngest);
                setOldest(data.oldest);
                setAverageAge(data.averageAge);
                setErrors("");
            }
        })
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h4>Statisztika</h4>
                </div>
                <div className="card-body">
                    {
                        errors !== "" ?
                        <p className="text-danger">{errors}</p> :
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <th>Legfiatalabb:</th>
                                    <td>{youngest.name} ({youngest.age})</td>
                                </tr>
                                <tr>
                                    <th>Legidősebb:</th>
                                    <td>{oldest.name} ({oldest.age})</td>
                                </tr>
                                <tr>
                                    <th>Átlag életkor:</th>
                                    <td>{averageAge}</td>
                                </tr>
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    );
}

export default Statisztika;

if (document.getElementById("statisztika")) {
    const Index = ReactDOM.createRoot(document.getElementById("statisztika"));

    Index.render(
        <React.StrictMode>
            <Statisztika />
        </React.StrictMode>
    );
}
