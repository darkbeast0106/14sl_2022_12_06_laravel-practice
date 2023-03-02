import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PersonDetailsModal(props) {
    const { personId } = props;
    const [person, setPerson] = useState({
        name: "",
        email: "",
        address: "",
        phone_number: "",
        birth_date: "",
    });
    useEffect(() => {
        if (personId == 0) {
            setPerson({
                name: "",
                email: "",
                address: "",
                phone_number: "",
                birth_date: "",
            });
            return;
        }
        fetch(`/api/people/${personId}`, {
            headers: {
                Acccept: "application/json",
            },
        }).then(async (response) => {
            if (response.status === 200) {
                const data = await response.json();
                setPerson(data);
            }
        });
    }, [personId]);

    return (
        <div className="modal" tabindex="-1" id="personDetailsModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{person.name}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-hover table-striped">
                            <tbody>
                                <tr>
                                    <th>E-mail</th>
                                    <td>{person.email}</td>
                                </tr>
                                <tr>
                                    <th>Lakcím</th>
                                    <td>{person.address}</td>
                                </tr>
                                <tr>
                                    <th>Telefonszám</th>
                                    <td>{person.phone_number}</td>
                                </tr>
                                <tr>
                                    <th>Születési dátum</th>
                                    <td>{person.birth_date}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonDetailsModal;
/*
if (document.getElementById("personDetails")) {
    const element = document.getElementById("personDetails");
    const Index = ReactDOM.createRoot(element);
    const personId = element.getAttribute("personId");
    Index.render(
        <React.StrictMode>
            <PersonDetailsModal personId={personId} />
        </React.StrictMode>
    );
}
*/
