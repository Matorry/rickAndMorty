import { AppRoutes } from "../app.routes/app.routes";
import { MenuOption } from "../types/menu.option";
import "./App.css";

function App() {
  const menuOptions: MenuOption[] = [
    { path: "/characters", label: "Characters" },
    { path: "/character/:id", label: "Character info" },
  ];
  return (
    <>
      <AppRoutes options={menuOptions}></AppRoutes>
    </>
  );
}

export default App;
