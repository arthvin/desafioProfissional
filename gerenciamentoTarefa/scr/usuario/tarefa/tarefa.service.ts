import tarefaModel from './tarefa.schema'

export class tarefaService {

    async create(tarefa: any) {
        const createTarefa = tarefaModel.create(tarefa)

        return createTarefa
    }
}
