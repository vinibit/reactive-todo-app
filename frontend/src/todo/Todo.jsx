import './Todo.module.css'

import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        
        this.handleSearch = this.handleSearch.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = '') {

        const searchCriteria = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${searchCriteria}`)
            .then(res => this.setState({
                    ...this.state, 
                    description, 
                    list: res.data
                })
            )        
    }
    
    handleSearch(description) {
        this.refresh(description)        
    }

    handleChange(e) {
        this.setState({...this.state, 
            description: e.target.value
        })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(res => this.refresh())        
    }

    handleRemove(todoItem) {
        axios.delete(`${URL}/${todoItem._id}`)
            .then(res => this.refresh(this.state.description))
    }

    handleMarkAsDone(todoItem) {
        axios.put(`${URL}/${todoItem._id}`, { ...todoItem, done: true })
            .then(res => this.refresh(this.state.description))
    }

    handleMarkAsPending(todoItem) {
        axios.put(`${URL}/${todoItem._id}`, { ...todoItem, done: false })
            .then(res => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm 
                    description={this.state.description}
                    handleClear={this.handleClear}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList 
                    list={this.state.list} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}

export default Todo