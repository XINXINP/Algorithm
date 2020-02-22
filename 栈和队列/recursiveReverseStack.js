/*
 * @Descripttion: 🐉如何仅用递归函数和栈操作逆序一个栈
 * @Author: xinxin
 * @Date: 2020-02-22 08:52:51
 * @LastEditTime: 2020-02-22 10:00:43
 * 
 */
//将栈stack的元素返回并移除
//引入对数器
var {Logarithm} = require('./Logarithm')
function getAndRemoveLastElement(stack){
    let result = stack.pop()
    if(stack.length == 0){
        return result
    }else{
        let last = getAndRemoveLastElement(stack)
        stack.push(result)
        return last
}
}
function reverse(stack){
    if(stack.length == 0){
        return;
    }
    let i = getAndRemoveLastElement(stack);
    reverse(stack)
    stack.push(i)
}
function arrayReve(stack){
stack.reverse()
}
//测试
// let stack = [5,4,3,2,1];
// reverse(stack)
// console.log(stack);

Logarithm(100,reverse,arrayReve)
