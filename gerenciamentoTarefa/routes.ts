import { Router } from 'express'
import usuarioController from './src/usuario/usuario.controller'

const routes = Router()
routes.get('/health-check')
routes.post('/usuario', usuarioController.create)

export {
    routes
}

