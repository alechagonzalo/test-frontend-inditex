import { BASE_URL } from "./constants";

export const client = (url) => {
  return fetch(`${BASE_URL}${url}`).then(async (res) => {
    const data = await res.json();
    return data;
  });
};
