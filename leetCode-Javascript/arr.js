var removeDuplicates = function (nums) {
    let newArr = [];
    nums.forEach(item => {
        if (newArr.indexOf(item) < 0) {
            newArr.push(item)
        }
    })
 
 return newArr;
};
console.log(removeDuplicates([1,1,2]))