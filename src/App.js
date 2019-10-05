import React, { Fragment } from 'react'
import CustomButton from './components/CustomButton'
import CustomAvatar from './components/CustomAvatar'
import CustomInputGroup from './components/CustomInputGroup'
import './App.css'

// const { Header, Content, Footer } = Layout

function App() {
  return (
    <Fragment>
      <CustomButton />
      <CustomAvatar />
      <CustomInputGroup />
    </Fragment>
  )
}

export default App
