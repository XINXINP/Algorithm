/*
 * @Descripttion: 🐉生成窗口最大值数组
 * @Author: xinxin
 * @Date: 2020-03-03 11:31:53
 * @LastEditTime: 2020-03-03 22:21:15
 */
/**
 * @name: largestWindow
 * @test: test font
 * @msg: 获取窗口最大值数组
 * @param {Array} arr,{number}w
 * @return: {Array}
 */
//暴力求解
function largestWindow(arr,w){
    let arr1 = []
    for (let i = 0; i < arr.length-w+1; i++) { 
        let max = arr[i]
        for(j=1;j<w;j++){
            max = max>arr[i+j]?max:arr[i+j]
        }
        arr1.push(max)  
    }
    return arr1
}
console.log(largestWindow([4,5,6,7,8,9,0,6,5,4,3,5],3));
//利用双端队列实现窗口的最大值更新

function largestWindowa(arr,w){
let arr1 = []
let arr2=[]
for (let i = 0; i < arr.length; i++) {
    if(arr1[0]<(i+1-w)){
        arr1.shift()
    }
    while(true){
        if(arr1.length==0){
            arr1.unshift(i)
            break
        }
        let j =arr1[arr1.length-1]
        if(i==0)break
        if(arr[j]>arr[i]){
        arr1.push(i)
        break
        }else {
            arr1.pop();
        }
    }
    if(i>=w-1){
        arr2.push(arr[arr1[0]])
    }
}
return arr2
}
console.log(largestWindowa([4,5,6,7,8,9,0,6,5,4,3,5],3));
