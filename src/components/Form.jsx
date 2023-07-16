
function Form() {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
            <p className="text-lg mt-3 text-center mb-10">add patients and {''}
                <span className="font-bold">manage them</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5">
                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="name">Name</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="name" type="text" placeholder="Patient's Name" />
                </div>
            </form>
        </div>
    )
}

export default Form