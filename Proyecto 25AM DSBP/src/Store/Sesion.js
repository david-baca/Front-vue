import axios from "axios";

const Link = "https://reqres.in/api/";

export default {
  register(email, password) {
    const user = { email, password };
    return axios.post(Link + "regiser", user);
  }
};
//nose como papas voy a implementar esto XD