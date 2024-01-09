let arr = [3, 6, 8, 2, 3, 5, 1]
let res = 0
function sum(arrSum) {
    for(let i = 0; i < arrSum.length; i++) {
        res += arrSum[i]
    }
    return res
}


console.log(sum(arr))