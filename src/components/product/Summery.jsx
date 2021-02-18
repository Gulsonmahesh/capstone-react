import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux'
import { initProducts } from '../../store/actions/productAction';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';
import { API_BASE_ADDRESS } from '../../utilities/constants';
import { Link }from 'react-router-dom'

class Productsummary extends Component {
    constructor(props) {
        super(props);
        this.state = { userStatus: false }
    }
    componentDidMount() {
        this.props.initProducts();
        let userDetails = {loginStatus : false};
        if(sessionStorage.getItem('userStatus')) {
            userDetails = JSON.parse(sessionStorage.getItem('userStatus')).user[0];
            this.setState({userStatus : userDetails.admin})
        }
        document.querySelector('html').style.overflow = 'auto';
        fetch(`${API_BASE_ADDRESS}/productsmostviewed?_sort=id`).then(res => res.json()).then(result => console.log(result)).catch( error => {
            console.log(error)
        })
    }
    componentWillUnmount() {
        document.querySelector('html').style.overflow = 'hidden';
    }
    gotoaddproduct = () => {
        this.props.history.push('/addproduct');
    }
    handleSubmit = async (id, option) => {
        if (option === 'delete') {
            await fetch(`${API_BASE_ADDRESS}/modals/${id}`, { method: 'DELETE'}).then(result => {
                if(result.status === 200) {
                    this.props.initProducts();
                } else {
                    alert('unable to remove the details to make the update on the previous details');
                }
            }).catch(error => {
                console.log('Error', error);
            });
        } else {
            this.props.history.push(`/editproduct/${id}`)
        }
    }
    handleChange = (e) => {
        setTimeout(() => {
            const { name, value } = e.target;
            this.setState({[name] : value})
        }, 0);
    }
    render() {
        return (
            <Fragment>
                <Container fluid>
                    {
                        this.state.userStatus && 
                        <Row className="mt-2">
                        <Col>
                            <Alert variant="light">
                                <div className="d-flex justify-content-between flex-column flex-md-row flex-lg-row">
                                    <Alert.Heading className="mx-sm-10">Welcome. How's it going?! You have an Admin Rights to sum Product Actions</Alert.Heading>
                                    <Button className="p-2" variant="outline-success" onClick={this.gotoaddproduct}>Add</Button>                                    
                                </div>
                            </Alert>
                        </Col>
                        </Row>
                    }
                    <Row className="mt-2">
                        <Col>
                            <Table className="d-block"  bsPrefix="table" variant="dark" hover>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                        <th>RAM</th>
                                        <th>Storage</th>
                                        <th>display</th>
                                        { this.state.userStatus && <th colSpan="2"></th> }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.products && this.props.products.length!==0 && this.props.products.map((singleProduct) => {
                                            return <tr key={singleProduct.id}>
                                                <td>{singleProduct.id}</td>
                                                <td><Link to={`/product/${singleProduct.name}`}>{singleProduct.name}</Link></td>
                                                <td>{singleProduct.brand}</td>
                                                <td>{singleProduct.mrp}</td>
                                                <td>{singleProduct.ram}</td>
                                                <td>{singleProduct.storage}</td>
                                                <td>{singleProduct.display}</td>
                                                {
                                                    this.state.userStatus && 
                                                    <td colSpan="2">
                                                        <Button variant="warning" onClick={() => this.handleSubmit(singleProduct.id, 'edit')}>Edit!</Button>
                                                        <Button variant="danger" onClick={() => this.handleSubmit(singleProduct.id, 'delete')}>Remove</Button>
                                                    </td>
                                                }                                                
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.product.products && state.product.products.length) {
        return {
            products: state.product.products
        }
    } else {
        return {
            products: []
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initProducts: () => dispatch(initProducts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productsummary);