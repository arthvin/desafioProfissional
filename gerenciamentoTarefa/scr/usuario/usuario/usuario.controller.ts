import { Request, Response } from 'express'
import { usuarioService } from './usuario.service'

class usuarioController {
    async create(req: Request, res: Response) {
        const usuario = await new usuarioService().create(req.body)
        return res.json(usuario)
    }
}

export default new usuarioController()