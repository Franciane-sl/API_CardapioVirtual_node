require('dotenv').config();
const app = require('./src/app');//
const sequelize = require('./src/config/database');

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(async () => {
    console.log('Banco de dados conectado com sucesso.');

    await sequelize.sync();
    console.log('Models sincronizados');

    app.listen(PORT, () => {
      console.log(`Servidor em execução na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
