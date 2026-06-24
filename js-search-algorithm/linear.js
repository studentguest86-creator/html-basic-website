function linear(arr,tar) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === tar) {
            return i;
        }
    }
}
const da = [1,23,34,435,54,546]
console.log(linear(da,8))