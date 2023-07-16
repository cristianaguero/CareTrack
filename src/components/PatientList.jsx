import Patient from "./Patient"


function PatientList() {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="text-3xl font-black text-center">Patient List</h2>
            <p className="text-lg mt-1 text-center mb-5"> Manage your {''}
                <span className="font-bold text-indigo-600">
                    patients and appointments
                </span>
            </p>

            <div className="md:h-screen overflow-y-scroll">
            <Patient />
            <Patient />
            <Patient />
            </div>
        </div>
    )
}

export default PatientList