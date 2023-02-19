import { useEffect, useState } from "react";

function PersonDetailsModal(props) {
    const emptyPerson = {
        name: "",
        email: "",
        address: "",
        phone_number: "",
        birth_date: "",
    };
    const { personId = 0 } = props;
    const [person, setPerson] = useState(emptyPerson);
    useEffect(() => {
        if (personId != 0) {
            fetch(`/api/people/${personId}`, {
                headers: {
                    Accept: "application/json",
                },
            }).then(async (response) => {
                const data = await response.json();
                if (response.status === 200) {
                    setPerson(data);
                }
            });
        }
    }, [personId]);
    return (
        <div className="modal" id="personDetailsModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{person.name}</h4>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
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
                                    <td>
                                        {person.birth_date.replaceAll(
                                            "-",
                                            ". "
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
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
