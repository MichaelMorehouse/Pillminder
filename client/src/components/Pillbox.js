import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pill from './pill/Pill'
import CreatePill from './pill/CreatePill'
import * as actions from '../actions'

class Pillbox extends Component {

  componentDidMount() {
    this.props.getPills()
  }

  onCreate = formProps => {
    this.props.createPill(formProps, function() {
      console.log("Called it!")
    })
  }

  renderPills() {
    let pills
    if(this.props.pills) {
      pills = this.props.pills.map(pill => {
          return <Pill key={pill._id} {...pill} />
      })
    }
    return pills
  }

  renderView = () => {
    switch (this.props.viewstate) {
      case 'create':
        return <CreatePill 
                  onSubmit={this.onCreate}
                  pillViewstate={this.props.pillViewstate}
                />
      
      default:
        return (
          <div>
            <button onClick={()=>this.props.pillViewstate('create')}>Add Medication</button>
            {this.renderPills()}
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pills: state.pill.pills,
  viewstate: state.pill.viewstate
})

export default connect(mapStateToProps, actions)(Pillbox)

