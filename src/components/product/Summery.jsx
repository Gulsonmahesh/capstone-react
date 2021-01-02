import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux'
import { initProducts } from '../../store/actions/productAction';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { API_BASE_ADDRESS } from '../../utilities/constants';
import { Link }from 'react-router-dom'

class Productsummary extends Component {
    constructor(props) {
        super(props);
        this.state = { modifyStatus: false, selectedId: null, selectedOption: '', userStatus: false }
    }
    componentDidMount() {
        this.props.initProducts();
        let userDetails = {loginStatus : false};
        if(sessionStorage.getItem('userStatus')) {
            userDetails = JSON.parse(sessionStorage.getItem('userStatus')).user[0];
            this.setState({userStatus : userDetails.admin})
        }
        document.querySelector('html').style.overflow = 'auto';
    }
    componentWillUnmount() {
        document.querySelector('html').style.overflow = 'hidden';
    }
    getProductId = (selectedMethod) => {
        this.setState({ modifyStatus: !this.state.modifyStatus, selectedOption: selectedMethod})
    }
    gotoaddproduct = () => {
        this.props.history.push('/addproduct');
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state)
        if(this.state.selectedOption === 'delete'){
            await fetch(`${API_BASE_ADDRESS}/modals/${this.state.selectedId}`, { method: 'DELETE'}).then(result => {
                if(result.status === 200) {
                    this.props.initProducts();
                } else {
                    alert('unable to remove the details to make the update on the previous details');
                }
            }).catch(error => {
                console.log('Error', error);
            });
        } else {
            this.props.history.push(`/editproduct/${this.state.selectedId}`)
        }
    }
    handleChange = (e) => {
        setTimeout(() => {
            const { name, value } = e.target;
            this.setState({
                [name] : value
            })
        }, 0);
    }
    render() {
        return (
            <Fragment>
                <Container fluid>
                    {
                        this.state.userStatus && <Row className="mt-2">
                        <Col>
                            <Alert variant="success">
                                <Alert.Heading>Welcome. How's it going?! You have an Admin Rights to sum Product Actions</Alert.Heading>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button variant="outline-success" onClick={this.gotoaddproduct}>Add</Button>
                                    <Button variant="outline-primary" onClick={() => this.getProductId('edit')}>Edit!</Button>
                                    <Button variant="outline-danger" onClick={() => this.getProductId('delete')}>Remove</Button>
                                </div>
                            </Alert>
                        </Col>
                        </Row>
                    }
                    {
                        this.state.modifyStatus && <Row className="mt-2">
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Row className="align-items-center">
                                    <Col xs="auto">
                                        <Form.Control name="selectedId" onChange={this.handleChange} className="mb-2" id="inlineFormInput" placeholder="Enter Id of the product"/>
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit" className="mb-2"> Submit</Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>
                    }
                    <Row className="mt-2">
                        <Col>
                            <Table responsive bsPrefix="table" variant="dark" hover>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                        <th>RAM</th>
                                        <th>Storage</th>
                                        <th>display</th>
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