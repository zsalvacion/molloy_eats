import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo'; 
import gql from 'graphql-tag';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
          email:'',
          phoneNumber:''
        };
    }

    handleEmailChange(e){
      this.setState({email:e.target.value});
    };
    handlePhoneChange(e){
      this.setState({phoneNumber:e.target.value});
    };
    handleSubmit(){
      alert('New Phone is ' + this.state.email + ' New Email is ' + this.state.phoneNumber);
      this.props.editStudentProfile(this.state.email, this.state.phoneNumber);  
    };
    handleLogout(){
      this.deleteToken();
      this.props.history.push("/");  
    };


  render() {
      return (
        <div>
          <h2>Welcome Student!</h2>
            <form>
              <h2>Edit Profile</h2>
              <li><Link to='/armenu'>AR Menu</Link></li>
              <li><Link to='/bareburger'>Bareburger Menu</Link></li>
              <li><Link to='/orders'>Order History</Link></li>
              <label htmlFor="inputEmail">Email: </label>
              <input type="email" onChange={value => this.handleEmailChange(value)} id="inputEmail" placeholder="Email" required autoFocus />
              <label htmlFor="inputPhoneNumber"><br />Phone Number: </label>
              <input type="tel" onChange={value => this.handlePhoneChange(value)} id="inputPhoneNumber" placeholder="Phone Number" required />
              <br /><button onClick={this.handleSubmit} type="button">Submit</button>
              <button onClick={this.handleLogout} type="button"> Logout</button>
            </form>
        </div>     
      );
    }

  deleteToken = () => {
    localStorage.removeItem('auth-token');
  }
}

export default graphql(
  gql`
    mutation EditStudentProfile($StudentPhone: String!, $StudentEmail: String!) {
      editStudentProfile(StudentPhone: $StudentPhone, StudentEmail: $StudentEmail) {
        Username
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      editStudentProfile: ( StudentPhone, StudentEmail ) => mutate({ variables: {StudentPhone, StudentEmail} }),
    }),
  },
)(Profile);