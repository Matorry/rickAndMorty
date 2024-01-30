import { useContext, useEffect } from "react";
import { AppContext } from "../../context/app.context";
import Card from "../characterCard/characterCard";

export default function List() {
  const {
    charactersContext: { charactersQuery, loadCharacterQuery },
  } = useContext(AppContext);

  const getCurrentPage = () => {
    let currentPage =
      Number(
        charactersQuery?.info.next?.slice(
          charactersQuery?.info.next?.indexOf("=") + 1
        )
      ) - 1;
    if (isNaN(currentPage) && charactersQuery) {
      currentPage = charactersQuery?.info.pages;
    }

    return currentPage;
  };

  useEffect(() => {
    if (!charactersQuery?.results.length) {
      loadCharacterQuery("https://rickandmortyapi.com/api/character/?page=1");
    }
  }, [loadCharacterQuery, charactersQuery]);

  const handleNextPage = () => {
    if (charactersQuery?.info.next) {
      loadCharacterQuery(charactersQuery?.info.next);
    }
  };

  const handlePreviousPage = () => {
    if (charactersQuery?.info.prev) {
      loadCharacterQuery(charactersQuery?.info.prev);
    }
  };

  return (
    <>
      <ul>
        {charactersQuery?.results.map((element) => (
          <Card character={element} key={element.id}></Card>
        ))}
      </ul>
      <button onClick={handlePreviousPage}>-</button>
      <span>
        Page {getCurrentPage()}/{charactersQuery?.info.pages}
      </span>
      <button onClick={handleNextPage}>+</button>
    </>
  );
}
