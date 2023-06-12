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

  const onChangeId = (e) => {
    props.setId(e.target.value)
  } 

  const onChangeName = (e) => {
    props.setName(e.target.value)
  }

  return (
    <Container>
      <input type="number" placeholder="Buscar por id" onChange={(event)=> onChangeId(event)} />
      <input type="text" placeholder="Buscar por nome" onChange={(event) => onChangeName(event)} />
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
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
