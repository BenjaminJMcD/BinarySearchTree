let arrayToSort = [5, 2, 4, 1, 7, 6, 3, 8, 9]


function mergeSortedHalves(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift())
        } else {
            sortedArray.push(right.shift());
        }
    }
    for (i=0; i<right.length; i++) {
        sortedArray.push(right[i])
    }
    for (i=0; i<left.length; i++) {
        sortedArray.push(left[i])
    }
    return [...sortedArray]
}

function sortAndHalve (arr) {

    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)

    let left = sortAndHalve(arr.slice(0, mid))
    let right = sortAndHalve(arr.slice(mid))

    return mergeSortedHalves(left, right)
}

console.log(sortAndHalve(arrayToSort));


