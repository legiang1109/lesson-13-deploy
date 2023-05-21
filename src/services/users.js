import axios from "axios";

const API_DOMAIN = "https://645ba40ca8f9e4d6e76e9095.mockapi.io/users";

const createUser = async (data) => {
  return await axios.post(API_DOMAIN, data);
};

const getUser = async (user_name, password) => {
  return await axios.get(`${API_DOMAIN}`, {
    params: {
      user_name: user_name,
      password: password,
    },
  });
};

export { createUser, getUser };
