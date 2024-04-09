# Birthday Checker

Este projeto consiste em um sistema front-end destinado a permitir que os usuários verifiquem se hoje é o aniversário de alguém. Inicialmente, o sistema será direcionado exclusivamente para minha família e para mim. Foi desenvolvê-lo utilizando ReactJS como tecnologia principal e utiliza um arquivo JSON como banco de dados para armazenar as informações relacionadas às datas de aniversário e também o changelog.


## 2 Banco de dados / Estrutura do JSON 

```json
{
  "people": [
    {
        "id": 1,
        "nome": "nome",
        "birthdate": "yyyy-mm-dd",
        "description": "descrição",
        "special": false
    }
  ]
}

```

- **people** → array com as pessoas cadastradas.
- **id** → um id numérico para facilitar identificação de cada um.
- **nome** → nome da pessoa.
- **birthdate** → data de aniversário da pessoa (com o ano atual por padrão).
- **description** → descrição da pessoa, pois podem existir pessoas com nomes iguais.
- **special** → indica se a pessoa é um amigo meu ou não (usado para diferençar familiares de amigos).

## 3 - Requisitos funcionais

- [x]  Deve ser possível visualizar os aniversariantes do dia
- [x]  Deve ser possível clicar num link e ser direcionado para o formulário do google forms
- [ ]  Deve ser possível acessar as datas de aniversário de amigos do desenvolvedor

## 4 - Regras de negócio

- [x]  Para poder acessar a visualização das datas de aniversário dos amigos do desenvolvedor deve ser preciso usar um nome e senha
- [x]  Na tela inicial deve ser mostrado todos os aniversariante com a data de hoje, não só um
- [x]  O link para o google forms deve ser aberto numa nova guia
- [x]  Uma mensagem deve aparecer caso não seja aniversário de ninguém hoje
- [ ]  Não deve ser possível visualizar os amigos do desenvolvedor na tela inicial mesmo que seja o aniversário de algum deles

## 5 - Tech. usadas

- **[ReactJS](https://pt-br.legacy.reactjs.org/)**
- **[Vite](https://vitejs.dev/)**
- **[shadcn/ui](https://ui.shadcn.com/)**
- **[Zod](https://zod.dev/)**
- **[Typescript](https://www.typescriptlang.org/)**

## 6 - Redes

- Email de contato: antonioimportant@gmail.com
- [Instagram](https://www.instagram.com/antonioalmeida2003/)
- [Linkedin](https://www.linkedin.com/in/antonio-mauricio-4645832b3/)
