const initProductState = {
    products: [
        {id:1, title:'Iphone SE', modal: 'Apple',price:19999},
        {id:2, title:'Moto 8', modal: 'Motorolla',price:9999},
        {id:3, title:'Poco 3', modal: 'Redmi',price:8999},
        {id:4, title:'Realme c1', modal: 'Realme',price:12999},
        {id:5, title:'Redmi Note 9', modal: 'Redmi',price:13999},
        {id:6, title:'Iphone 12', modal: 'Apple', price:99999},
    ],
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