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
      alert('Username is ' + this.state.username + ' Password is ' + this.state.password);
      this.props.register(this.state.username, this.state.password);  
    };

  render() {
      return (
        <div>
          <form>
            <h2>Please sign up</h2>
            <label htmlFor="inputaUsername">Username</label>
            <input onChange={value => this.handleUsernameChange(value)} id="inputUsername" placeholder="Username" required autoFocus />
            <label htmlFor="inputPassword">Password</label>
            <input type="password" onChange={value => this.handlePasswordChange(value)} id="inputPassword" placeholder="Password" required />
            <button onClick={this.handleRegister} type="button">Register</button>
            <li><Link to='/'>Login</Link></li>
          </form>
        </div>
         
      );
    }
}

export default graphql(
  gql`
    mutation Register($StudentName: String!, $Password: String!) {
      register(StudentName: $StudentName, Password: $Password) {
        StudentName
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      register: ( StudentName, Password ) => mutate({ variables: {StudentName, Password} }),
    }),
  },
)(Register);
