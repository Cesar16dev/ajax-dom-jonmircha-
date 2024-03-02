import { ajax } from "./helpers/ajax.js";
import api from "./helpers/wp_api.js";

export function App() {
  document.getElementById(
    "root"
  ).innerHTML = `<h1> Bienvenidos a mi 1er SPA con Vanilla Js</h1>`;
}

console.log(api);

ajax({
  url: api.POSTS,
  cbSuccess: (posts) => {
    console.log(posts);
  },
});
