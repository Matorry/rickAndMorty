import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MenuOption } from "../types/menu.option";

const CharactersPage = lazy(
  () => import("../components/characterList/characterList")
);
const CharactersDetailsPage = lazy(
  () => import("../components/characterDetail/characterDetail")
);

type Props = {
  options: MenuOption[];
};
export function AppRoutes({ options }: Props) {
  const paths = options.map((item) => item.path);
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<CharactersPage></CharactersPage>}></Route>
        <Route
          path={paths[0]}
          element={<CharactersPage></CharactersPage>}
        ></Route>
        <Route
          path={paths[1]}
          element={<CharactersDetailsPage></CharactersDetailsPage>}
        ></Route>
        <Route path="*" element={<CharactersPage></CharactersPage>}></Route>
      </Routes>
    </Suspense>
  );
}
