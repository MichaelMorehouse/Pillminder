import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreatePill from './CreatePill'
import PillDetails from './PillDetails'
import * as actions from '../../actions'

class Pill extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.onCreate = this.onCreate.bind(this)
    }
    
    onCreate = formProps => {
        debugger
        this.props.createPill(formProps, function() {
          console.log("Called it!")
        })
    }

    renderView() {
        switch (this.props.viewstate) {
            case 'create':
                return <CreatePill onSubmit={formProps=>this.onCreate(formProps)}/>
            
            default:
                return <PillDetails />
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
    viewstate: state.pill.viewstate
})

export default connect(mapStateToProps, actions)(Pill)