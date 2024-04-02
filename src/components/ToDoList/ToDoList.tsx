'use client'
import { Component, ChangeEvent } from 'react'
import styles from './toDoList.module.scss'
import { TimeAgo } from './helpers'

interface ToDoItem {
  id: string
  text: string
  completed: boolean
  important: boolean
  createdAt: Date
}

interface ToDoState {
  toDoItems: ToDoItem[]
  inputText: string
}

export class ToDoListType extends Component<{}, ToDoState> {
  state: ToDoState = {
    toDoItems: [],
    inputText: '',
  }
}

export class ToDoList extends Component<{}, ToDoState> {
  state: ToDoState = {
    toDoItems: [],
    inputText: '',
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputText: e.target.value })
  }

  addTodo = () => {
    const newItem: ToDoItem = {
      id: Date.now().toString(),
      text: this.state.inputText,
      completed: false,
      createdAt: new Date(),
      important: false,
    }
    this.setState((prevState) => ({
      toDoItems: [...prevState.toDoItems, newItem],
      inputText: '',
    }))
  }

  deleteTodo = (id: number) => {
    this.setState((prevState) => ({
      toDoItems: prevState.toDoItems.filter((item) => Number(item.id) !== Number(id)),
    }))
  }
  toggleComplete = (id: string) => {
    this.setState((prevState) => ({
      toDoItems: prevState.toDoItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    }))
  }

  toggleImportant = (id: string) => {
    this.setState((prevState) => ({
      toDoItems: prevState.toDoItems.map((item) =>
        item.id === id ? { ...item, important: !item.important } : item,
      ),
    }))
  }

  render() {
    return (
      <div>
        <div>
          <input
            className={styles.inputField}
            type="text"
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
          <button className={styles.addButton} onClick={this.addTodo}>
            Add Task
          </button>
        </div>
        <ul className={styles.todoList}>
          {this.state.toDoItems.map((item) => (
            <li
              key={item.id}
              className={`${styles.todoItem} ${item.completed ? styles.completed : ''} ${item.important ? styles.important : ''}`}
            >
              <span onClick={() => this.toggleComplete(item.id)}>{item.text}</span>
              <button onClick={() => this.toggleImportant(item.id)}>Important</button>
              <button onClick={() => this.deleteTodo(Number(item.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
