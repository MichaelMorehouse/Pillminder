import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import EditPill from './EditPill'
import DeletePill from './DeletePill'
class Pill extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         viewstate: ''
      }
    }
    
    onEdit = formProps => {
        formProps = {...formProps, id: this.props._id}
        this.props.editPill(formProps, () => {
            console.log("Clear!!")
            this.setState({viewstate: ''})
        })
    }

    onDelete = () => {
        this.props.deletePill(this.props._id, () => {
            console.log("Deleted!!")
            this.setState({viewstate: ''})
        })
    }

    onDecline = () => {
        this.setState({viewstate: ''})
    }

    renderView() {
        switch (this.state.viewstate) {
            case 'edit':
                const initialState = {
                    name: this.props.name,
                    count: this.props.count
                }
                return <EditPill 
                            onSubmit={this.onEdit}
                            initialValues={initialState}
                        />
            case 'delete':
                return <DeletePill 
                            onDelete={this.onDelete}
                            onDecline={this.onDecline}
                        />
            default:
                return (
                    <div>
                        <br />
                        <span>
                            <span>Name: {this.props.name} </span>
                            <span>Count: {this.props.count} </span>
                            <button onClick={()=>this.setState({viewstate: 'edit'})}>Edit</button>
                            <button onClick={()=>this.setState({viewstate: 'delete'})}>Delete</button>
                        </span>
                        <br />
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

export default connect(null, actions)(Pill)