import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    const res = await axios.get(url);
    const { data } = res;
    return data;
  },
  post: async (url: string, body: any) => {
    throw new Error("Not implemented");
  },
  put: async (url: string, body: any) => {
    throw new Error("Not implemented");
  },
  delete: async (url: string) => {
    throw new Error("Not implemented");
  },
};
