import React, { Component } from 'react'
import { connect } from 'react-redux';
import{ loginAction } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';
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
    clearfields = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    render() {
        const sessionUser = JSON.parse(sessionStorage.getItem('userStatus'));
        // console.log(sessionUser)
        const styleContainer = {
            // container: {
            //     maxWidth : '500px',
            //     height: '80vh'
            // },
            input : {
                color: 'black'
            }
        }
        if (sessionUser && sessionUser.loginStatus) return <Redirect to="/"  />
        return (
            
            <div id="logincontainer" className="container mt-5 align-items-center">
                <div className="row p-5">
                    <div className="col-lg-8 offset-lg-2 mt-4">
                        <form name="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" id="email" onChange={this.handleChange} style= {styleContainer.input} value ={this.state.email} />
                        </div>
                        <div className="input-field form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" type="password" id="password" onChange={this.handleChange} style= {styleContainer.input} value ={this.state.password}/>
                        </div>
                        <div className="input-field form-group">
                            <button className="btn btn-primary lighten-1 z-depth-1 white-text mr-5">Login</button>
                            <button className="btn" onClick = {this.clearfields}>Clear</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
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