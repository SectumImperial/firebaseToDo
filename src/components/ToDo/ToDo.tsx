import { Component, ChangeEvent } from 'react'
import styles from './page.module.scss'

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

export class ToDo extends Component<{}, ToDoState> {
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
              <button onClick={() => this.deleteTodo(Number(item.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
