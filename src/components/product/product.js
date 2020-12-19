
import React, { Fragment }  from 'react';

const Product = ({productData}) => {
    console.log(productData);
    return (
        <Fragment>
            {productData.title}
        </Fragment>
    );
}

export default Product;