 function findMaxValue(array) {
     let max = array[0];
     for (let index = 0; index < array.length; index++) {
         if (array[index] > max) {
             max = array[index]
         }
     }
     return max;
 }

 function countSort(array) {
     if (array.length < 2) {
         return array
     }

     const maxValue = findMaxValue(array);
     const counts = new Array(maxValue + 1);

     array.forEach(item => {
         if (!counts[item]) {
             counts[item] = 0;
         }

         counts[item]++;
     });

     let sortIndex = 0;
     counts.forEach((item, i) => {
         while (item > 0) {
             array[sortIndex++] = i;
             item--;
         }
     })
     return array
 }

 const arr = [908,43,23,4,6,23,0];

 console.log(countSort(arr))