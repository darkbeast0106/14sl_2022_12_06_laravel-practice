function DeletePersonButton(props) {
    const { personId, listFunction } = props;
    const deletePerson = () => {
        fetch(`/api/people/${personId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
            },
        }).then(response => {
            if (response.status === 204) {
                listFunction();
            }
        });
    }

    return (
        <button onClick={() => deletePerson()} className="btn btn-outline-secondary">
            Törlés
        </button>
    );
}

export default DeletePersonButton;
