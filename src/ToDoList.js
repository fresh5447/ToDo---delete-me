import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const styles = {
  container: {
    backgroundColor: '#ecf0f1',
    width: '50%',
    color: '#3498db',
    border: 'solid 3px #9b59b6',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const ToDoList = ({toDos, toggleCompletion, title}) =>
  <div style={styles.container}>
    <h3>{title}</h3>
    {
      toDos.length > 0
        ? toDos.map(item =>
          <ToDo
            key={item.id}
            id={item.id}
            title={item.title}
            complete={item.complete}
            dueDate={item.dueDate}
            toggleCompletion={toggleCompletion}
            createdAt={item.createdAt}
          />
        )
        : <h3> --- </h3>
    }
  </div>

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
}

export default ToDoList
