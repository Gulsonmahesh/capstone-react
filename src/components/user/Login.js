import React, { Component } from 'react'
import { connect } from 'react-redux';
import{ loginAction } from '../../store/actions/authAction';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: ''}
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginAction(this.state);
        setTimeout(() => {
            if(this.props.user) {
                console.log('Login Sucess');        
                this.props.history.push('/');
            }    
        }, 1000);
        
    }
    render() {
        const styleContainer = {
            // container: {
            //     maxWidth : '500px',
            //     height: '80vh'
            // },
            input : {
                color: 'black'
            }
        }
        return (
            <div id="logincontainer" className="container mt-5">
            <form onSubmit = {this.handleSubmit} className="white p-sm-0 m-sm-0 p-5 m-5">
                <h5 className="gray-text text-darken-3 mb-5">Sign In</h5>
                <div className="input-field mb-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} style= {styleContainer.input} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} style= {styleContainer.input} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-1 white-text">Login</button>
                </div>
            </form>   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        user: state.auth.loginStatus
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (user) => dispatch(loginAction(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);