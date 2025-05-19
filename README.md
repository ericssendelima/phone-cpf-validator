# CPF / Phone Transformer & Validator (Em Desenvolvimento) 🚀

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://phone-cpf-validator.vercel.app/)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Transforme e visualize CPFs e números de telefone com facilidade!** ✨

**[🎉 VEJA O DEMO ONLINE AQUI! 🎉](https://phone-cpf-validator.vercel.app/)**

## 👋 Olá! Sobre o Projeto

Bem-vindo ao **CPF / Phone Transformer & Validator**! Este projeto nasceu de uma necessidade real e de um bate-papo com um amigo professor que, como muitos de nós, enfrentava o desafio de lidar com cadastros onde CPFs e números de telefone eram inseridos com ou sem a formatação padrão (pontos, traços, parênteses).

A primeira grande missão desta ferramenta é **transformar inteligentemente** essas strings:
*   Se você digitar um CPF ou telefone **com** a pontuação, ele mostrará a versão **sem** a pontuação.
*   Se você digitar **sem** a pontuação, ele magicamente adicionará a formatação correta para você!

O objetivo é simplificar a vida, garantir consistência nos dados e economizar aqueles preciosos segundos (ou minutos!) que gastamos ajustando esses formatos manualmente.

**Nota Importante sobre o Nome "Validator":**
Atualmente, o foco principal da aplicação é a **transformação inteligente** e a formatação dos dados de CPF e telefone. Embora existam validações de formato iniciais para garantir que a entrada se assemelhe a um CPF/telefone, uma validação completa e profunda (como checagem de dígitos verificadores de CPF, por exemplo) ainda está em desenvolvimento. Considero este um projeto em **constante evolução**, e a funcionalidade de validação mais robusta é um dos próximos passos emocionantes que planejo! 🚀

## ✨ Funcionalidades Atuais

*   **Transformação de CPF:**
    *   Entrada com pontuação (ex: `123.456.789-00`) -> Saída sem pontuação (`12345678900`).
    *   Entrada sem pontuação (ex: `12345678900`) -> Saída com pontuação (`123.456.789-00`).
*   **Transformação de Telefone (Fixo e Celular):**
    *   Entrada com pontuação (ex: `(81)1234-5678` ou `(81)91234-5678`) -> Saída sem pontuação (`8112345678` ou `81912345678`).
    *   Entrada sem pontuação (ex: `8112345678` ou `81912345678`) -> Saída com pontuação (`(81)1234-5678` ou `(81)91234-5678`).
*   **Interface Limpa e Intuitiva:** Desenvolvida com React e estilizada com Tailwind CSS para uma experiência agradável.
*   **Copiar com Um Clique:** Copie facilmente o resultado transformado para a sua área de transferência.
*   **Feedback Visual:** Indicações claras sobre o formato esperado caso a entrada não corresponda inicialmente.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias incríveis:

*   **[React.js](https://reactjs.org/):** Uma biblioteca JavaScript para construir interfaces de usuário.
*   **[Tailwind CSS](https://tailwindcss.com/):** Um framework CSS utilitário para estilização rápida e moderna.
*   **JavaScript (ES6+):** A linguagem que dá vida à lógica do projeto.
*   **Expressões Regulares (Regex):** Para a mágica da validação e extração de padrões.
*   **[Vercel](https://vercel.com/):** Plataforma onde o demo online está hospedado com maestria!

## 🚀 Como Rodar Localmente

Quer dar uma espiada no código e rodar o projeto na sua máquina? É super simples!

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/ericssendelima/phone-cpf-validator.git
    cd phone-cpf-validator
    ```

2.  **Instale as Dependências:**
    (Este projeto usa `npm`, mas sinta-se à vontade para usar `yarn` se preferir)
    ```bash
    npm install
    ```

3.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    npm start
    ```
    Isso geralmente abrirá o projeto no seu navegador em `http://localhost:3000`.

E pronto! Você está pronto para explorar e talvez até contribuir!

## 🌱 Próximos Passos e Contribuições (Em Desenvolvimento)

Este projeto é um ser vivo e adoraríamos vê-lo crescer! Alguns dos próximos passos planejados incluem:

*   [ ] Implementar validação completa de dígitos verificadores para CPF.
*   [ ] Adicionar mais opções de formatação ou tipos de documentos (CNPJ, CEP?).
*   [ ] Refinar ainda mais as expressões regulares para cobrir mais casos de uso.
*   [ ] Escrever testes unitários para garantir a robustez das transformações.
*   [ ] Melhorar a acessibilidade da interface.

**Contribuições são SUPER bem-vindas!** Se você tem ideias, sugestões ou quer ajudar a implementar novas funcionalidades, sinta-se à vontade para:
*   Abrir uma **Issue** para discutir sua ideia.
*   Fazer um **Fork** do projeto e enviar um **Pull Request** com suas melhorias.

Vamos construir algo ainda mais incrível juntos!

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) (você precisará criar este arquivo!) para mais detalhes.

---

Criado com ❤️ e muito código por **[Yalê Ericssen](https://github.com/ericssendelima)**.

Um agradecimento especial ao meu amigo Douville, cuja necessidade inspirou esta ferramenta!