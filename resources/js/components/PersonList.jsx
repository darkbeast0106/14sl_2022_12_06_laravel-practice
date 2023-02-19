import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import PersonDetailsModal from "./PersonDetailsModal";
import DeletePersonButton from "./DeletePersonButton";

function PersonList() {
    const [people, setPeople] = useState([]);
    const [personId, setPersonId] = useState(0);
    const listPeople = () => {
        fetch(`/api/people`, {
            headers: {
                Accept: "application/json",
            },
        }).then(async (response) => {
            const data = await response.json();
            if (response.status === 200) {
                setPeople(data);
            }
        });
    }

    useEffect(() => {
        listPeople();
    }, []);

    return (
        <>
            <PersonDetailsModal personId={personId} />
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4>Emberek</h4>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Név</th>
                                    <th>E-mail</th>
                                    <th>Telefonszám</th>
                                    <th>Műveletek</th>
                                </tr>
                            </thead>
                            <tbody>
                                {people.map((person) => (
                                    <tr key={person.id}>
                                        <td>{person.id}</td>
                                        <td>{person.name}</td>
                                        <td>{person.email}</td>
                                        <td>{person.phone_number}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    setPersonId(person.id)
                                                }
                                                data-bs-toggle="modal"
                                                data-bs-target="#personDetailsModal"
                                                className="btn btn-outline-secondary"
                                            >
                                                Részletek
                                            </button>
                                            <a
                                                href={`/people/${person.id}/edit `}
                                                className="btn btn-outline-secondary"
                                            >
                                                Módosítás
                                            </a>
                                            <DeletePersonButton personId={person.id} listFunction={listPeople} />
                                        </td>
                                    </tr>)
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonList;

if (document.getElementById("personList")) {
    const Index = ReactDOM.createRoot(document.getElementById("personList"));

    Index.render(
        <React.StrictMode>
            <PersonList />
        </React.StrictMode>
    );
}
