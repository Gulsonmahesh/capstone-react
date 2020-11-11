import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

    }
    render() {
        return (
            <div className="container mt-5">
            <form onSubmit = {this.handleSubmit} className="white p-5 m-5">
                <h5 className="gray-text text-darken-3 mb-5">Sign In</h5>
                <div className="input-field mb-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-1 white-text">Login</button>
                </div>
            </form>   
            </div>
        )
    }
}
