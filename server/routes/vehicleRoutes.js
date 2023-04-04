const express = require("express");
const app = express();
const vehicleModel = require("../models/vehicle");


// Creating a vehicle card.
app.post("/vehicle", async (req, res) => {

  // Informations from input.
  const vehicleName = req.body.newVehicle.name;
  const vehicleYear = req.body.newVehicle.year;
  const vehiclePrice = req.body.newVehicle.price;
  const vehicleFuel = req.body.newVehicle.fuel;
  const vehicleKm = req.body.newVehicle.km;
  const vehicleDes = req.body.newVehicle.description;
  const vehicleImg = req.body.newVehicle.image;
  var vehicle = new vehicleModel(
    { name: vehicleName, 
      year: vehicleYear,
      price: vehiclePrice,
      fuel: vehicleFuel,
      km: vehicleKm,
      description: vehicleDes, 
      image: vehicleImg 
    });
  
  vehicle.save(function (error, vehicleCreated) {
    if (error) return console.error(error);
    try {

      res.send({ code: 200, vehicle: vehicleCreated });

    } catch (error) {

      res.status(500).send(error);
      
    }
  });
});


// Taking infos from database and shows them in shop.
app.get("/vehicles", async (req, res) => {

  const vehicles = await vehicleModel.find({});
  try {

    res.send({ code: 200, vehiclesD: vehicles });

  } catch (error) {

    res.status(500).send(error);

  }
});



app.post("/update", async (req, res) => {
  vehicleName = req.body.newVehicle.name;
  vehicleYear = req.body.newVehicle.year;
  vehiclePrice = req.body.newVehicle.price;
  vehicleFuel = req.body.newVehicle.fuel;
  vehicleKm = req.body.newVehicle.km;
  vehicleDes = req.body.newVehicle.description;
  vehicleImg = req.body.newVehicle.image;
  vehicleModel.updateOne(
    { _id: req.body.newVehicle.id },
    { name: vehicleName, year: vehicleYear, price: vehiclePrice, fuel: vehicleFuel, km: vehicleKm, description: vehicleDes, image: vehicleImg },
    function (err, vehicle) {
      if (err) return handleError(err);
      res.send({ code: 200, vehicle: vehicle });
    }
  );
});

// Updation of vehicle card.
app.get("/update/:id", async (req, res) => {

   // Takes the specific id to update a card.
  const id = req.params.id;

  const vehicle = await vehicleModel.findOne({ _id: id });
  try {
    res.send({ 
      code: 200, 
      vehicle: vehicle 
    });
    
  } catch (error) {

    res.status(500).send(error);

  }
});

// Deletion of vehicle card.
app.get("/delete/:id", async (req, res) => {
//  Takes the specific id to delete a card.
  const id = req.params.id;
  vehicleModel.remove({ _id: id }, function (error, data) {
    if (error) res.send({ code: 400, message: "User not found" });
    else
      res.send({
        code: 200,
        message: "Vehicle has been removed successfully",
      });
  });
});

module.exports = app;
