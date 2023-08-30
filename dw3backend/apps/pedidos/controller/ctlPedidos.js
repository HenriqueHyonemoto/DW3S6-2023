const mdlPedidos = require("../model/mdlPedidos");

const GetAllPedidos = (req, res) =>
  (async () => {
    let registro = await mdlPedidos.GetAllPedidos();
    res.json({ status: "ok", registro: registro });
  })();

const GetPedidoByID = (req, res) =>
  (async () => {
    const pedidoID = parseInt(req.body.pedidoid);
    let registro = await mdlPedidos.GetPedidoByID(pedidoID);

    res.json({ status: "ok", registro: registro });
  })();

const InsertPedidos = (request, res) =>
  (async () => {
    //@ Atenção: aqui já começamos a utilizar a variável msg para retornar erros de banco de dados.
    const registro = request.body;
    let { msg, linhasAfetadas } = await mdlPedidos.InsertPedidos(registro);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

const UpdatePedidos = (request, res) =>
  (async () => {
    const registro = request.body;
    let { msg, linhasAfetadas } = await mdlPedidos.UpdatePedidos(registro);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

const DeletePedidos = (request, res) =>
  (async () => {
    const registro = request.body;
    let { msg, linhasAfetadas } = await mdlPedidos.DeletePedidos(registro);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();
module.exports = {
  GetAllPedidos,
  GetPedidoByID,
  InsertPedidos,
  UpdatePedidos,
  DeletePedidos
};
