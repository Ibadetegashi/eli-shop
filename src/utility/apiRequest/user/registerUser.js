import apiRequest from "../apiRequest";

const registerUser = async (email, password) =>
  await apiRequest.post("/users/register", {
    email,
    password,
  });

export default registerUser;
