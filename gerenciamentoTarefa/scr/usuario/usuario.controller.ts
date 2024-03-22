import { Request, Response } from 'express'
import { usuarioService } from './usuario.service'

class usuarioController {
    async create(req: Request, res: Response) {
        const book = await new usuarioService().create(req.body)
        return res.json(book)
    }
}

export default new usuarioController()