import React from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { dispatchLoginAction } from '../../actions/auth.action';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errorMsg: '',
    };
  }

    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value,
      });
      // console.log(this.state);
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const { username, password } = this.state;
      if (username === '') {
        this.setState({ errorMsg: 'username can\'t be empty' });
        return;
      }
      if (password === '') {
        this.setState({ errorMsg: 'password can\'t be empty' });
        return;
      }
      const { dispatchLoginAction } = this.props;
      dispatchLoginAction({ username, password },
        (res) => {
          this.setState({ errorMsg: '' });
          setTimeout(() => {
            this.props.history.push('/parts');
          });
        },
        (err) => {
          this.setState({ errorMsg: 'Error: Incorrect Username/Password' });
        });
    };

    render() {
      return (
        <section>
          <h2 className="title"> Login </h2>
          <form className="auth-form" onSubmit={this.handleSubmit}>

            <label>username</label>
            <input
              className="form-control"
              type="text"
              id="username"
              onChange={this.handleChange}
            />

            <label>password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              onChange={this.handleChange}
            />

            <button className="btn btn-outline-primary"> Login </button>

          </form>
          <p className="text-danger err">
            {this.state.errorMsg}
          </p>
        </section>
      );
    }
}

export default connect(null, { dispatchLoginAction })(Login);
