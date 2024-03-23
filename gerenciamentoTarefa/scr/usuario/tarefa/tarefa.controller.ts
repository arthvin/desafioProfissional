import { Request, Response } from 'express'
import { tarefaService } from './tarefa.service'

class tarefaController {
    async create(req: Request, res: Response) {
        const tarefa = await new tarefaService().create(req.body)
        return res.json(tarefa)
    }
}

export default new tarefaController()