import React from 'react'

const styles = {
  jumbotron: {
    backgroundColor: '#ecf0f1',
    color: '#3498db',
    border: 'solid 3px #9b59b6',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const Header = () =>
  <div style={styles.jumbotron}>
    <h1> Amazing Productivity App 💪🏻  </h1>
  </div>

export default Header