interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}


function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  const handleClick = (name: string) => {
  setPokemonName(name);
  };

  return (
    <nav>
      

      {pokemonList.map((pmonster, index) => (
        <button key={index} onClick={() => handleClick(pmonster.name)}>
          {pmonster.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
