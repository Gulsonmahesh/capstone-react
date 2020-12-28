const initProductState = {
    products: [
        {id:1, title:'Iphone SE', modal: 'Apple'},
        {id:2, title:'Moto 8', modal: 'Motorolla'},
        {id:3, title:'Poco 3', modal: 'Redmi'},
        {id:4, title:'Realme c1', modal: 'Realme'},
        {id:5, title:'Redmi Note 9', modal: 'Redmi'},
        {id:6, title:'Iphone 12', modal: 'Apple'},
    ],
    productsincart: sessionStorage.getItem('productsincart') ? JSON.parse(sessionStorage.getItem('productsincart')) : []
};

const productReducer = (state = initProductState, action) => {
    
    let productsincart = state.productsincart;

    switch (action.type) {
        case 'PROD_ADD':
            productsincart.push(action.product);
            sessionStorage.setItem('productsincart', JSON.stringify(productsincart));
            return { ...state, productsincart };
        case 'PROD_REMOVE':
            productsincart = productsincart.filter( product => product.id !== action.product.id);
            return { ...state, productsincart };

        default:
            return state;
    }
}

export default productReducer;