/*
 * @Descripttion: 🐉快速排序
 * @Author: xinxin
 * @Date: 2020-02-27 10:37:19
 * @LastEditTime: 2020-02-27 12:55:42
 */
// 快排思路：
// 先从数列中取出一个数作为key值；
// 将比这个数小的数全部放在它的左边，大于或等于它的数全部放在它的右边；
// 对左右两个小数列重复第二步，直至各区间只有1个数。
function quickSort(arr,l,r){
    if(l==r){
        return;
    }
    let i = l
    let j = r
    let key = i
    console.log(arr,i,j,arr[key])
    while(i<j){
        while(i<j&&arr[i]<arr[key]){
        i++
        }
        while(i<j&&arr[j]>=arr[key]){
        j--
        }
        if(i!=j){
            arr[i] = arr[i]^arr[j]
            arr[j] = arr[j]^arr[i]
            arr[i] = arr[i]^arr[j]
        i++;
        j--
        }
    }
quickSort(arr,l,i)
quickSort(arr,j+1,r)
}
let arr1 = [8,2,6,3,4,7,9]
quickSort(arr1,0,arr1.length-1)
console.log(arr1)
