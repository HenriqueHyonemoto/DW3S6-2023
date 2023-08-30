const db = require("../../../database/databaseconfig");

const getAllAlunos = async () => {
  return (
    await db.query(
      "SELECT *, (SELECT descricao from CURSOS where cursoid = alunos.cursoid)" +
        "FROM alunos where deleted = false ORDER BY nome ASC"
    )
  ).rows;
};

const getAlunoByID = async (alunoIDPar) => {
    return (
      await db.query(
        "SELECT *, (SELECT descricao from CURSOS where cursoid = alunos.cursoid)" +
          "FROM alunos WHERE alunoid = $1 and deleted = false ORDER BY nome ASC",
        [alunoIDPar]
      )
    ).rows;
  };

module.exports = {
    getAllAlunos,
    getAlunoByID
  };