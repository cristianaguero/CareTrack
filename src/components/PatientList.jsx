import Patient from "./Patient"

function PatientList({ patients, setPatient }) {

    return (
        <div className="md:w-1/2 lg:w-3/5">

            {patients && patients.length ? (
                <>
                    <h2 className="text-3xl font-black text-center">Patient List</h2>
                    <p className="text-lg mt-1 text-center mb-5"> Manage your {''}
                        <span className="font-bold text-indigo-600">
                            patients and appointments
                        </span>
                    </p>

                    {patients.map(patient => <Patient key={patient.id} patient={patient} setPatient={setPatient} />)}
                </>
            ) : (
                <>
                    <h2 className="text-3xl font-black text-center">No patientes yet</h2>
                    <p className="text-lg mt-1 text-center mb-5"> Start by adding {''}
                        <span className="font-bold text-indigo-600">
                            patients and appointments
                        </span>
                    </p>
                </>
            )}
        </div>
    )
}

export default PatientList