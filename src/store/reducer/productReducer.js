const initProductState = {
    products: [
        {id:1, title:'Iphone SE'},
        {id:2, title:'Moto 8'},
    ]
};

const productReducer = (state = initProductState, action) => {
    return state;
}

export default productReducer;