import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreatePill from './CreatePill'
import PillDetails from './PillDetails'
import * as actions from '../../actions'

class Pill extends Component {

    onCreate = formProps => {
        this.props.createPill(formProps, function() {
          console.log("Called it!")
        })
    }

    renderView() {
        switch (this.props.viewstate) {
            case 'create':
                return <CreatePill onSubmit={this.onCreate}/>
            
            default:
                return (
                    <div>
                        <button onClick={()=>this.props.pillViewstate('create')}>Add Medication</button>
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
    viewstate: state.pill.viewstate
})

export default connect(mapStateToProps, actions)(Pill)