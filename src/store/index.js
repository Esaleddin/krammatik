import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    responseData: [],
  },
  mutations: {
    setUser(state, payload) {
      state.responseData = payload.response;
    },
  },
  actions: {
    async submitData(values) {
      //console.log(values);
      await axios
        .post("https://krammatik.deathsgun.xyz/auth/register", {
          username: values.email,
          password: values.password,
        })
        .then((response) => {
          console.log("test", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {},
});

export default store;
