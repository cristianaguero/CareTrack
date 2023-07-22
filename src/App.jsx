import { useState, useEffect } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    function getPatients() {
      const patientsLocalStorage = JSON.parse(localStorage.getItem('patients')) || []
      setPatients(patientsLocalStorage)
    }
    getPatients()
  }, [])

  useEffect(()  => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  function deletePatient(id) {
    const patientsFiltered = patients.filter(patient => patient.id !== id)
    setPatients(patientsFiltered)
  }



  return (
    <div className="container mx-auto mt-16">
      <Header />

      <div className='mt-12 md:flex'>
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList 
        patients={patients}
        setPatient={setPatient}
        deletePatient={deletePatient} />
      </div>
    </div>
  )
}

export default App
