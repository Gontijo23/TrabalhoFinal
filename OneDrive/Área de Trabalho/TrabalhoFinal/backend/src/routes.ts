import { Router, Request, Response } from "express";
import FetchController from "./controllers/FetchController";

const routes = Router();

let keyword: string;

// rota home
routes.get('/eventos', FetchController.getEvent)

// rotas para pesquisa por palavra chave
routes.post('/pesquisa/:keyword', (req: Request, res: Response) => {
    keyword = req.params['keyword'];
    keyword = keyword.replace('%20', '+');
    res.status(200).send({"status": "received"});
});
routes.get('/res/eventos', FetchController.getEventByKeyword);

export default routes;
export { keyword };