'use client'
import { Component, ChangeEvent } from 'react'
import styles from './toDoList.module.scss'
import { TimeAgo } from './helpers'

interface ToDoItem {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

interface ToDoState {
  toDoItems: ToDoItem[]
  inputText: string
}

function timeSince(date: Date) {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

  let interval = seconds / 31536000
  if (interval > 1) {
    return Math.floor(interval) + ' years'
  }
  interval = seconds / 2592000
  if (interval > 1) {
    return Math.floor(interval) + ' months'
  }
  interval = seconds / 86400
  if (interval > 1) {
    return Math.floor(interval) + ' days'
  }
  interval = seconds / 3600
  if (interval > 1) {
    return Math.floor(interval) + ' hours'
  }
  interval = seconds / 60
  if (interval > 1) {
    return Math.floor(interval) + ' minutes'
  }
  return Math.floor(seconds) + ' seconds'
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
            <li key={item.id} className={styles.todoItem}>
              {item.text}
              <TimeAgo timestamp={item.createdAt.toISOString()} />
              <button onClick={() => this.deleteTodo(Number(item.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
