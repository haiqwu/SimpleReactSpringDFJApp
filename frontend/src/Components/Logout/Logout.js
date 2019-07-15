import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dispatchLogoutAction } from '../../actions/logout.action';

class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatchLogoutAction();

    setTimeout(() => {
      this.props.history.push('/login');
    }, 3000);
  }

  render() {
    return (
      <section>
        <p>Logged out success</p>
        <p> will redirect to login after 3 seconds...</p>

        <NavLink to="/login">
          <button className="btn-primary btn"> Redirect Now </button>
        </NavLink>
      </section>

    );
  }
}

const createConnect = connect(null, { dispatchLogoutAction });

export default createConnect(Logout);
