// routes/users.js

const express = require("express");
const router = express.Router();
 
router.post("/", (req, res) => {
  const user = req.body;
  res.send(`Rota para criar um usuário.`);
});

router.get("/", (req, res) => {
  res.send(`Rota para retornar todos os usuários (paginados pelo query)`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Rota para buscar um usuário (através do ID nos parâmetros)`);
});
 
router.put("/:id", (req, res) => {
  const user = req.body;
  const { id } = req.params;
  res.send(`Rota para modificar um usuário (através do ID nos parâmetros)`);
});
 
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Rota para deletar um usuário.`);
});

module.exports = router;