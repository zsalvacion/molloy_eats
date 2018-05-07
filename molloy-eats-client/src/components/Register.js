import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo'; 
import gql from 'graphql-tag';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = {
          username:'',
          password:''
        };
    }

    handleUsernameChange(e){
      this.setState({username:e.target.value});
    };
    handlePasswordChange(e){
      this.setState({password:e.target.value});
    };
    handleRegister(){
      this.props.register(this.state.username, this.state.password);
      alert('Account Created');
      this.props.history.push("/");
    };

  render() {
      return (
        <div>
          <form>
            <h2>Please sign up</h2>
            <label htmlFor="inputUsername">Username</label>
            <input onChange={value => this.handleUsernameChange(value)} id="inputUsername" placeholder="Username" required autoFocus />
            <label htmlFor="inputPassword">Password</label>
            <input type="password" onChange={value => this.handlePasswordChange(value)} id="inputPassword" placeholder="Password" required />
            <button onClick={this.handleRegister} type="button">Register</button>
          </form>
          <li><Link to='/'>Login</Link></li>
        </div>
         
      );
    }
}

export default graphql(
  gql`
    mutation Register($Username: String!, $Password: String!) {
      register(Username: $Username, Password: $Password) {
        Username
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      register: ( Username, Password ) => mutate({ variables: {Username, Password} }),
    }),
  },
)(Register);
