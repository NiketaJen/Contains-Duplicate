let nums = [1, 2, 3, 1]

var containsDuplicate = function(nums) {
   let checkNumbers = new Set();

   for (let num of nums) {
       if(!checkNumbers.has(num)) {
           checkNumbers.add(num)
       } else {
           return true;
       }
   }
   return false;
};

//Time complexity: O(n)
//Space complexity: ??
//use Set method has and add 