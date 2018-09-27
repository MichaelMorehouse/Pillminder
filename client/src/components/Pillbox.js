import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pill from './pill/Pill'
import { getPills } from '../actions'

class Pillbox extends Component {
  renderPills() {
    const pills = this.props.pills.map(pill => {
      if (this.props.pills) {
        return (
          <div>
            <div>Name: {pill.name}</div>
            <div>Count: {pill.count}</div>
          </div>
        )
      }
    })
    return pills
  }

  render() {
    return (
      <div>
        {this.renderPills()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pills: state.pill.pills
})

export default connect(mapStateToProps, getPills)(Pillbox)

