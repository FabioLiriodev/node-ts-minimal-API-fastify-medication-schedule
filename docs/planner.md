# 💊 Node Typescript Minimal API Fastify Medication Schedule 💊

## 🏹 Objetivo 🏹

Criar uma minimal API usando Fastify como framework para retornar dados referentes a um cadastro de medicamentos.

## 📖 Descrição 📖

O Node Typescript Minimal API Fastify Medication Schedule é uma aplicação web onde o usuário pode obter dados de medicamentos de maneira dinâmica e filtrá-los de acordo com alguns parâmetros.

## 📖 Contexto 📖

Nas últimas décadas, estatísticas mostram o aumento do consumo de medicamentos de uso crônico e contínuo, o que faz com que o processo de adesão e tomada de medicamentos se torne uma temática que deve ser contemplada pela tecnologias e suas potenciais ferramentas.  

## ⌨️ Features ⌨️

- Criar lista de medicamentos e classes de medicamentos em formato de minimal API com o uso do framework Fastify;
- Listar medicamentos disponíveis na API;
- Listar classes de medicamentos disponíveis na API;
- Filtrar os medicamentos de acordo com seu id, nome, classe e número de tomadas de dose por dia;

## 🤔 Como desenvolver o aplicativo? 🤔

### Feature

#### Como implementar?

**Feature:**

- Listar de medicamentos disponíveis na API;

**Request:**

MÉTODO GET: Retorna lista de medicamentos.

**Response:**

**Retornar em uma Minimal API (JSON)** o id, o nome do medicamento, o número de tomada de dose diária e a dosagem do medicamento.

```js
[
    { id: 1, name: "Atorvastatin", schedule: "once", dose: "20 mg" },
    { id: 2, name: "Levothyroxine", schedule: "once", dose: "0.1 mg" },
    { id: 3, name: "Lisinopril", schedule: "once", dose: "10 mg" },

]
```
**Feature:**

- Listar as classes de medicamentos disponíveis na API;

**Request:**

MÉTODO GET: Retorna lista de classes de medicamentos.

**Response:**

**Retornar em uma Minimal API (JSON)** o id do medicamento, nome do medicamento e a classe do medicamento.

```js
[
    { id: 1, name: "Atorvastatin", class: "Cholesterol"},
    { id: 2, name: "Levothyroxine", class: "Thyroid" },
    { id: 3, name: "Lisinopril", class: "Antihypertensive" },

]
```

**Feature:**

- Filtrar os medicamentos de acordo com seu id, nome, classe e número de tomadas de dose por dia;

**Request:**

MÉTODO GET: Retorna a lista filtrada de medicamentos ou classes de medicamentos baseada em um parâmetro selecionado pelo usuário.

**Response:**

**Retornar em uma API REST (JSON)** os dados filtrados de acordo com os endpoints definidos para cada filter.
