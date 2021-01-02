import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

class LeftPane extends Component {
  state = {
    selectedBrand: 'All',
    selectedPrice: '1000'
  };
  changeHandler = (evt) => {
    this.setState(function () {
      return { [evt.target.id]: evt.target.value }
    });
    setTimeout(() => {
      const filterValue =  {
        selectedBrand: this.state.selectedBrand,
        selectedPrice: this.state.selectedPrice
      };

      this.props.onChangeFilter(filterValue)
    }, 500);
  }
  render() {
    return (
      <Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 p-0">
              <div className="form-group ml-3">
              <label htmlFor="selectedBrand">By Brands:</label>
              <select name="selectedBrand" id="selectedBrand" style={{width : '98%'}} className="form-control ng-untouched ng-pristine ng-valid" value={this.state.selectedBrand} onChange={this.changeHandler}>
                {
                  this.props.filter.map(option => <option value={option} key={option} className="ng-star-inserted">{option}</option>)
                }
              </select>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="form-group">
          <label htmlFor="selectedPrice">By Prices:</label>
          <select name="selectedPrice" id="selectedPrice" className="form-control ng-untouched ng-pristine ng-valid" value={this.state.selectedPrice} onChange={this.changeHandler}>
            {
              this.state.price.map(option => <option value={option.value} key={option.value} className="ng-star-inserted">{option.text}</option>)
            }
          </select>
        </div> */}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps)(LeftPane)