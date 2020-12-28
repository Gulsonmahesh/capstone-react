import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Checkout extends Component {
  state = {};
  componentDidMount() {
    document.querySelector("#cartlistitem").style.display = "none";
  }
  render() {
    console.log(this.props.selectedProduct);
    const selectedProducts = this.props.selectedProduct;
    return (
      <Fragment>
        <div className="container mt-5">
          <div className="row p-5">
            <div className="col-12 col-md-9 col-lg-9">
              <div className="accordion" id="accordionproductcheckout">
                {selectedProducts.map((product, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapseOne${index}`}
                      >
                        {product.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse false"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionproductcheckout"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the first item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <div
                className="_1YokD2 _3Mn1Gg col-4-12 _78xt5Y"
                style={{padding: '0px 0px 0px 16px'}}
              >
                <div className="_1AtVbE col-12-12">
                  <div className="dimARw">
                    <div className="_35mLK5">
                      <span className="_3aPjap">Price details</span>
                      <div className="_I_XQO">
                        <div className="Ob17DV">
                          <div className="_24KATy">
                            <div className="_2npqm0">Price (1 item)</div>
                          </div>
                          <span> ₹999</span>
                        </div>
                        <div className="Ob17DV">
                          <div className="_24KATy">
                            <div className="_2npqm0">Discount</div>
                          </div>
                          <div className="_1YVZr_">− ₹845</div>
                        </div>
                        <div className="Ob17DV">
                          <div className="_24KATy">
                            <div className="_2npqm0">Delivery Charges</div>
                          </div>
                          <span> ₹40</span>
                        </div>
                        <div className="_3LxTgx">
                          <div className="Ob17DV">
                            <div className="_24KATy">
                              <div className="_2npqm0">Total Amount</div>
                            </div>
                            <span>
                              <div className="_1dqRvU">
                                <div className="Ob17DV _3X7Jj1">
                                  <div className="_24KATy">
                                    <div className="_2npqm0"></div>
                                  </div>
                                  <span> ₹194</span>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                        <div className="_3s5O6i">
                          You will save ₹805 on this order
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    selectedProduct: state.product.productsincart
      ? state.product.productsincart
      : null,
  };
};
export default connect(mapStateToProps)(Checkout);
