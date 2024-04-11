import Experiences from "../Expeiences";
import Informations from "../Informations";

export default function Main({ currentComponent }) {
  if (currentComponent === "informations" || currentComponent === "") {
    return <Informations />;
  } else if (currentComponent === "experiences") return <Experiences />;
}
