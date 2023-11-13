import express from 'express';
import * as testController from '../controllers/test.js'

const router = express.Router();

router.get('/', testController.test);

export default router;