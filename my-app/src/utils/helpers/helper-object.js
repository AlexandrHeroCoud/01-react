/**
 * @function updateObjectInArray()
 * @param {Array} items
 * @param {Number} itemId
 * @param {Object} objPropName
 * @return {New Array}
 * **/
export const updateObjectInArray = (items, itemId, objPropName, newObjectProp) => {
    return items.map(i => {
        if (i[objPropName] === itemId) {
            return {...i, ...newObjectProp}
        }
        return i
    })
}