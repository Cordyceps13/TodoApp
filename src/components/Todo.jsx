import { useState } from "react"

function Todo() {
    const [tarefas, setTarefas] = useState([
        { id: 1, titulo: 'Estudar React', concluido: false, data: new Date().toLocaleDateString().split('/').join('-') },
        { id: 2, titulo: 'Entrar no mercado', concluido: false, data: new Date().toLocaleDateString().split('/').join('-') },
    ])

    const [textInput, setTextInput] = useState('')

    const adicionarTarefa = () => {

        const novaTarefa = {
            id: Date.now(),
            titulo: textInput,
            concluido: false,
            data: new Date().toLocaleDateString().split('/').join('-')
        }

        setTarefas([...tarefas, novaTarefa])

        setTextInput('')
    }

    const apagarTarefa = (id) => {
        const novo = tarefas.filter(t => t.id !== id)
        setTarefas(novo)
    }

    return (
        <div>
            <h2>A minha To-do List em React</h2>
            <input onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    adicionarTarefa()
                }
            }} type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} /> &nbsp;
            <button onClick={adicionarTarefa}>Adicionar</button>
            {tarefas.map(t =>
                <>
                    <p key={t.id}> <hr />Tarefa: {t.titulo} <br /> Criada em: {t.data} <br /> Tarefa Concluída: {t.concluido ? '✔️' : '❌'}</p>
                    <button>Editar</button>&nbsp;
                    <button onClick={() => apagarTarefa(t.id)}>Apagar</button>
                </>
            )}
        </div>
    )
}

export default Todo