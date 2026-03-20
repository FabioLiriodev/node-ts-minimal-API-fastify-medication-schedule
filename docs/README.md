<h1 align="center"> 💊 Node TypeScript Minimal API Fastify Medication Schedule 💊 </h1>

<h2> 📖 Índice 📖 </h2>

- Descrição do Projeto  
- Objetivo do Projeto  
- Contexto  
- Tecnologias Utilizadas  
- Andamento do Projeto  
- Funcionalidades  
- Regra de Negócio  
- Conceitos Aplicados  
- Como Executar a Aplicação  
- Desafios Encontrados  
- Desenvolvedores  

---

<h2> 🖋️ Descrição do Projeto 🖋️ </h2>

> O **Node TypeScript Minimal API Fastify Medication Schedule** é uma aplicação back-end desenvolvida com **Node.js, TypeScript e Fastify**, que disponibiliza uma **Minimal API** para gerenciamento e consulta de dados de medicamentos.

A aplicação permite listar e filtrar medicamentos e suas classes, retornando os dados de forma estruturada em **JSON**, com foco em desempenho, simplicidade e organização.

---

<h2> 🎯 Objetivo do Projeto 🎯 </h2>

O principal objetivo deste projeto é construir uma **Minimal API performática** utilizando o framework Fastify, consolidando conhecimentos em:

- Desenvolvimento de APIs REST  
- Uso de TypeScript em aplicações back-end  
- Estruturação de dados e filtros dinâmicos  
- Arquitetura simples e eficiente  

---

<h2> 🌎 Contexto 🌎 </h2>

Nas últimas décadas, houve um aumento significativo no uso de medicamentos de uso contínuo, o que torna essencial o desenvolvimento de ferramentas que auxiliem na organização e acompanhamento desses dados.

Neste cenário, a aplicação atua como uma base para sistemas que possam:

> Organizar, consultar e filtrar informações sobre medicamentos de forma eficiente.

---

<h2> 🚀 Tecnologias Utilizadas 🚀</h2>

<div>

<img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Fastify-black?style=for-the-badge&logo=fastify&logoColor=white">
<img src="https://img.shields.io/badge/NPM-red?style=for-the-badge&logo=npm&logoColor=white">

</div>

---

<h2> 🚧 Andamento do Projeto 🚧 </h2>

<div>

![Badge CONCLUIDO](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

</div>

---

<h2> ✨ Funcionalidades ✨ </h2>

:heavy_check_mark: Criação de uma Minimal API utilizando o framework Fastify  

:heavy_check_mark: Listagem de medicamentos disponíveis  

:heavy_check_mark: Listagem de classes de medicamentos  

:heavy_check_mark: Filtro de medicamentos por:
- ID  
- Nome  
- Classe  
- Frequência de dose (schedule)  

:heavy_check_mark: Retorno de dados estruturados em JSON  

---

<h2> 🧠 Regra de Negócio 🧠 </h2>

A aplicação segue uma lógica simples para organização e consulta dos dados:

---

### 💊 Medicamentos

Cada medicamento contém:

- ID  
- Nome  
- Frequência de dose (schedule)  
- Dosagem  

Exemplo:

```json
[
  { "id": 1, "name": "Atorvastatin", "schedule": "once", "dose": "20 mg" },
  { "id": 2, "name": "Levothyroxine", "schedule": "once", "dose": "0.1 mg" }
]

```
🧬 Classes de Medicamentos

Cada medicamento também está associado a uma classe:

ID

Nome

Classe terapêutica

Exemplo:

```json
[
  { "id": 1, "name": "Atorvastatin", "class": "Cholesterol" },
  { "id": 2, "name": "Levothyroxine", "class": "Thyroid" }
]

```
📡 Endpoints

✔️ GET /api/medications

Retorna todos os medicamentos

✔️ GET /api/medications/classes

Retorna todas as classes de medicamentos

✔️ GET /api/medications/Id-do-medicamento

Filtra o medicamento correspondente ao id de cadastro

✔️ GET /api/medication/schedule

Filtra os medicamentos de acordo com a tomada de dose (once, twice, 3times ou 4times)

✔️ GET /api/medication/class/nome-da-classe

Filtra os medicamentos de uma mesma classe terapêutica.

<h2> 📚 Conceitos Aplicados 📚 </h2>

Durante o desenvolvimento foram utilizados os seguintes conceitos:

- TypeScript e tipagem estática

- Criação de Minimal API com Fastify

- Estruturação de rotas e handlers

- Manipulação de dados em JSON

- Uso de query parameters para filtros

- Organização modular do código

- Programação orientada a objetos

- Tratamento de requisições HTTP

<h2> 💨 Como Executar a Aplicação? 💨 </h2>

1️⃣ Clone o repositório:

```bash

git clone <https://github.com/FabioLiriodev/node-ts-minimal-API-fastify-medication-schedule>

```

2️⃣ Acesse a pasta do projeto:

```bash

cd node-ts-minimal-API-fastify-medication-schedule

```

3️⃣ Instale as dependências:

```bash

npm install

```

4️⃣ Execute a aplicação:

```bash

npm run start:dev

```

ou

```bash

node dist/server.js

```

5️⃣ Utilize ferramentas como Postman ou Insomnia para testar os endpoints.

<h2> 🧗‍♂️ Desafios Encontrados 🧗‍♂️ </h2>

O desenvolvimento do projeto trouxe desafios relevantes:

- Estruturar corretamente uma Minimal API com Fastify

- Definir rotas claras e escaláveis

- Implementar filtros dinâmicos eficientes

- Garantir tipagem consistente com TypeScript

- Organizar a aplicação mantendo simplicidade e performance

- Modelar dados de forma que permitam expansão futura

Esses desafios contribuíram diretamente para o aprimoramento na construção de APIs modernas e performáticas.

<h2> 💻 Desenvolvedores 💻</h2>

<img src="https://avatars.githubusercontent.com/u/140852220?v=4" width=100><br><sub>Fábio Lirio</sub>