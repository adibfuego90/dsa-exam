function bubbleSort(arr){
    for (let i =0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            if (arr[j] > arr[j+1]){
                let temp =arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =temp;
            }
        }
    }
    return arr;
}
//a =[1,11,3,4,5,6]
// b=[2,5,3,4,7,9]


console.log(bubbleSort([1,2,111,5,7,6,9]));

// Time complexity : O(n^2)
// Space Complexity : O(1)
