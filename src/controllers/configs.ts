import express from 'express';
import { configs } from '../db/actions';

class Configs {
    public static async getConfigs(_req: express.Request, res: express.Response) {
        res.json(await configs.getConfigs());
    }
}

export default Configs


