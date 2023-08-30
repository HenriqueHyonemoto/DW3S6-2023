const db = require("../../../database/databaseconfig");

const GetAllPedidos = async () => {
  return (
    await db.query(
      "SELECT * " + "FROM pedidos where deleted = false ORDER BY descricao ASC"
    )
  ).rows;
};

const GetPedidoByID = async (pedidoIDPar) => {
  return (
    await db.query(
      "SELECT * " +
        "FROM pedidos WHERE pedidoid = $1 and deleted = false ORDER BY descricao ASC",
      [pedidoIDPar]
    )
  ).rows;
};

const InsertPedidos = async (registroPar) => {
  //@ Atenção: aqui já começamos a utilizar a variável msg para retornor erros de banco de dados.
  let linhasAfetadas;
  let msg = "ok";
  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO pedidos " + "values(default, $1, $2, $3, $4, $5)",
        [
          registroPar.numero,
          registroPar.data,
          registroPar.valortotal,
          registroPar.clienteid,
          registroPar.deleted,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlPedidos|insertPedidos] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const UpdatePedidos = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";
  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE pedidos SET " +
          "numero = $2, " +
          "data = $3, " +
          "valortotal = $4, " +
          "clienteid = $5 " +   
          "deleted = $6 " +         
          "WHERE pedidoid = $1",
        [
          registroPar.pedidoid,  
          registroPar.numero,
          registroPar.data,
          registroPar.valortotal,
          registroPar.clienteid,
          registroPar.deleted, 
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlPedidos|UpdatePedidos] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};


const DeletePedidos = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";
    
  try {
    linhasAfetadas = (
    await db.query(
      "UPDATE pedidos SET " + "deleted = true " + "WHERE pedidoid = $1",
      [registroPar.pedidoid]
    )
  ).rowCount;
} catch (error) {
  msg = "[mdlPedidos|DeletePedidos] " + error.detail;
  linhasAfetadas = -1;
}

return { msg, linhasAfetadas };
};


module.exports = {
  GetAllPedidos,
  GetPedidoByID,
  InsertPedidos,
  UpdatePedidos,
  DeletePedidos,
};
