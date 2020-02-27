/*
 * @Descripttion: 🐉冒泡排序
 * @Author: xinxin
 * @Date: 2020-02-27 10:13:07
 * @LastEditTime: 2020-02-27 10:37:00
 */
// 平均时间复杂度：O(n2)
function bubbleSort(arr){
for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
        
        if(arr[j]<arr[j-1]){
            //两值互换
            arr[j]=arr[j]^arr[j-1]
            arr[j-1]=arr[j-1]^arr[j]
            arr[j]=arr[j]^arr[j-1]
        }
    }
}
return arr
}
console.log(bubbleSort([3,4,5,6,3,4,2,7,5,4,87,65,4,33]));

