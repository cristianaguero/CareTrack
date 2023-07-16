import Header from "./components/Header"
import Form from "./components/Form"
import Patients from "./components/Patients"

function App() {

  return (
    <div className="container mx-auto mt-16">
      <Header />

      <div className='mt-12 md:flex'>
        <Form />
        <Patients />
      </div>
    </div>
  )
}

export default App
