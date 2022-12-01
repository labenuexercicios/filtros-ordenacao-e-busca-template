import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
  body {
    background: #404040;
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const allPokes = pokemons.map((pokemon) => {
    return <PokemonCard
      cardColor={getColors(pokemon.type[0])}
      key={pokemon.id}
      pokemon={pokemon}
    />
  })

  const pokesFilteredById = pokemons.filter(pokemon => pokemon.id.includes(id))
    .map((pokemon) => {
      return <PokemonCard
        cardColor={getColors(pokemon.type[0])}
        key={pokemon.id}
        pokemon={pokemon}
      />
    })

  const pokesFilteredByName = pokemons.filter(pokemon => pokemon.name.english.toLowerCase().includes(name.toLowerCase()))
    .map((pokemon) => (
      <PokemonCard
        cardColor={getColors(pokemon.type[0])}
        key={pokemon.id}
        pokemon={pokemon}
      />
    ))

  return (
    <>
      <GlobalStyle />
      <Header id={id} setId={setId} name={name} setName={setName} />
      <CardsContainer>
        {id ? pokesFilteredById : name ? pokesFilteredByName : allPokes}
      </CardsContainer>
    </>
  );
}

export default App;
