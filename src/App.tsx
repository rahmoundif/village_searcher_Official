import {useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { Header } from "./components/Header";


const pokemonList = [
  {
    name: "Marseille",
    imgSrc:
      "https://cdn.pixabay.com/photo/2019/11/08/17/12/marseille-4611887_1280.jpg",
    Demography: "877 215 habitants",
    Superficie:"240,62 km2",
    FunFact:"Marseille a été fondée il y a 2 600 ans par des Grecs de Phocée (aujourd’hui en Turquie). Ce qui fait de Marseille la plus ancienne ville de France. ",
  },
  {
    name: "Paris",
    imgSrc:
      "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg",
      Demography: "2 113 705 habitants",
    Superficie:"105,40 km2",
    FunFact:"Contrairement à la croyance populaire, la Tour Eiffel n’est en réalité pas le monument le plus visité de Paris ! La cathédrale Notre-Dame occupe la première place, suivie de la basilique du Sacré-Cœur et du musée du Louvre.",
  },
  {
    name: "Lyon",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/11/04/22/08/lyon-2918978_1280.jpg",
      Demography: "520 774 habitants",
    Superficie:"47,87 km2",
    FunFact:"Lyon abrite le restaurant le mieux classé depuis le plus longtemps. Le célèbre chef français Paul Bocuse a conservé ses 3 étoiles au guide Michelin pendant plus de 51 ans, faisant de son restaurant L’Auberge du Pont de Collonges le plus ancien des meilleurs restaurants. ",
  },
  {
    name: "Bordeaux",
    imgSrc:
      "https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548_1280.jpg",
      Demography: "1 022 534 habitants",
    Superficie:"49,36 km2",
    FunFact:"Le Miroir d’eau de Bordeaux, situé en face de la Place de la Bourse, est le plus grand miroir d’eau au monde. Il s’étend sur 3 450 m². ",
  },
  {
    name: "Toulouse",
    imgSrc:
      "https://cdn.pixabay.com/photo/2020/05/12/09/23/toulouse-5162034_1280.jpg",
      Demography: "511 684 habitants",
    Superficie:"118,3 km2",
    FunFact:"Surnommée la ville rose, Toulouse est célèbre pour ses bâtiments en briques de couleur terre cuite, qui lui confèrent un aspect unique et pittoresque.",
  },
  {
    name: "Strasbourg",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/04/26/13/30/strasbourg-1354439_1280.jpg",
      Demography: "291 709 habitants",
    Superficie:"78,26 km2",
    FunFact:"Strasbourg est un mélange unique de cultures française et allemande, car la ville est passée de l'une à l'autre à plusieurs reprises au cours de l'histoire. Cette fusion culturelle se reflète dans l'architecture, la cuisine et même le dialecte alsacien, qui combine des éléments français et allemands.",
  },
  {
    name: "Lille",
    imgSrc:
      "https://cdn.pixabay.com/photo/2017/08/20/00/14/lille-2660304_1280.jpg",
      Demography: "238 695 habitants",
    Superficie:"34,51 km2",
    FunFact:"Lille a été fondée au XIe siècle par le comte de Flandre, Baudouin V, comme ville forteresse pour se protéger des envahisseurs normands.",
  },
];


function App() {

  const [pokemonName, setPokemonName] = useState("Marseille");
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon === null) {
    throw new Error("Invalid pokemon name");
  }
  return (
    <>
      <Header setPokemonName={setPokemonName} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemon} />
    </>
  );
}

export default App;
