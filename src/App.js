
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Mainpanel from './Mainpanel';
import User from './User';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Status from './Status';
import Updates from './Updates';
import AddProject from './AddProject';
import Proj from './Proj';




function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div class="container-fluid page-body-wrapper">
          <Sidebar></Sidebar>

          <Routes>
            <Route path="/" element={<Mainpanel />} />
            <Route path='/updates' element={<Updates />} />
            <Route path="/user" element={<User />} />
            <Route path='/status' element={<Status />} />
            <Route path='/add' element={<AddProject />} />
            <Route path='/proj' element={<Proj />} />
          </Routes>

        </div>

      </BrowserRouter>
    </div>

  );
}

export default App;
