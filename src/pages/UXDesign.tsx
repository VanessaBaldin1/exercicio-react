import { useEffect } from "react";

export default function UXDesign() {
  useEffect(() => {
    document.title = " UXDesign | Design Fácil";
  });

  return (
    <section>
      <h2>O que faz um UX Designer?</h2>

      <p>
        O <strong>UX Designer</strong> (User Experience Designer) é o
        profissional responsável por planejar e melhorar a experiência do
        usuário em produtos digitais, como sites e aplicativos.
      </p>

      <p>
        Seu foco é tornar a navegação simples, funcional e agradável, combinando
        pesquisa, testes, design e empatia para atender às necessidades reais
        dos usuários.
      </p>
    </section>
  );
}
