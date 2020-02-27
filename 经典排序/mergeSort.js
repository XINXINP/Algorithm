/*
 * @Descripttion: 🐉归并排序
 * @Author: xinxin
 * @Date: 2020-02-27 14:43:28
 * @LastEditTime: 2020-02-27 16:22:08
 */
// 归并排序基础思路：
// 归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法的一个非常典型的应用。
// 首先考虑下如何将2个有序数列合并。这个非常简单，只要从比较2个数列的第一个数，谁小就先取谁，取了后就在对应数列中删除这个数。
// 然后再进行比较，如果有数列为空，那直接将另一个数列的数据依次取出即可。
function mergeSort(arr,l,r){
  if(l == r){
      return [arr[l]]
  }
  let mid = parseInt((l+r)/2)
  let arrleft = mergeSort(arr,l,mid)

  let arrRight = mergeSort(arr,mid+1,r)
  return merge(arrleft,arrRight)
}
function merge(arrleft,arrRight){
let i = 0
let j = 0
let temp =[]
while(i<arrleft.length||j<arrRight.length){
if(arrleft[i]<arrRight[j]||j>=arrRight.length){
    temp.push(arrleft[i])
    i++
}else if(arrleft[i]>=arrRight[j]||i>=arrleft.length){
    temp.push(arrRight[j])
    j++
}
}
return temp
}
let arr2 = [7,5,4,3,56,2,1,5,6,9]
console.log(mergeSort(arr2,0,arr2.length-1));

