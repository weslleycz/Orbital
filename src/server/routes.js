import { Router } from "express";
import {HelloWorld} from "./controllers/index"

const router = Router();

router.get('/hello',HelloWorld);

export { router };