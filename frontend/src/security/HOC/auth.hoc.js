import React from 'react';
import { connect } from 'react-redux';

const auth = (OldComponent) => {
  class HocComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    static getDerivedStateFromProps(props, state) {
      if (!props.loggedIn) {
        props.history.push('/login');
      }
      return state;
    }

    render() {
      return <OldComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    loggedIn: state.loggedIn,
  });
  return connect(mapStateToProps)(HocComponent);
};

export default auth;
