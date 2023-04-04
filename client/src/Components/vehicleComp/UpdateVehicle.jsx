import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

const UpdateVehicle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [vehicle, setVehicle] = useState("");
  const [year, setYear] = useState("");
  const [price, setVehiclePrice] = useState("");
  const [fuel, setVehicleFuel] = useState("");
  const [km, setVehicleKm] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState("");


  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      alert("Please enter your credentials!");
      navigate("/");
    }
    const fetchData = async () => {
      try {
        const data = await axios.get(`http://localhost/update/${id}`);
        if (data) {
          setVehicle(data.data.vehicle.name);
          setYear(data.data.vehicle.year);
          setVehiclePrice(data.data.vehicle.price);
          setVehicleFuel(data.data.vehicle.fuel);
          setVehicleKm(data.data.vehicle.km);
          setDescription(data.data.vehicle.description);
          setSelectedFile(data.data.vehicle.img)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [navigate, id]);

  // Images
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();
      // Convert the file to base64 text
      reader.readAsDataURL(file);
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  // On file select (from the pop up)
  const onFileChange = (e) => {
    // Update the state
    let file = e.target.files[0];
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setSelectedFile(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var newVehicle = {
      id: id,
      name: vehicle,
      year: year,
      price: price,
      fuel: fuel,
      km: km,
      description: description,
      image: selectedFile,
    };
    axios.post("http://localhost:3030/update", { newVehicle }).then((res) => {
      if (res.data.code === 200) {
        navigate("/");
      } else {
        alert("Ky vendi nuk u ndryshua");
      }
    });
  };

  return (
    <div className="createVehicleMainDiv">

        <form className="ContactFormContainer">
              
              <div className="ContactImageMainDiv">
                <div className="ContactImageDiv">
                {selectedFile && selectedFile !== "" && (
                  <img
                    style={{ height: "210px" }}
                    src={selectedFile}
                    alt=""
                  />
                )}
              </div>
              </div>
                  
                
                <div className="ContactModelYearPriceDiv">
                <div className="ContactInputStyle">
                  <p>Vehicle Model Name</p>
                  <input
                    type="text"
                    onChange={(e) => setVehicle(e.target.value)}
                    value={vehicle}
                    placeholder="Enter name"
                    className="createVehicleInput"
                  />
                </div>
                <div className="ContactInputStyle">
                  <p>Year</p>
                  <input
                    type="number"
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                    placeholder="Enter the year of vehicle."
                    className="createVehicleInput"
                  />
                </div>
                <div className="ContactInputStyle">
                  <p>Price</p>
                  <input
                    type="text"
                    onChange={(e) => setVehiclePrice(e.target.value)}
                    value={price}
                    placeholder="Enter the price of vehicle."
                    className="createVehicleInput"
                  />
                </div>
                </div>
    
                <div className="ContactModelFuelKmDiv">
                <div className="ContactInputStyle">
                  <p>Fuel</p>
                  <input
                    type="text"
                    onChange={(e) => setVehicleFuel(e.target.value)}
                    value={fuel}
                    placeholder="Enter the Fuel type of vehicle."
                    className="createVehicleInput"
                  />
                </div>
                <div className="ContactInputStyle">
                  <p>Km</p>
                  <input
                    type="number"
                    onChange={(e) => setVehicleKm(e.target.value)}
                    value={km}
                    placeholder="Enter the km of vehicle."
                    className="createVehicleInput"
                  />
                </div>
                <div className="ContactInputStyle" controlId="formFile">
                  <p>Image</p>
                  <input type="file" className="createVehicleInput" onChange={onFileChange} />
                </div>
    
                </div>
                      
                <div className="ContactInputDesStyle">
                  <p>Description</p>
                  <textarea
                    type="textarea" rows={3} 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Enter description for the vehicles"
                    className="createVehicleInputDes"
                  />
                </div>
    
                <button className="createVehicleAddBtn" onClick={handleSubmit}>Update</button>
              
              </form>

        <Col xs={12} md={6}>
          <Container className="mt-5">
            {selectedFile && selectedFile !== "" && (
              <img
                className="img-fluid imgUpdate"
                style={{ height: "400px" }}
                src={selectedFile}
                alt=""
              />
            )}
          </Container>
        </Col>

    </div>
  );
};

export default UpdateVehicle;
