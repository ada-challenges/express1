const { Client } = require('pg');

class Connection {
  static instance;

  constructor() {
    if (Connection.instance) {
      return Connection.instance;
    }

    this.client = new Client({
      user: process.env.POSTGRE_USER,
      host: process.env.POSTGRE_HOST,
      database: process.env.POSTGRE_DB,
      password: process.env.POSTGRE_PASSWORD,
      port: process.env.POSTGRE_PORT,
      ssl: process.env.POSTGRE_SSL,
    });

    Connection.instance = this;
  }

  async connect() {
    try {
      await this.client.connect();
      console.log('Conexão estabelecida');
    } catch (err) {
      console.error('Erro de conexão:', err);
    }
  }

  async disconnect() {
    try {
      await this.client.end();
      console.log('Conexão encerrada');
    } catch (err) {
      console.error('Erro ao encerrar a conexão:', err);
    }
  }
}

module.exports = Connection;