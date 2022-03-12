import apiRequest from "../apiRequest";
import { getAuth } from "firebase/auth";

const getRealEstateList = async () => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiRequest.get("real-estate/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getRealEstateList;
