export function arraySplit(arrayData, splitValue) {
    arrayData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/splitValue)
    if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []
    }
    resultArray[chunkIndex].push(item)
    return resultArray
    }, []);
}

export const checkDuplicate = (id) => {
    let alreadyExist = 0;
    if(sessionStorage.getItem('productsincart')) {
        alreadyExist =   parseInt((JSON.parse(sessionStorage.getItem('productsincart')).filter(product => product.id === id)).length);
    }
    return alreadyExist;
}

export const returnState = (state, productInsession) => {
    sessionStorage.setItem('productsincart', JSON.stringify(productInsession));
    return state = {
        ...state,
        productsincart:productInsession
    }
}

export const findByTestAttr = (component, attribute) => {
    const wrapper = component.find(`[data-test='${attribute}']`)
    return wrapper;
}