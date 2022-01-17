import axios from "axios";
import qs from "qs";

const base_url = "https://her-shreersc-express-server.herokuapp.com/v1/admin";

// ------------------- Brand Management API ---------------------

const registerStudent = async (data) => {
  console.log(data);
  let response = axios.post(base_url + "/registerStudent", qs.stringify(data),  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  
  },
  
  
  );
  return response;
};

export default {
    registerStudent,
}