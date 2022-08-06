import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddStudent from './Pages/AddStudent/AddStudent'
import Home from './Pages/Home/Home'
import Footer from './Pages/Shared/Footer'
import Navber from './Pages/Shared/Navber'
import Login from './Pages/Login/Login'
import RequireAuth from './Pages/Login/RequireAuth'
import StudentDetails from './Pages/Home/StudentDetails'
import Notice from './Pages/Notice/Notice'

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="addStudent"
          element={
            <RequireAuth>
              <AddStudent />
            </RequireAuth>
          }
        ></Route>
        <Route path="notice" element={<Notice />} />
        <Route
          path="student/:studentId"
          element={
            <RequireAuth>
              <StudentDetails />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
