import { Router } from "express";
import select from "./db";

const routes = Router();
routes.use("/usuario", select);
routes.use("/*", select);
export default routes