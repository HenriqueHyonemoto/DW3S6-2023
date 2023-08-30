const mdlAlunos = require("../model/mdlAlunos");

const getAllAlunos = (req, res) =>
  (async () => {
    let registro = await mdlAlunos.getAllAlunos();
    res.json({ status: "ok", "registro": registro });
  })();

  const getAlunoByID = (req, res) =>
  (async () => {
    const alunoID = parseInt(req.body.alunoid);
    let registro = await mdlAlunos.getAlunoByID(alunoID);

    res.json({ status: "ok", "registro": registro });
  })();

  module.exports = {
    getAllAlunos,
    getAlunoByID
  };