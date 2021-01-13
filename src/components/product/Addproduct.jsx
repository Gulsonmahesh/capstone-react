import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import { API_BASE_ADDRESS, API_OPTION } from '../../utilities/constants';
import { connect } from 'react-redux';
import { initProducts } from '../../store/actions/productAction'
import { Prompt } from 'react-router-dom'

class Addproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', brand: '', mrp: '' , images: '', performance: '',
            display: '', storage: '', camera: '', battery: '', ram: '',
            submitted: false, registering: false, touched: false
        }
    }

    componentDidMount() {
        document.querySelector('html').style.overflow = 'auto';
        if(this.props.match.params.id) {
            setTimeout(() => {
                if (this.props.product !== null) {
                    let selectedProduct = this.props.product.filter( product => product.id === parseInt(this.props.match.params.id))
                    this.setState({...selectedProduct[0],submitted: false});
                }
            }, 1000);
        }
        
    }

    clearform = () => {
        this.setState({
            name: '', brand: '', mrp: '' , images: '', performance: '',
            display: '', storage: '', camera: '', battery: '', ram: '',
            submitted: false, registering: false
        });
    }
    handleChange = (e) => {;
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
        this.setState({touched : true});
    }
    insertProduct = async () => {
        await fetch(`${API_BASE_ADDRESS}/modals`,{...API_OPTION, body: JSON.stringify(this.state)}).then(result => {
            if(result.status === 200 || result.status === 201) {
                alert(
                    this.props.match.params.id  !== '' 
                    ? 'Product Updated'
                    : 'Product Added'
                );
                this.clearform();
                this.props.initProducts()
                
            } else {
                alert(
                    this.props.match.params.id  
                    ? 'unable to Edit the details pf the selected product'
                    : 'unable to Add the details pf the selected product'
                );
            }
        }).catch((error) => {
            console.log('Error:', error);
        });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({submitted: true});
        delete(this.state.registering);
        delete(this.state.submitted);
        if(this.state.name === '' || this.state.brand === '' || this.state.mrp === '' || 
        this.state.images === '' || this.state.performance === '' || this.state.display === '' || 
        this.state.storage === '' || this.state.camera === '' || this.state.battery === '' 
        || this.state.ram === '') {
            alert('All Details are mandatory');
        } else {
            if(this.props.match.params.id) {
                await fetch(`${API_BASE_ADDRESS}/modals/${this.state.id}`, { method: 'DELETE'}).then(
                    result => {
                        if(result.status === 200) {
                            this.insertProduct();
                        } else {
                            alert('unable to update the deatils of the product');
                        }
                    }
                ).catch((error) => {
                    alert('error')
                    console.log('Error:', error);
                });
            } else {
                this.insertProduct();
            }
        }
    }
    
    render () {
        const producttoadd = this.state;
        const submitted = producttoadd.submitted;
        const registering = producttoadd.registering;
        const buttonTitle = this.props.match.params.id ? 'Update' : 'Save';

        return (
            <Fragment>
                <Prompt when={producttoadd.touched && !submitted} message="Are you sure you want to leave the dully filled details of New Product Insertation?" />
                <Container fluid className="p-5">
                    <Row>
                        <Col>
                            <form name="addproduct" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input type="text" name="name" value={producttoadd.name} onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.name ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.name && <div className="invalid-feedback">Product Name is required</div> }
                            </div>
                            <div className="form-group">
                                <label>Brand Name</label>
                                <input type="text" name="brand" value={producttoadd.brand} onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.brand ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.brand && <div className="invalid-feedback">brand Name is required</div> }
                            </div>
                            <div className="form-group">
                                <label>MRP</label>
                                <input type="text" name="mrp" value={producttoadd.mrp} placeholder="Please Enter Number only" onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.mrp ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.mrp && <div className="invalid-feedback">MRP is required</div> }
                            </div>
                            <div className="form-group">
                                <label>Modal Photo Path</label>
                                <input type="text" name="images" value={producttoadd.images} placeholder="Please enter a valid path" onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.images ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.images && <div className="invalid-feedback">Modal Image is required</div> }
                            </div>
                            <div className="form-group">
                                <label>Performance ( processor ) </label>
                                <input type="text" name="performance" value={producttoadd.performance} onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.performance ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.performance && <div className="invalid-feedback">Modal Image is required</div> }
                            </div>
                            <div className="form-group">
                                <label>display</label>
                                <input type="text" name="display" value={producttoadd.display} onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.display ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.display && <div className="invalid-feedback">Display is required</div> }
                            </div>
                            <div className="form-group">
                                <label>Storage</label>
                                <input type="text" name="storage" value={producttoadd.storage} onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.storage ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.storage && <div className="invalid-feedback">Storage is required</div> }
                            </div>
                            <div className="form-group">
                                <label>Camera</label>
                                <input type="text" name="camera" value={producttoadd.camera} onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.camera ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.camera && <div className="invalid-feedback">Camera is required</div> }
                            </div>
                            <div className="form-group">
                                <label>Battery</label>
                                <input type="text" name="battery" value={producttoadd.battery} onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.battery ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.battery && <div className="invalid-feedback">Battery is required</div> }
                            </div>
                            <div className="form-group">
                                <label>Ram</label>
                                <input type="text" name="ram" value={producttoadd.ram} onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.ram ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.ram && <div className="invalid-feedback">Ram is required</div> }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">
                                    {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}                                    
                                    {buttonTitle}
                                </button>
                                <Link to="/" className="btn btn-link ml-5">Cancel</Link>
                            </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    if(state.product.products !==null && state.product.products.length){
        return {
            product: state.product.products
        }
    } else {
        return {
            product: null
        }
    }
    
}

const mapPropsToDispatch = (dispatch) => {
    return {
        initProducts : () => dispatch(initProducts())
    }
}
export default connect(mapStateToProps, mapPropsToDispatch)(Addproduct);