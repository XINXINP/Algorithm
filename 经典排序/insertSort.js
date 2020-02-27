/*
 * @Descripttion: 🐉扑克牌插入排序
 * @Author: xinxin
 * @Date: 2020-02-18 17:04:36
 * @LastEditTime: 2020-02-27 09:57:39
 */
function insertSort(array){
for (let index = 1; index < array.length; index++) {
    for (let i = index-1; i >=0&&array[i]>array[i+1]; i--) {
        swap(i,i+1,array)
    }
}
return array
}
function swap(i,j,arr){
arr[i] = arr[i]^arr[j]
arr[j] = arr[i]^arr[j]
arr[i] = arr[i]^arr[j]
return arr
}
console.log(insertSort([78,56,45,128,79,32,26,54,58]));
