import React from 'react'

const styles = {
  toDo: {
    backgroundColor: '#ecf0f1',
    color: '#3498db',
    border: 'solid 2px #95a5a6',
    padding: 20,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 5
  }
}

const ToDo = ({title, dueDate, complete, id, toggleCompletion, createdAt}) =>
  <div style={styles.toDo}>
    <h3> title: {title} </h3>
    <p> due: {dueDate}</p>
    <p> complete: {complete.toString()} </p>
    <p> created at: {createdAt} </p>
    <button id={id} onClick={toggleCompletion}> {complete ? 'mark incomplete' : 'mark complete'} </button>
  </div>

export default ToDo
