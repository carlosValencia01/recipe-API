const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.recipesPath = "/api/recipes";
    this.commentsPath = "/api/comments";

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.commentsPath, require("../routes/comment"));
    this.app.use(this.recipesPath, require("../routes/recipe"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server listening on port ", this.port);
    });
  }
}

module.exports = Server;
