import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
// import { API_BASE_ADDRESS, API_OPTION } from '../../utilities/constants';

class Addproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', brand: '', mrp: '' , images: '', performance: '',
            display: '', storage: '', camera: '', battery: '', ram: '',
            submitted: false, registering: false
        }
    }
    
    handleChange = (e) => {
        console.log('test');
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
        console.log(this.state)
    }

    saveProduct = () => {
        this.setState({submitted: true})
    }
    
    render () {
        const producttoadd = this.state;
        const submitted = producttoadd.submitted;
        const registering = producttoadd.registering;
        return (
            <Fragment>
                <Container fluid className="mt-5 p-5">
                    <Row>
                        <Col>
                            <form name="form" onSubmit={this.saveProduct}>
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
                                <input type="text" name="mrp" value={producttoadd.mrp} onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.mrp ? ' is-invalid' : '')} />
                                { submitted && !producttoadd.mrp && <div className="invalid-feedback">MRP is required</div> }
                            </div>
                            <div className="form-group">
                                <label>Modal Photo Path</label>
                                <input type="text" name="images" value={producttoadd.images} onChange={this.handleChange} className={'form-control' + (submitted && !producttoadd.images ? ' is-invalid' : '')} />
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
                                <Button variant="primary">
                                    {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Register
                                </Button>
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

export default Addproduct;