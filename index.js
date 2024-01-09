let arr = [5, 6, 8, 2, 3, 4, 1]
function biggest(array) {
    let res = 0
   for (let i = 0; i < array.length; i++) {
    if (res < array[i]) {
        res = array[i]
    }
   }
   return res
}

console.log(biggest(arr))