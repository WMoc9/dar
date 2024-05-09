import { REACT_APP_API_URL } from "../utils/consts";
import { $host } from "./index";

export const fetchAllRecipes = async () => {
  const { data } = await $host.get(REACT_APP_API_URL);
  return data;
};

export const fetchOneRecipe = async (id) => {
  const { data } = await $host.get(REACT_APP_API_URL + `/${id}`);
  return data;
};

export const fetchRecipesWithLimitAndSkip = async (limit, skip) => {
  const { data } = await $host.get(
    REACT_APP_API_URL + `?limit=${limit}&skip=${skip}`
  );
  return data;
};
