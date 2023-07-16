
function Form() {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
            <p className="text-lg mt-1 text-center mb-5">add patients and {''}
                <span className="font-bold text-indigo-600">manage them</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
                        placeholder="Patient's First Name" />
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
                        placeholder="Patient's Last Name" />
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
                        placeholder="Patient's Email" />
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
                        />
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
                    rows="5" 
                    placeholder="Describe the symptoms here..."
                    />
                </div>
                <input 
                className="bg-indigo-600 w-full mt-5 p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-all"
                type="submit" 
                value='Add Patient'/>
            </form>
        </div>
    )
}

export default Form