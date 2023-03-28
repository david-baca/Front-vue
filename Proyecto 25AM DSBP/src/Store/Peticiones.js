import axios from "axios";

const Link = "https://localhost:7294/";

export default {
  register(email, password) {
    const user = { email, password };
    return axios.post(Link + "regiser", user);
  },
  async Consultar(entidad){
    const response = await axios.get(Link+entidad)
    const resultado = response.data.result;
    console.log(resultado)
    return resultado
  }
};
//nose como papas voy a implementar esto XD