import express from 'express';
import * as bodyParser from 'body-parser';

import Database from '../db'
import router from '../routes';

class Server {
  public app = express.application;
  private port = process.env.PORT || 80;

  constructor() {
    this.app = express();
    this.startDatabaseCluster();
    this.initializeMiddleware();
  }

  private bodyParser(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true,
    }))
  }

  private initializeMiddleware(): void {
    this.bodyParser();
    this.app.use('/', router);
  }

  private startDatabaseCluster(): void {
    Database.connect();
  }

  public start(): void {
    this.app.listen(this.port, (): void => {
      console.log('Server is listening');
    })
  }
}

export default Server;