import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

const onChangeId = (e) =>{
  props.setBuscaId(e.target.value)
}

const onChangeNome = (e) => {
  props.setBuscaNome(e.target.value)
}

const onChangeOrdena = (e) => {
  props.setOrdenaNome(e.target.value)
}

const onChangeTipo = (e) => {
  props.setTipoPokemon(e.target.value)
}


  return (
    <Container>
      <input 
      type="number" 
      placeholder="Buscar por id"
      value={props.buscaId}
      onChange={onChangeId}
      />
      <input type="text" 
      placeholder="Buscar por nome"
      value={props.buscaNome}
      onChange={onChangeNome} 
      />
      <select value={props.ordenaNome} onChange={onChangeOrdena}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select value={props.tipoPokemon} onChange={onChangeTipo} name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
