import express from "express";
import realEstateController from "../controllers/realEstateController";
//import checkIfAuthenticated from "../middlewares/checkIfAuthenticated";

const realEstateRoute = express.Router();

// realEstateRoute.use(checkIfAuthenticated);

realEstateRoute.get("/list", realEstateController.list);

realEstateRoute.get("/get", realEstateController.get);

realEstateRoute.post("/create", realEstateController.post);

export default realEstateRoute;
