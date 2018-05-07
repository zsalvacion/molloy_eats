import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo'; 
import gql from 'graphql-tag';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
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
    async handleLogin(){
      var result = await this.props.login(this.state.username, this.state.password); 
      this.saveToken(result.data.login.token);
      alert("Welcome " + result.data.login.user); 
      this.props.history.push("/profile");
    };

    render() {
        return (
            <form>
                <h2> Please sign in </h2>
                <label htmlFor="inputUsername"> Username </label>
                <input onChange={value => this.handleUsernameChange(value)} id="inputUsername" placeholder="Username" required autoFocus />
                <label htmlFor="inputPassword"> Password</label>
                <input type="password" onChange={value => this.handlePasswordChange(value)} id="inputPassword" placeholder="Password" required />
                <button onClick={this.handleLogin} type="button"> Sign in</button>
                <li><Link to='/register'>Need a new account?</Link></li>
            </form>
        )
    }

  saveToken = token => {
    localStorage.setItem('auth-token', token);
  }

}

export default graphql(
  gql`
    mutation Login($Username: String!, $Password: String!) {
      login(Username: $Username, Password: $Password) {
        user
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      login: ( Username, Password ) => mutate({ variables: {Username, Password} }),
    }),
  },
)(Login);