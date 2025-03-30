import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    const res = await axios.get(url);
    const { data } = res;
    return data;
  },
  post: async (url: string, body: any) => {},
  put: async (url: string, body: any) => {},
  delete: async (url: string) => {},
};
