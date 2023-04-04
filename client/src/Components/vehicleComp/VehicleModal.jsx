import React, { useState } from 'react';
import  Modal from 'react-modal';
import '../../css/VehicleModal.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from 'axios';


const VehicleModal = ({ vehicle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [log] = useState(localStorage.getItem("loggedIn"));
  const [vehicles, setVehicles] = useState([]);

  const handleDelete = (id) => {

    axios.get(`http://localhost:3030/delete/${id}`).then((res) => {
      if (res.data.code === 200) {
        var newVehicles = vehicles.filter((ele) => ele._id !== id);
        setVehicles(newVehicles);
        navigate("/");
      } else {
        alert("Delete failed.");
      }
    });
  };


  return (
    <div className='mt-5'>

      <button className='vehicleCardBtnB' onClick={() => setIsOpen(true)}>Read More</button>
      

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >

        <button className='vehicleModalXBtn' onClick={() => setIsOpen(false)}>X</button>

        <div className='vehicleModalBoxs'>
        <div className='vehicleModalBox'>
        <p className='vehicleModalTitle'>{vehicle.name}</p>
        
        <div className='vehicleModalYPFK'>
        <p className='vehicleModalYear'>Year: {vehicle.year}</p>
        <p className='vehicleModalPrice'>Price: {vehicle.price}</p>
        <p className='vehicleModalFuel'>Fuel Type: {vehicle.fuel}</p>
        <p className='vehicleModalKm '>Km: {vehicle.km}</p> 
        </div>

        <div className='vehicleModalBoxD'>
        <p className='vehicleModalDes'>Description: <span className='vehicleModalDesSpan'>{vehicle.description}</span></p>
        </div>
        </div>
        <img className="vehicleModalImg" src={vehicle.image} alt="" />
        </div>
        <div className='vehicleModalBtns'>
        {!log ? (
                  <></>
                ) : (
                  <>
                  <Button
                      variant="warning"
                    >
                      <Link to={`/update/${vehicle._id}`} className="text-light">Update</Link>
                    </Button>
                    
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(vehicle._id)}
                     >
                      Delete
                    </Button>
                    </>
                )}
        </div>
      </Modal>
    </div>
  );
};

export default VehicleModal;
