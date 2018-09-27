import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

export class NavBar extends Component {
  renderNavpaths() {
    if(this.props.authenticated) {
      return (
        <div>
          <li><NavLink to="/pillbox">My Pillbox</NavLink></li>
          <li><NavLink to="/signout">Sign Out</NavLink></li>
        </div>
      )
    } else {
      return (
        <div>
          <li><NavLink to="/signin">Sign In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><NavLink exact to="/">PillMinder</NavLink></li>
          {this.renderNavpaths()}
        </ul>      
      </div>
    )
  }
}

const mapStateToProps = state => ({ authenticated: state.auth.authenticated })

export default connect(mapStateToProps)(NavBar)