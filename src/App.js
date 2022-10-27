import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [buscaId, setBuscaId] = useState("")
  const [buscaNome, setBuscaNome] = useState("")
  const [ordenaNome, setOrdenaNome] = useState("")
  const [tipoPokemon, setTipoPokemon] = useState("")
  return (
    <>
      <GlobalStyle />
      <Header 
      buscaId={buscaId}
      setBuscaId={setBuscaId}
      buscaNome={buscaNome}
      setBuscaNome={setBuscaNome}
      ordenaNome={ordenaNome}
      setOrdenaNome={setOrdenaNome}
      tipoPokemon={tipoPokemon}
      setTipoPokemon={setTipoPokemon}
      />
      <CardsContainer>
        {pokemons
        .filter ((pokemon) => {
          return pokemon.name.english.toLowerCase().includes(buscaNome.toLowerCase())
        })
        .filter((pokemon) => pokemon.id.includes(buscaId)
        )
        //ordena nomes
        .sort((a, b) => {
           if(ordenaNome === "crescente"){
           if(a.name.english < b.name.english){
            return -1 
             }  else {
                return 1
              }
            } else if (ordenaNome === "decrescente"){
              if(a.name.english > b.name.english){
                return -1
                 }  else {
                    return 1
                  }

            }
          }
            
           
        )
        .filter((pokemon) =>{
         // console.log(pokemon) // type é um array
          return tipoPokemon ? pokemon.type.includes(tipoPokemon) : pokemon
        })
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App;
