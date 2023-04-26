# TrybeSmith Projetct

<details>
<summary>PT-BR</summary>

## Descrição

Este projeto consiste em uma aplicação de uma loja de itens medievais, na qual é possível cadastrar produtos, usuários, realizar pedidos e autenticar usuários.

## Tecnologias

- Node;
- TypeScript;
- MySQL;

## Como rodar esse projeto

- Clone o projeto: `git clone git@github.com:VictorMattV/trybesmith_project.git`;
- Suba os containers: `docker-compose up -d`;
- Execute o terminal do container: `docker exec -it trybesmith bash`;
- Instale as dependências: `npm install`;
- Inicialize a aplicação: `npm start`.


## Endpoints

A seguir, estão descritos os endpoints da aplicação:

### Cadastro de Produtos

`POST /products`

Endpoint responsável pelo cadastro de produtos na loja.

#### Body:

`{
  "name": "Espada longa",
  "amount": "30 peças de ouro"
}` 

#### Resposta:

`{
  "id": 1,
  "name": "Espada longa",
  "amount": "30 peças de ouro"
}` 

### Listagem de Produtos

`GET /products`

Endpoint responsável pela listagem de produtos na loja.

#### Resposta:

`[
  {
    "id": 1,
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  },
  {
    "id": 2,
    "name": "Poção de cura",
    "amount": "20 peças de ouro"
  }
]` 

### Cadastro de Usuários

`POST /users`

Endpoint responsável pelo cadastro de usuários na loja.

#### Body:

`{ 
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}` 

#### Resposta:

`{
  "id": 1,
  "username": "MAX",
  "classe": "swordsman",
  "level": 10
}` 

### Login de Usuários

`POST /login`

Endpoint responsável pela autenticação de usuários na loja.

#### Body:

`{
  "username": "MAX",
  "password": "SavingPeople"
}` 

#### Resposta:

`{
  "token": "<jwt-token>"
}` 

### Cadastro de Pedidos

`POST /orders`

Endpoint responsável pelo cadastro de pedidos na loja.

#### Body:

`{
  "productsIds": [1, 2]
}` 

#### Resposta:

`{
  "id": 1,
  "userId": 1,
  "productsIds": [1, 2]
}` 

### Listagem de Pedidos

`GET /orders`

Endpoint responsável pela listagem de pedidos na loja.

#### Resposta:

`[
  {
    "id": 1,
    "userId": 1,
    "productsIds": [1, 2]
  },
  {
    "id": 2,
    "userId": 2,
    "productsIds": [3, 4]
  }
]` 

## Validações de Produtos

Foram realizadas validações referentes à criação de produtos, a seguir descritas:

-   O nome do produto deve ter no mínimo 3 caracteres e no máximo 50 caracteres.
-   A quantidade deve ser informada no formato "X peças de ouro", em que X é um número inteiro maior que zero.

### Validações de Usuários

Foram realizadas validações referentes à criação de usuários, a seguir descritas:

-   O nome de usuário deve ter no mínimo 3 caracteres e no máximo 20 caracteres.
-   A classe deve ser uma das seguintes opções: "swordsman", "archer" ou "wizard". Caso contrário, deve retornar um erro com status 400 e a mensagem "Invalid user class".

Além disso, o campo "level" deve ser um número inteiro positivo maior ou igual a 1. Caso contrário, deve retornar um erro com status 400 e a mensagem "Invalid user level".

Por fim, o campo "password" deve ter no mínimo 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Caso contrário, deve retornar um erro com status 400 e a mensagem "Invalid password".

</details>

<details>
<summary>EN</summary>

## Description

This project consists of an application for a medieval items store, in which it is possible to register products, users, place orders and authenticate users.

## Technologies

- Node;
- TypeScript;
- MySQL;

## How to run this project

- Clone the project: `git clone git@github.com:VictorMattV/trybesmith_project.git`;
- Start the containers: `docker-compose up -d`;
- Run the container terminal: `docker exec -it trybesmith bash`;
- Install the dependencies: `npm install`;
- Start the application: `npm start`.


## Endpoints

The application endpoints are described below:

### Product Registration

`POST /products`

Endpoint responsible for registering products in the store.

#### Body:

`{
   "name": "Long Sword",
   "amount": "30 gold pieces"
}`

#### Response:

`{
   "id": 1,
   "name": "Long Sword",
   "amount": "30 gold pieces"
}`

### Product Listing

`GET /products`

Endpoint responsible for listing products in the store.

#### Response:

`[
   {
     "id": 1,
     "name": "Long Sword",
     "amount": "30 gold pieces"
   },
   {
     "id": 2,
     "name": "Healing Potion",
     "amount": "20 gold pieces"
   }
]`

### User registration

`POST /users`

Endpoint responsible for registering users in the store.

#### Body:

`{
   "username": "MAX",
   "class": "swordsman",
   "level": 10,
   "password": "SavingPeople"
}`

#### Response:

`{
   "id": 1,
   "username": "MAX",
   "class": "swordsman",
   "level": 10
}`

### User Login

`POST /login`

Endpoint responsible for user authentication in the store.

#### Body:

`{
   "username": "MAX",
   "password": "SavingPeople"
}`

#### Response:

`{
   "token": "<jwt-token>"
}`

### Order Registration

`POST /orders`

Endpoint responsible for registering orders in the store.

#### Body:

`{
   "productsIds": [1, 2]
}`

#### Response:

`{
   "id": 1,
   "userId": 1,
   "productsIds": [1, 2]
}`

### Order List

`GET /orders`

Endpoint responsible for listing orders in the store.

#### Response:

`[
   {
     "id": 1,
     "userId": 1,
     "productsIds": [1, 2]
   },
   {
     "id": 2,
     "userId": 2,
     "productsIds": [3, 4]
   }
]`

## Product Validations

Validations regarding the creation of products were performed, as described below:

- The product name must have a minimum of 3 characters and a maximum of 50 characters.
- The amount must be informed in the format "X gold pieces", where X is an integer greater than zero.

### User Validations

Validations regarding the creation of users were performed, as described below:

- The username must be a minimum of 3 characters and a maximum of 20 characters.
- The class must be one of the following options: "swordsman", "archer" or "wizard". Otherwise, it should return an error with status 400 and the message "Invalid user class".

In addition, the "level" field must be a positive integer greater than or equal to 1. Otherwise, it must return an error with status 400 and the message "Invalid user level".

Finally, the "password" field must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number. Otherwise, it should return an error with status 400 and the message "Invalid password".

</details>
