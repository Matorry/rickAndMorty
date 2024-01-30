import { Link } from "react-router-dom";
import { Character } from "../../model/character";

type Props = {
  character: Character;
};
export default function Card({ character }: Props) {
  return (
    <>
      <li>
        <Link to={`/character/${character.id}`}>
          <span>{character.name}</span>
        </Link>
      </li>
    </>
  );
}
