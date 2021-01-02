import React, { Component } from 'react'
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { connect } from 'react-redux';
import './dashboard.css';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { filter: null } ;
    }

    updateFilter = filter => {
        this.setState({
            filter:filter
        });
    }

    render() {
        return (
            <div className="p-0 m-2" id="dashboard">
                <div className="leftpane">
                    <LeftPane onChangeFilter = {filterValue => this.updateFilter(filterValue)} />
                </div>
                <div className="rightpane">
                    <RightPane products= {this.props.products} filter= {this.state.filter} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.product.products
    }
}

export default connect(mapStateToProps)(Dashboard);