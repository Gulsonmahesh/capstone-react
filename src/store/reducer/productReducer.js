const initProductState = {
    products: [],
    productsincart: sessionStorage.getItem('productsincart') ? JSON.parse(sessionStorage.getItem('productsincart')) : []
};

function returnState (state, productInsession) {
    sessionStorage.setItem('productsincart', JSON.stringify(productInsession));
    return state = {
        ...state,
        productsincart:productInsession
    }
}

const productReducer = (state = initProductState, action) => {
    let productsincart = state.productsincart;
    let productInsession = [];
    
    switch (action.type) {
        case 'LOAD_PRODUCT' :
            return {
                ...state,
                products : action.result
            }
        case 'PROD_ADD':
            productsincart = productsincart.filter( product => product.id !== action.product.id);
            productsincart.push(action.product);
            sessionStorage.setItem('productsincart', JSON.stringify(productsincart));
            return { ...state, productsincart };
        case 'PROD_REMOVE':
            productsincart = productsincart.filter( product => product.id !== action.id);
            return returnState(state, productsincart);
        case 'PROD_COUNT_CHANGE':
            productInsession = productsincart.map(productInsession => {
                if(productInsession.id === action.product.id) {
                    productInsession.count = (action.countType === 'decrease') ? productInsession.count-1 : productInsession.count+1;
                }
                return productInsession;
            });
            return returnState(state, productInsession);
        default:
            return state;
    }
}

export default productReducer;