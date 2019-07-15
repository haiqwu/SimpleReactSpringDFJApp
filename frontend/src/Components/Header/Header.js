import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand"> Dassault Falcon Jet </span>


          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/parts">
                    Parts
                </NavLink>
              </li>
            </ul>

            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                {
                    (this.props.loggedIn)
                    && (
                    <NavLink className="nav-link float-right" activeClassName="active" to="/logout">
                            Logout
                    </NavLink>
                    )
                }
                {
                    (!this.props.loggedIn)
                    && (
                    <NavLink className="nav-link float-right" activeClassName="active" to="/login">
                            Login
                    </NavLink>
                    )
                }
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(Header);
