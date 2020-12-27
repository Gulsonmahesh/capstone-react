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