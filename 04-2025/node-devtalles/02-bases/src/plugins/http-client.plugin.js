const { default: axios } = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    const res = await axios.get(url);
    const { data } = res;
    return data;
  },
  post: async (url, body) => {},
};

/* const httpClientPlugin = {
  get: async (url) => {
    const res = await fetch(url);
    return await res.json();
  },

  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
}; */

module.exports = {
  httpClientPlugin,
};

