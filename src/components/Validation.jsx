
function Validation({ errorMessage }) {
    return (
        <div>
            <p className="bg-red-700 mb-5 uppercase font-bold text-white p-3 text-center rounded-md">
                {errorMessage}
            </p>
        </div>
    )
}

export default Validation