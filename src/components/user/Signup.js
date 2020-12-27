import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '', 
            lastName: '', 
            username: '', 
            password: '', 
            email: '', 
            submitted: false,
            registering: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({submitted : true});
        console.log(this.state);

        // setSubmitted(true);
        // if (user.firstName && user.lastName && user.username && user.password && ) {
        //     dispatch(userActions.register(user));
        // }
    }

    render() {
        const user = this.state;
        const submitted = user.submitted;
        const registering = user.registering;

        return (
            <div className="container mt-0">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                    <h2>Register</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="firstName" value={user.firstName} onChange={this.handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                            {submitted && !user.firstName &&
                                <div className="invalid-feedback">First Name is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastName" value={user.lastName} onChange={this.handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                            {submitted && !user.lastName &&
                                <div className="invalid-feedback">Last Name is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="username" value={user.username} onChange={this.handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                            {submitted && !user.username &&
                                <div className="invalid-feedback">Username is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={user.email} onChange={this.handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                            {submitted && !user.email &&
                                <div className="invalid-feedback">Email is required</div>
                            }
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" value={user.password} onChange={this.handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                            {submitted && !user.password &&
                                <div className="invalid-feedback">Password is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">
                                {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Register
                            </button>
                            <Link to="/login" className="btn btn-link ml-5">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
