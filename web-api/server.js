import express from "express";
// eslint-disable-next-line no-unused-vars
import checkIfAuthenticated from "./api/middlewares/checkIfAuthenticated";
import getAuthToken from "./api/middlewares/getAuthToken";
import usersRouter from "./api/routes/usersRoute";
import cors from "cors";
import helmet from "helmet";
import realEstateRoute from "./api/routes/realEstateRoute";

const port = process.env.PORT || 4000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(getAuthToken);

app.use("/users", usersRouter);

app.use("/real-estate", realEstateRoute);

app.listen(port, () => {
  console.log(`Real estate api running on port ${port}`);
});