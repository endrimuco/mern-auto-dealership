// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Button, Row, Col } from "react-bootstrap";
// import { useParams,  useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// const VehicleDetail = () => {
//   const navigate = useNavigate();
//   const [vehicles, setVehicles] = useState([]);


//   const { id } = useParams();
//   const [log] = useState(localStorage.getItem("loggedIn"));

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await axios.get("http://localhost:3030/vehicles");
//         // "vehiclesD" is used to transfer information.
//         setVehicles(data.data.vehiclesD);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [])

//     // Delete vehicle card --- start ---
//     const handleDelete = (id) => {
//       axios.get(`http://localhost:3030/delete/${id}`).then((res) => {
//         if (res.data.code === 200) {
//           var newVehicles = vehicles.filter((ele) => ele._id !== id);
//           setVehicles(newVehicles);
//           navigate("/");
//         } else {
//           alert("Delete failed.");
//         }
//       });
//     };
//   // Delete vehicle card --- end ---
//   return (
//     <div>
//     {vehicles
//         .filter((vehicle) => String(vehicle._id) === id)
//         .map((vehicle, index) => {
//           return (
//             <Row>
//               <Col xs={12} md={2}>
//                 <h1>{vehicle.name}</h1>
//                 <p>{vehicle.year}</p>
//                 <p>{vehicle.price}</p>
//                 <p>{vehicle.fuel}</p>
//                 <p>{vehicle.km}</p>
//                 <p>{vehicle.description}</p>
//                 {!log ? (
//                   <></>
//                 ) : (
//                   <>
//                   <Button
//                       variant="warning"
//                     >
//                       <Link to={`/update/${vehicle._id}`} className="text-light">Update</Link>
//                     </Button>
//                     <Button
//                       variant="danger"
//                       onClick={() => handleDelete(vehicle._id)}
//                      >
//                       Delete
//                     </Button>
//                     </>
//                 )}
//               </Col>
//               <Col xs={12} md={6}>
//                 <img
//                   src={vehicle.image}
//                   className= "img-fluid"
//                   alt="Text"
//                   wi
//                 />
//               </Col>
//             </Row>
//           );
//         })} 
//     </div>
//   );
// };

// export default VehicleDetail;
