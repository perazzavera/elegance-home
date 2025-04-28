import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Rodape from "../../components/Rodape";

export default function DefautPage() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Rodape />
    </>
  );
}
