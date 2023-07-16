

function Patient( {patient} ) {

    const { name, surname, email, admissionDate, symptoms } = patient

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
            <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
                <span className="font-normal normal-case"> {symptoms} </span>
            </p>
        </div>
    )
}

export default Patient