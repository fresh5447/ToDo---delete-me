import React from 'react'
import Header from './Header'
import ToDoContainer from './ToDoContainer'

const styles = {
  container: {
    width: '100%'
  }
}


const App = () =>
  <div style={styles.container}>
    <Header />
    <ToDoContainer />
  </div>

export default App