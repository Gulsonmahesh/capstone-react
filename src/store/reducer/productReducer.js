const initProductState = {
    products: [
        {id:1, title:'Iphone SE'},
        {id:2, title:'Moto 8'},
        {id:3, title:'Poco 3'},
        {id:4, title:'Realme c1'},
        {id:5, title:'Redmi Note 9'},
        {id:6, title:'Iphone 12'},
    ]
};

const productReducer = (state = initProductState, action) => {
    return state;
}

export default productReducer;