const express = require("express");
const routerApp = express.Router();


// middleware that is specific to this router
routerApp.use((req, res, next) => {
  next();
});

routerApp.get("/", (req, res) => {
  res.send("Olá mundo!");
});

//Rotas de Alunos


//Rotas de Cursos


// Rota Login

module.exports = routerApp;