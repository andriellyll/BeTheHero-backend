const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

/**
 * para ser possivel as requisicoes enviadas no formato json serem entendidas pela aplicacao
 */
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: buscar uma informacao backend
  * POST: criar uma informação no backend
  * PUT: alterar uma informação no backend
  * DELETE: deletar uma informação no backend
  */

  /**
   * Tipos de parametros
   * 
   * Query params: parametros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route params: parametros utilizados para identificar recursos
   * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
   * 
   * Os parametros que sao enviados atraves da requisicao sao acessados atraves do request
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle
    * NoSQL: MongoDB, CouchDB, etc
    */

app.listen(3333);