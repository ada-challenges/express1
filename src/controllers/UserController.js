const User = require("../models/User");

class UserController {

    async getAllUsers(req, res) {
        try {
            const user = new User();
            const users = await user.getAll();
            users.rowCount > 0 ? 
                res.json(users.rows) : 
                res.status(400).json({ message: 'Nenhum usuário encontrado' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

}

module.exports = UserController