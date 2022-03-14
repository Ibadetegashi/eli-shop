import apiRequest from "../apiRequest";

const registerUser = async (name,email, password) => {

  const respons = await apiRequest.post("/users/register", {
    name,
    email,
    password,
 });
  return respons.data
}
export default registerUser;
