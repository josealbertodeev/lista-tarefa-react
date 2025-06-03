// Importa o hook useState do React para criar e gerenciar estados
import { useState } from "react";
// Importa todos os componentes estilizados do arquivo styles.js
import { Item, Container, TodoList, Input, Button, List } from "./styles";

function App() {

    // Cria estado para armazenar lista de tarefas (array vazio inicialmente)
    const [tarefas, setTarefas] = useState([]);

    // Cria estado para controlar o texto digitado no campo de entrada
    const [entradaValor, setentradaValor] = useState('');

    // Função que executa sempre que o usuário digita no input
    // Pega o valor digitado e atualiza o estado entradaValor
    function inputChange(entradaDeDados) {
        setentradaValor(entradaDeDados.target.value)
    }

    // Função que executa quando o botão "Adicionar Tarefa" é clicado
    function cliqueBotao() {
        // Verifica se o campo não está vazio (trim remove espaços extras)
        if (entradaValor.trim() !== '') {
            // Adiciona nova tarefa na lista mantendo as antigas (...tarefas)
            setTarefas([...tarefas, entradaValor]);
            // Limpa o campo de entrada após adicionar
            setentradaValor('');
        }
    }

    return (
        // Container principal que centraliza tudo na tela
        <Container>
            {/* Caixa branca que contém toda a lista de tarefas */}
            <TodoList>

                {/* Título da aplicação */}
                <h1>Lista de Tarefas</h1>

                {/* Campo de entrada controlado pelo React */}
                {/* value conecta o estado ao input, onChange detecta mudanças */}
                <Input placeholder="Digite a sua tarefa" value={entradaValor} onChange={inputChange} />

                {/* Botão que chama a função cliqueBotao quando clicado */}
                <Button onClick={cliqueBotao}>Adicionar Tarefa</Button>

                {/* Lista que exibe todas as tarefas */}
                <List>
                    {
                        // Para cada tarefa no array, cria um Item na tela
                        tarefas.map((item, index) => {
                            // return é obrigatório para o map funcionar
                            // key={index} ajuda o React a identificar cada item único
                            return <Item key={index}>{item}</Item>
                        })
                    }
                </List>
            </TodoList>
        </Container>
    )
}

// Exporta o componente para ser usado em outros arquivos
export default App;