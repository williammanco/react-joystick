import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

export default class ExampleComponent extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

ReactDOM.render(<ExampleComponent />, rootEl)
