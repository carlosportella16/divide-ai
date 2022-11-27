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
