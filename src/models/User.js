const Model = require("./model");

class User extends Model{

    constructor(){
        super()
        this.table = 'users'
    }

    async getAll(fields,whereClause) {
        const result = await super.select(fields,whereClause);
        return result;
    }

    async createUser(data) {
        const result = await super.insert(data);
        if(result.rowCount > 0){
            console.log(result.rows);
        }else{
            console.log('Não foi possivél cadastrar o usuário');
        }
    }
    
    async deleteUser(whereClause) {
        const result = await super.delete(whereClause);
        if(result.rowCount === 0){
            console.log(result.rows);
        }else{
            console.log('Não foi possivél deletar o usuário');
        }
    }

    async updateUser(data,whereClause) {
        const result = await super.update(data,whereClause);
        // if(result.rowCount > 0){
        //     console.log(result.rows);
        // }else{
        //     console.log('Não foi possivél atualizar o usuário');
        // }
    }

}

module.exports = User