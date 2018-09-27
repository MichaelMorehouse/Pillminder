import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class PillDetails extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.pillViewstate('create')}>Add Medication</button>
      </div>
    )
  }
}

export default connect(null, actions)(PillDetails)