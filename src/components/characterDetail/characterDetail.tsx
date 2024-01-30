import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import { Character } from "../../model/character";

export default function Details() {
  const characterId = useParams();

  const {
    charactersContext: { charactersQuery },
  } = useContext(AppContext);

  let character: Character | undefined;

  if (charactersQuery) {
    character = charactersQuery.results.find(
      (character) => character.id === Number(characterId.id)
    );
  }

  return (
    <>
      <span>{character?.name}</span>
      <Link to={`/characters`}>Back</Link>
      <span>Location: {character?.location.name}</span>
    </>
  );
}
