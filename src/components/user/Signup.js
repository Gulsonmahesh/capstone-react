import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { API_BASE_ADDRESS, API_OPTION } from '../../utilities/constants';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '', lastName: '',  username: '', password: '', 
            email: '', submitted: false, registering: false,
            loginStatus: false
        }
    }

    componentDidMount() {
        if(sessionStorage.getItem("userStatus")){
            let user = JSON.parse(sessionStorage.getItem('userStatus'));
            console.log(user.user[0])
            this.setState({...user.user[0], loginStatus: true})
        } else {
            this.setState({loginStatus: false})
        }
        console.log(this.state)
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    }

    insertUser = (event) => {
        event.preventDefault();
        let api = `${API_BASE_ADDRESS}/users`
        fetch(api, {...API_OPTION, body: JSON.stringify(this.state)}
        ).then(response => response.json())
        .then(data => {
            alert("USer Added Successufully");
            sessionStorage.setItem('userStatus', JSON.stringify(this.state))
            setTimeout(() => {
                this.props.history.push('/login');
            }, 1000);
        })
        .catch((error) => {
            alert('error')
          console.log('Error:', error);
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({submitted : true});
        if(this.state.loginStatus) {
            await fetch(`${API_BASE_ADDRESS}/users/${this.state.id}`, { method: 'DELETE'}).then(
                result => {
                    if(result.status === 200) {
                        this.insertUser(e);
                    } else {
                        alert('unable to remove the deatils to make the update on the previous details');
                    }
                }
            ).catch((error) => {
                alert('error')
                console.log('Error:', error);
            });
        } else {
            this.insertUser(e);
        }
        
    }

    render() {
        const user = this.state;
        const submitted = user.submitted;
        const registering = user.registering;
        const title = user.loginStatus ? 'Edit Your Details' : 'Register your Details';
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 mt-4">
                    <h2>{ title }</h2>
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
                            <input type="email" disabled = { this.state.loginStatus ? 'disabled' : '' }  name="email" value={user.email} onChange={this.handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
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

export default Signup;