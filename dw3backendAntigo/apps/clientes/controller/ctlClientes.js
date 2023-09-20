const mdlClientes = require("../model/mdlClientes");

const getAllClientes = (req, res) =>
  (async () => {
    let registro = await mdlClientes.getAllClientes();
    res.json({ status: "ok", "registro": registro });
  })();

  const getClienteByID = (req, res) =>
  (async () => {
    const clienteID = parseInt(req.body.clienteid);
    let registro = await mdlClientes.getClienteByID(clienteID);

    res.json({ status: "ok", "registro": registro });
  })();

  const insertClientes = (request, res) =>
  (async () => {
    //@ Atenção: aqui já começamos a utilizar a variável msg para retornar erros de banco de dados.
    const clienteREG = request.body;  
    //console.log("[insertClientesCTL",clienteREG)  
    let { msg, linhasAfetadas } = await mdlClientes.insertClientes(clienteREG);    
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

const updateClientes = (request, res) =>
  (async () => {
    const clienteREG = request.body;
    let  { msg, linhasAfetadas } = await mdlClientes.updateClientes(clienteREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

  const DeleteClientes = (request, res) =>
  (async () => {
    const clienteREG = request.body;
    let { msg, linhasAfetadas } = await mdlClientes.DeleteClientes(clienteREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

  module.exports = {
    getAllClientes,
    getClienteByID,
    insertClientes,
    updateClientes,
    DeleteClientes
  };