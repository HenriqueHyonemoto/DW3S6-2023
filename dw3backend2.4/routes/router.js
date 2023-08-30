const express = require("express");
const routerApp = express.Router();

const appClientes = require("../apps/clientes/controller/ctlClientes");
const appPedidos = require("../apps/pedidos/controller/ctlPedidos");
const appLogin = require("../apps/login/controller/ctlLogin");

// middleware that is specific to this router
routerApp.use((req, res, next) => {
  next();
});

routerApp.get("/", (req, res) => {
  res.send("Olá mundo!");
});

//Rotas de Clientes
routerApp.get("/getAllClientes", appClientes.getAllClientes);
routerApp.post("/getClienteByID", appClientes.getClienteByID);
routerApp.post("/insertClientes", appClientes.insertClientes);
routerApp.post("/updateClientes", appClientes.updateClientes);
routerApp.post("/DeleteClientes", appClientes.DeleteClientes);

//Rotas de Pedidos
routerApp.get("/GetAllPedidos", appPedidos.GetAllPedidos);
routerApp.post("/GetPedidoByID", appPedidos.GetPedidoByID);
routerApp.post("/InsertPedidos", appPedidos.InsertPedidos);
routerApp.post("/UpdatePedidos", appPedidos.UpdatePedidos);
routerApp.post("/DeletePedidos", appPedidos.DeletePedidos);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;