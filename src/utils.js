/**
 * insert a value at particular index
 * e.g. insert 5 at 2nd index or after 1st index
 * @param {startIndex} number
 * @param {deleteCount} number
 * @param {valueToInsert} number
 */

const x = [1, 2, 3, 4, 10];
x.splice(2,0,5)


/**
 * add / copy existing array into another array
 */

const y = [5,6,7,8,9]
const z = [...y,10,11,12]
