# divide-ai

This project aims to progressively implement a web application that will manage shared expenses in a residence. Users will be able to register their expenses (e.g., water, electricity, groceries) along with the expense amount, a brief description, and the number of residents. The application will calculate the total expense and divide it among the residents, generating the amount to be paid by each member of the household.

The frontend of the application will be developed using Angular, and the backend will be simulated using a Fake API implementation with JSON Server.

## Deployment Address - GitHub Pages
You can access the project through [this link](https://carlosportella16.github.io/divide-ai/inicio).

## Prototype
You can view the project's layout through [this link](https://www.figma.com/file/bq4ZNSyDEdcDzWxoQawcXn/Divide-ai?node-id=0%3A1). A [Figma](https://figma.com) account is required to access it.

## Checklist
- [x] Create the GitHub repository with the Gitflow structure, i.e., main and develop branches.
- [x] Use components from a CSS framework (Bootstrap, Materialize, or others).
- [x] Present responsive layouts for the screens, using CSS frameworks or not.
- [x] Build web pages with the concept of components.
- [x] Create the application layout using components, meaning the header and footer should be components.
- [x] Use at least two types of data binding (Interpolation, Property Binding, Event Binding, and Two Way Data Binding).
- [x] Pass data through component hierarchy using @Input or @Output.
- [x] Map components to routes in the routing module.
- [x] Enable navigation between pages using routes.
- [x] Pass data between components representing different screens via route parameters.
- [x] Validate form fields with REGEX and display errors.
- [x] Disable the submit button while the form is invalid.
- [x] Make API requests and handle responses with Promises or Observables.
- [x] Register an entity using an API (JSON Server or Firebase).
- [x] Display a list of data using the ngFor structural directive.
- [x] Use the ngIf directive.
- [x] Format data presentation using Pipes.
- [x] Build and deploy the application.

## Execution Manual
- Clone the repository using `git clone`.
- Checkout the `develop` branch, which contains the most recent changes.
- Open the project in Visual Studio Code (VS Code).
- Open a terminal in VS Code and run the Fake API (JSON Server) using the following command:
  - Command: `npm run json-server --watch db.json --routes routes.json`
  - The command should be executed in the root directory of the project, where the `db.json` and `routes.json` files are located.
- Open a new terminal in VS Code and then run the Angular project:
  - Command: `ng s`



# Portuguese Version / Versão em português

# divide-ai

Este projeto tem como objetivo implementar progressivamente uma aplicação web que efetuará o controle de despesas em comum de residência, sendo que o usuário poderá cadastrar a despesa que efetuou o pagamento (água, luz, supermercado, etc.), o valor da despesa, uma breve discriminação e a quantidade de moradores, sendo que ao final, a aplicação efetuará a soma e divisão, gerando o valor a ser pago por cada membro da residência.

O frontend da aplicação será desenvolvido com Angular e o backend simulado pela implementação de uma API Fake, usando o JSON Server.

## Endereço de Deploy - GitHub Pages
Você pode acessar o projeto através deste [desse link](https://carlosportella16.github.io/divide-ai/inicio). 

## Protótipo
Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/bq4ZNSyDEdcDzWxoQawcXn/Divide-ai?node-id=0%3A1). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## Checklist
- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade usando uma API (JSON Server ou Firebase).
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva ngIf
- [x] Formatar a apresentação de dados com Pipes.
- [x] Build e deploy da aplicação.

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode e executar a API Fake (JSON Server) via o seguinte comando: 
  - Comando: `npm run json-server --watch db.json --routes routes.json`
  - O comando deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s`
