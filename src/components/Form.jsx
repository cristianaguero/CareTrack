import { useState, useEffect } from 'react'
import Validation from './Validation'

function Form({ patients, setPatients, patient, setPatient }) {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [admissionDate, setAdmissionDate] = useState('')
    const [symptoms, setSymptoms] = useState('')
    const [validation, setValidation] = useState(false)

    useEffect(() => {
        if (Object.keys(patient).length) {
            const { name, surname, email, admissionDate, symptoms } = patient
            setName(name)
            setSurname(surname)
            setEmail(email)
            setAdmissionDate(admissionDate)
            setSymptoms(symptoms)
        }
    }, [patient])

    function createId() {
        const date = Date.now().toString(36).substring(2)
        const random = Math.random().toString(36).substring(2)
        return date + random
    }

    function handleSubmit(e) {
        e.preventDefault()

        if ([name, surname, email, admissionDate, symptoms].includes('')) {
            setValidation(true)
            return
        }

        setValidation(false)

        const patientObject = {
            name,
            surname,
            email,
            admissionDate,
            symptoms
        }

        if(patient.id) {
            patientObject.id = patient.id
            const patientsEdited = patients.map(item => item.id === patient.id ? patientObject : item)
            setPatients(patientsEdited)
            setPatient({})
        } else {
            patientObject.id = createId()
            setPatients([ patientObject, ...patients ])
        }    

        setName('')
        setSurname('')
        setEmail('')
        setAdmissionDate('')
        setSymptoms('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
            <p className="text-lg mt-1 text-center mb-5">Add patients and {''}
                <span className="font-bold text-indigo-600">manage them</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                {validation && <Validation
                                    errorMessage={'All fields are required'}
                                />}

                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="name">
                        Name
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="name"
                        type="text"
                        placeholder="Patient's First Name"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="surname">
                        Surname
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="surname"
                        type="text"
                        placeholder="Patient's Last Name"
                        value={surname}
                        onChange={e => setSurname(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="email">
                        Email
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="email"
                        type="email"
                        placeholder="Patient's Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="surname">
                        Admission Date
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="surname"
                        type="date"
                        value={admissionDate}
                        onChange={e => setAdmissionDate(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="symptoms">
                        Symptoms
                    </label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        name="symptoms"
                        id=""
                        cols="30"
                        rows="2"
                        placeholder="Describe the symptoms here..."
                        value={symptoms}
                        onChange={e => setSymptoms(e.target.value)} />
                </div>
                <input
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-all"
                    type="submit"
                    value={ patient.id ? 'Edit Patient' : 'Add Patient' } />
            </form>
        </div>
    )
}

export default Form