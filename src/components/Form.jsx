import { useState } from 'react'

function Form() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [admissionDate, setAdmissionDate] = useState('')
    const [symptoms, setSymptoms] = useState('')
    const [error, setError] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        if ([name, surname, email, admissionDate, symptoms].includes('')) {
            setError(true)
            return
        }
        
        setError(false)

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

                {error && <p className="bg-red-700 mb-5 uppercase font-bold text-white p-3 text-center rounded-md">All fields are required</p>}

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
                        onChange={ e => setName(e.target.value)}/>
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
                        onChange={ e => setSurname(e.target.value)}/>
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
                        onChange={ e => setEmail(e.target.value)}/>
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
                        onChange={ e => setAdmissionDate(e.target.value)}/>
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
                    onChange={ e => setSymptoms(e.target.value)}/>
                </div>
                <input 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-all"
                type="submit" 
                value='Add Patient'/>
            </form>
        </div>
    )
}

export default Form