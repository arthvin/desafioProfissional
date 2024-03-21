import usuarioModel from './usuario.schema'

export class usuarioService {

    async create(usuario: any) {
        const createUsuario = usuarioModel.create(usuario)

        return createUsuario
    }
}
