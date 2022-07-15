import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddStudent from './Pages/AddStudent/AddStudent';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navber from './Pages/Shared/Navber';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='addStudent' element={
          <RequireAuth>
            <AddStudent />
          </RequireAuth>
        }></Route>
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
