/*
 * @Descripttion: 🐉设计一个getMin功能的栈
 * @Author: xinxin
 * @Date: 2020-02-12 21:34:12
 * @LastEditTime : 2020-02-12 22:43:01
 */

//题目：实现一个特殊的栈，在实现栈的基本功能的基础之上，再返回栈中最小元素的操作
//要求：1.pop push getMin的时间复杂度都是O(1) 2.设计栈类型可以使用现成的栈结构
//
var minStack = []
var stack= [];
function push(ele){
    stack.unshift(ele);
    if(!minStack[0]||ele<=minStack[0]){
        minStack.unshift(ele)
    }  
}
function pop(){
    let ele=stack.shift();
    if(minStack[0]&&ele==minStack[0]){
        minStack.shift()
    }
}
function getMin(){
return minStack[0]?minStack[0]:null
}
//测试
let arr1 = [7,5,3,2,5,8,9,8,7,9,4,5,6,2,3,1,5,4,6,5,12]
for (let index = 0; index < arr1.length; index++) {
    push(arr1[index]); 
}
console.log(stack)
console.log(minStack)
for (let index = 0; index < arr1.length; index++) {
    pop(stack[index])
    console.log(`删除${index}元素：`,getMin()) 
}
// module.exports = {}