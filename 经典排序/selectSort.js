/*
 * @Descripttion: 🐉选择排序
 * @Author: xinxin
 * @Date: 2020-02-18 17:56:09
 * @LastEditTime: 2020-02-27 10:10:35
 */
//平均时间复杂度：O(n^2)空间复杂度O(1)
//选择排序的实现思路：
//在长度为N的无序数组中，第一次遍历n-1个数，找到最小的数值与第一个元素交换；
// 第二次遍历n-2个数，找到最小的数值与第二个元素交换；
// 。。。
// 第n-1次遍历，找到最小的数值与第n-1个元素交换，排序完成。
function selectSort(arr){
    for (let  i= 0; i < arr.length-1; i++) {
        let min = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){ 
                min = j
            }
        }
        arr[i] = arr[i]^arr[min]
        arr[min]= arr[min]^arr[i]
        arr[i] = arr[i]^arr[min]
        
    }
    return arr
}
console.log(selectSort([5,89,6,3,4,8,9,7,5,6,23,45]));
