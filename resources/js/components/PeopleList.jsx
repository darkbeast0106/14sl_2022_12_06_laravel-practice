import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import PersonDetailsModal from "./PersonDetailsModal";

function PeopleList() {
    const [personId, setPersonId] = useState(0);
    const [people, setPeople] = useState([]);
    useEffect(() => {
        listPeople();
    }, []);
    const deletePerson = (id) => {
        fetch(`/api/people/${id}`, {
            method: "DELETE",
            headers: {
                Acccept: "application/json",
            },
        }).then(async (response) => {
            if (response.status === 204) {
                listPeople();
            }
        });
    }
    const listPeople = () => {
        fetch(`/api/people`, {
            headers: {
                Acccept: "application/json",
            },
        }).then(async (response) => {
            if (response.status === 200) {
                const data = await response.json();
                setPeople(data);
            }
        });
    }

    const peopleList = [];
    people.forEach((person) => {
        peopleList.push(
            <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone_number}</td>
                <td>
                    <button
                        className="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#personDetailsModal"
                        onClick={() => setPersonId(person.id)}
                    >
                        Részletek
                    </button>
                    <a
                        href={`/people/${person.id}/edit`}
                        className="btn btn-outline-secondary"
                    >
                        Módosítás
                    </a>
                    <button onClick={() => deletePerson(person.id)} className="btn btn-outline-secondary">Törlés</button>
                </td>
            </tr>
        );
    });

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
                            <tbody>{peopleList}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PeopleList;

if (document.getElementById("peopleList")) {
    const element = document.getElementById("peopleList");
    const Index = ReactDOM.createRoot(element);
    Index.render(
        <React.StrictMode>
            <PeopleList />
        </React.StrictMode>
    );
}
