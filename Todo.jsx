import { useState } from "react"

function Todo() {
    const [tarefas, setTarefas] = useState([
        { id: 1, titulo: 'Estudar React', concluido: false, data: new Date().toISOString().split('T')[0] },
        { id: 2, titulo: 'Entrar no mercado', concluido: false, data: new Date().toISOString().split('T')[0] },
    ])
    const [textInput, setTextInput] = useState('')


    const adicionarTarefa = () => {

        const novaTarefa = {
            id: Date.now(),
            titulo: textInput,
            concluido: false,
            data: new Date().toISOString().split('T')[0]
        }

        setTarefas([...tarefas, novaTarefa])

        setTextInput('')
    }

    return (
        <div>
            <h2>A minha To-do List em React</h2>
            <input onKeyDown={(e) => {
                if(e.key === 'Enter'){
                    adicionarTarefa()
                }
            }} type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} /> &nbsp;
            <button onClick={adicionarTarefa}>Adicionar</button>
            {tarefas.map(t =>
                <p key={t.id} >{`Tarefa: ${t.titulo}, criada em ${t.data}. ${t.concluido ? '✔️' : '❌'}`}</p>
            )}
        </div>
    )
}

export default Todo