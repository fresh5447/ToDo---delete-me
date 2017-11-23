import React, {Component} from 'react'
import moment from 'moment'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

const styles = {
  resetButton: {
    fontSize: 10,
    border: '2px solid red',
    borderRadius: 30,
    color: 'red',
    position: 'fixed',
    left: 18,
    top: 15
  },
  listContainer: {
    display: 'flex'
  }
}

class ToDoContainer extends Component {
  state = {
    title: undefined,
    dueDate: undefined,
    allToDos: undefined,
    completeToDos: undefined,
    incompleteToDos: undefined
  }

  componentDidMount () {
    let toDos = JSON.parse(localStorage.getItem('allToDos')) || undefined
    this.setState({ allToDos: toDos })
    if(toDos) {
      this.sortToDosByCompletion()
    }
  }

  addToDo = () => {
    if(this.state.title && this.state.dueDate) {
      let allToDos = this.state.allToDos || []
      let newToDo = {
        title: this.state.title,
        complete: false,
        dueDate: this.state.dueDate,
        createdAt: moment().format('MMMM Do YYYY'),
        id: this.state.allToDos ? this.state.allToDos.length + 1 : 1  // use 1 if it is the first todo
      }
      allToDos.push(newToDo)

      this.setState({ allToDos: allToDos })
      this.sortToDosByCompletion()

      this.setState({ title: '', dueDate: '' })
      alert('todo succesfully added')
    } else {
      alert('Title & DueDate Required')
    }
  }

  updateTitle = (e) => this.setState({ title: e.target.value })
  updateDueDate = (e) => this.setState({ dueDate: e.target.value })

  toggleCompletion = (e) => {
    const allTodos = this.state.allToDos
    const toDo = allTodos.find(item => Number(item.id) === Number(e.target.id))
    toDo.complete = !toDo.complete
    this.sortToDosByCompletion()
  }

  resetToDos = () => {
    if(window.confirm('are you sure you want to delete all todos?')) {
      this.setState({ allTodos: [], completedToDos: [], incompleteToDos: [] })
      localStorage.clear()
    }
  }

  sortToDosByCompletion = () => {
    setTimeout(() => {
      const allTodos = this.state.allToDos
      const completed = allTodos.filter(item =>
        item.complete // same as item.complete === true
      )
      const incomplete = allTodos.filter(item =>
        !item.complete // same as item.complete === false
      )
      this.setState({ completedToDos: completed, incompleteToDos: incomplete })
      const updatedAllTodosArray = completed.concat(incomplete)
      localStorage.setItem('allToDos', JSON.stringify(updatedAllTodosArray))
    }, 0)
  }

  render () {
    return (
      <div style={styles.container}>
        <button onClick={this.resetToDos} style={styles.resetButton}> Reset </button>
        <ToDoForm
          title={this.state.title}
          dueDate={this.state.dueDate}
          addToDo={this.addToDo}
          updateTitle={this.updateTitle}
          updateDueDate={this.updateDueDate}
        />
        <div>
          {
            this.state.incompleteToDos
            && this.state.completedToDos
            ? <div style={styles.listContainer}>
                <ToDoList title={'Incomplete ToDos'} toDos={this.state.incompleteToDos} toggleCompletion={this.toggleCompletion} />
                <ToDoList title={'Complete ToDos'} toDos={this.state.completedToDos} toggleCompletion={this.toggleCompletion} />
              </div>
            : (
              <div>
                <h3> No ToDos </h3>
                <p> Please create a ToDo to begin </p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default ToDoContainer
