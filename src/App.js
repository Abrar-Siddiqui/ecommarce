import './App.css';
// import Banner from './componants/Banner';
import Form from './componants/Form';
import Home from './componants/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './componants/Login';


function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="Form" element={<Form />} />
          <Route path="Login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}
export default App;
