import React, { Component } from 'react';
import PageHeader from "./PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '', list: [] };
    }

    handleAdd = () => {
        console.log('add');
    }

    handleChange = (e) => {
        this.setState({ ...this.state, description: e.target.value });
    }

    render() {
        return (
            <div>
                <PageHeader title="Tarefas" subtitle="Cadastro" />
                <TodoForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description} />
                <TodoList />
            </div>
        );
    }
}

export default Todo;
