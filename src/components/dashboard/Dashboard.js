import React, { Component } from 'react'
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { connect } from 'react-redux';
import './dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="p-0 mx-2 my-2" id="dashboard">
                <div className="leftpane">
                    <LeftPane />
                </div>
                <div className="rightpane">
                    <RightPane products= {this.props.products}/>
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