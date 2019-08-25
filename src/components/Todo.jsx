import React, {Component} from 'react';
import PageHeader from "./PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader title="Tarefas" subtitle="Cadastro"/>
                <TodoForm/>
                <TodoList/>
            </div>
        );
    }
}

export default Todo;
