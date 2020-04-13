import string from "./models/Search";
// import {add as a, multiply as m, ID} from "./views/searchView";
import * as searchView from "./views/searchView";
import axios from "axios";

console.log(
  `using imported functions ${searchView.add(
    searchView.ID,
    2
  )} and ${searchView.multiply(3, 5)} ${string}`
);

async function getResults(query) {
  try {
    const res = await axios(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}
getResults("pizza");
