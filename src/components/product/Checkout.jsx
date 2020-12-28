import React, { Component , Fragment} from 'react';

class Checkout extends Component {
    state = {  }
    componentDidMount() {
        document.querySelector('#cartlistitem').style.display = 'none'
    }
    render() { 
        return ( 
            <Fragment>
                check out page 
            </Fragment>
         );
    }
}
 
export default Checkout;