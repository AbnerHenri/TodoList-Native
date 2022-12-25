import { v4 as uuidv4 } from 'uuid'

let myId = uuidv4()

export const List = [
    { task: 'Concluir duas aulas', done: false, id: myId() },
    { task: 'Criar projeto pessoal', done: false, id: myId() },
    { task: 'Commitar ao menos uma vez por dia', done: false, id: myId() }
]