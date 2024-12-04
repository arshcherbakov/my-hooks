import { AxiosResponse } from "axios";

const getUsers = (seacrh: string, page = 1): Promise<AxiosResponse> => {
  return fetch(`https://api.github.com/search/users?q=${seacrh}&page=${page}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export { getUsers };
