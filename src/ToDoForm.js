import React from 'react'

const styles = {
  formContainer: {
    backgroundColor: '#ecf0f1',
    color: '#3498db',
    border: 'solid 3px #2ecc71',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formItem: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  button: {
    border: 'solid 1px #3498db',
    color: '#3498db'
  }
}

const ToDoForm = ({title, dueDate, updateTitle, updateDueDate, addToDo}) =>
  <form style={styles.formContainer}>
    <h3> New ToDo </h3>
    <div style={styles.formItem}>
      <label>Title</label>
      <input type='text' onChange={updateTitle} value={title} />
    </div>
    <div style={styles.formItem}>
      <label>Due Date</label>
      <input type='date' onChange={updateDueDate} value={dueDate} />
    </div>
    <button style={styles.button} type='button' onClick={addToDo}>Submit ToDo</button>
  </form>

export default ToDoForm