import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NippleJs from 'nipplejs'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

export default class Joystick extends Component {
  componentWillMount() {
    this.setState({
      start: {},
      end: {},
      move: {},
      pressure: {},
    })
  }
  componentDidMount() {
    this.options = this.props.options
    this.options.zone = document.querySelector('.react-joystick')
    this.joystick = NippleJs.create(this.props.options)
    this.joystick
    .on('start', (evt, data) => {
      this.setState({
        start: data,
      })
    })
    .on('end', (evt, data) => {
      this.setState({
        end: data,
      })
    })
    .on('move', (evt, data) => {
      this.setState({
        move: data,
      })
    })
    .on('pressure', (evt, data) => {
      this.setState({
        pressure: data,
      })
    })
  }
  getRenderDebug() {
    this.renderDebug = false
    if (this.props.debug) {
      window.console.log(this.state)
    }
    return this.renderDebug
  }
  render() {
    return (
      <div>
        <div className="react-joystick" />
        { this.getRenderDebug() }
      </div>
    )
  }
}

Joystick.defaultProps = {
  options: {
    zone: '',
    size: 100,
    threshold: 0.1,
    color: 'gray',
    fadeTime: 250,
    dataOnly: false,
    restOpacity: 0.5,
    multitouch: true,
    maxNumberOfNipples: 1,
    position: {
      left: '50%',
      top: '50%',
    },
    mode: 'static',
    catchDistance: 1.0,
  },
  debug: false,
}

ReactDOM.render(<Joystick />, rootEl)
