import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard, Admin, Student, Parents, Teachers} from './Dashboard';
import { Students, AdmissionForm, AllStudents, StudentDetails, StudentPromotion } from './Students';

const PageBody = () => {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/dashboard/admin' element={<Admin/>}/>
        <Route path='/dashboard/student' element={<Student />}/>
        <Route path='/dashboard/parents' element={<Parents />}/>
        <Route path='/dashboard/teachers' element={<Teachers/>}/>

        
        <Route path='/students' element={<Students />}/>
        <Route path='/students/allStudents' element={<AllStudents/>}/>
        <Route path='/students/studentDetails' element={<StudentDetails />}/>
        <Route path='/students/admissionForm' element={<AdmissionForm />}/>
        <Route path='/students/studentPromotion' element={<StudentPromotion />}/>
      </Routes>
    </Router>
  )
}

export default PageBody