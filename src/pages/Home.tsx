import { useEffect } from "react";
import Conteudo from "../components/Conteudo/Conteudo";

export default function Home() {
  useEffect(() => {
    document.title = " Home | Design Fácil ";
  }, []);

  return <Conteudo />;
}
