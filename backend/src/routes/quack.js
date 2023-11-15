import express from 'express';
import * as QuackController from '../controllers/quack.js'

const router = express.Router();

router.get('/', QuackController.getQuacks);
router.patch('/:quackId', QuackController.updateQuacks);

export default router;