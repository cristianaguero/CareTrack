

function Patient( {patient, setPatient, deletePatient} ) {

    const { name, surname, email, admissionDate, hour, symptoms, id } = patient

    function handleDelete() {
        const confirm = window.confirm('Are you sure you want to delete this patient?')
        if(confirm) {
            deletePatient(id)
        }
    }

    return (
        <div className="mx-5 mb-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
                <span className="font-normal normal-case"> {name} </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Surname: {''}
                <span className="font-normal normal-case"> {surname} </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case"> {email} </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Date: {''}
                <span className="font-normal normal-case"> {admissionDate} </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Hour: {''}
                <span className="font-normal normal-case"> {hour} </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
                <span className="font-normal normal-case"> {symptoms} </span>
            </p>

            <div className="flex justify-between mt-10">
                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() =>setPatient(patient)}>
                    Edit
                </button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={handleDelete}>
                    Delete
                </button>
            </div>

        </div>
    )
}

export default Patient