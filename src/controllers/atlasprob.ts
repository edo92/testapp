import express from 'express';

class AtlasProb {
    public static receiveProbData(req: express.Request, res: express.Response) {
        console.log('req.body', req.body);
        res.status(200).json();
    }
}

export default AtlasProb;