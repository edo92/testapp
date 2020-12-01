import express from 'express';
import store from '../store';
import { climate } from '../db/actions';

class Climate {
    public static async receiveClimate(req: express.Request, res: express.Response) {
        await climate.saveClimate(req.body); // Save to local db
        store.setState({ climate: req.body }); // Update lastest data

        res.status(200).json({ ok: true });
    }

    public static sendClimate(_req: express.Request, res: express.Response): void {
        res.status(200).json(store.getState());
    }
}

export default Climate;