import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
          email:'',
          password:''
        };
    }

    handleEmailChange(e){
    this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    signIn(){
    alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);            
    }

    render() {
        return (
            <form>
                <h2> Please sign in </h2>
                <label htmlFor="inputEmail"> Email address </label>
                <input id="inputEmail" placeholder="Username" required autoFocus />
                <label htmlFor="inputPassword"> Password</label>
                <input type="password" id="inputPassword" placeholder="Password" required />
                <button onClick={this.signIn} type="button"> Sign in</button>
                <li><Link to='/register'>Register</Link></li>
            </form>
        )
    }
}

export default Login