import { Router } from 'express'
import { configs, climate, atlasProb } from '../controllers'

const router = Router();

router.get('/configs', configs.getConfigs);

router.get('/get-data', climate.sendClimate);
router.post('/climate-data', climate.receiveClimate);
router.post('/prob-data', atlasProb.receiveProbData);

export default router;