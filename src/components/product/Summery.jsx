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

class Productsummary extends Component {
    constructor(props) {
        super(props);
        this.state = { modifyStatus: false, selectedId: null }
    }
    componentDidMount() {
        this.props.initProducts();
        document.querySelector('html').style.overflow = 'auto';
    }
    componentWillUnmount() {
        document.querySelector('html').style.overflow = 'hidden';
    }
    getProductId = () => {
        this.setState({ modifyStatus: !this.state.modifyStatus })
    }

    render() {
        return (
            <Fragment>
                <Container fluid>
                    <Row className="mt-2">
                        <Col>
                            <Alert variant="success">
                                <Alert.Heading>Welcome. How's it going?! You have an Admin Rights to sum Product Actions</Alert.Heading>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button variant="outline-success">Add</Button>
                                    <Button variant="outline-primary" onClick={this.getProductId}>Edit!</Button>
                                    <Button variant="outline-danger" onClick={this.getProductId}>Remove</Button>
                                </div>
                            </Alert>
                        </Col>
                    </Row>
                    {
                        this.state.modifyStatus && <Row className="mt-2" >
                        <Col>
                            <Form>
                                <Form.Row className="align-items-center">
                                    <Col xs="auto">
                                        <Form.Label className="d-inline-block" htmlFor="inlineFormInput">Enter Id of the product</Form.Label>
                                    </Col>
                                    <Col xs="auto">
                                        <Form.Control className="mb-2" id="inlineFormInput" placeholder="Jane Doe"/>
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
                                        this.props.products && this.props.products.length && this.props.products.map((singleProduct) => {
                                            return <tr key={singleProduct.id}>
                                                <td>{singleProduct.id}</td>
                                                <td>{singleProduct.name}</td>
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