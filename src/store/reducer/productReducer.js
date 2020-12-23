const initProductState = {
    products: [
        {id:1, title:'Iphone SE', modal: 'Apple'},
        {id:2, title:'Moto 8', modal: 'Motorolla'},
        {id:3, title:'Poco 3', modal: 'Redmi'},
        {id:4, title:'Realme c1', modal: 'Realme'},
        {id:5, title:'Redmi Note 9', modal: 'Redmi'},
        {id:6, title:'Iphone 12', modal: 'Apple'},
    ]
};

const productReducer = (state = initProductState, action) => {
    return state;
}

export default productReducer;