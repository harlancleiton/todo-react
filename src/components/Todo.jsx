import React, {Component} from 'react';
import axios from "axios";
import PageHeader from "./PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const url = 'http://localhost:3003/api/todos';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {description: '', list: []};
        this.refresh();
    }

    handleAdd = () => {
        const description = this.state.description;
        axios.post(url, {description})
            .then(response => this.refresh())
            .catch(console.error);
    };

    handleMakeDone = (todo) => {
        axios.put(`${url}/${todo._id}`, {...todo, done: true})
            .then(response => this.refresh(this.state.description))
            .catch(console.error);
    };

    handleMakePending = (todo) => {
        axios.put(`${url}/${todo._id}`, {...todo, done: false})
            .then(response => this.refresh(this.state.description))
            .catch(console.error);
    };

    handleRemove = (todo) => {
        axios.delete(`${url}/${todo._id}`)
            .then(response => this.refresh(this.state.description))
            .catch(console.error);
    };

    handleChange = (e) => {
        this.setState({...this.state, description: e.target.value});
    };

    handleSearch = () => {
        this.refresh(this.state.description);
    };

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : '';
        axios.get(`${url}?sort=-createdAt${search}`)
            .then(response => this.setState({...this.state, description, list: response.data}))
            .catch(console.error);
    }

    render() {
        return (
            <div>
                <PageHeader title="Tarefas" subtitle="Cadastro"/>
                <TodoForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    description={this.state.description}/>
                <TodoList
                    list={this.state.list}
                    handleMakeDone={this.handleMakeDone}
                    handleMakePending={this.handleMakePending}
                    handleRemove={this.handleRemove}/>
            </div>
        );
    }
}

export default Todo;
