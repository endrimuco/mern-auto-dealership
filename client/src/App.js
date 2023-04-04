import NavigateBar from "./NavigateBar/NavigateBar";
import { Route, Routes } from "react-router-dom";
import './css/styles.css';
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import About from "./Components/About";
import ContactUs from './Components/Contact';
import LogIn from './Components/Login';
import Register from './Components/Register';
import CreateVehicle from './Components/vehicleComp/CreateVehicle';
import VehicleDetail from './Components/vehicleComp/VehicleDetail';
import UpdateVehicle from './Components/vehicleComp/UpdateVehicle';

 function App() {
  return (
    <>
      <NavigateBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createVehicle" element={<CreateVehicle />} />
        <Route path="/update/:id" element={<UpdateVehicle />} />
        <Route path="/vehicles/:id" element={<VehicleDetail />} />
      </Routes>
    </>
  );
 }

export default App;
