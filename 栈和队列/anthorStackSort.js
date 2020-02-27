/*
 * @Descripttion: 🐉一个栈实现另一个栈排序
 * @Author: xinxin
 * @Date: 2020-02-24 19:07:42
 * @LastEditTime: 2020-02-26 10:40:11
 */
//需要排序的栈 stack
//辅助排序的栈 help
//一个人变量存储当前的值 curt
function anthorStackSort(stack){
let help = [];
let curt = stack.pop()
while(stack.length>0||curt){
    if(help.length == 0||curt>=help[help.length-1]){
        help.push(curt)
        curt= stack.pop();
    }else{
        stack.push(help.pop())
    }
}
return help
}
//另一种数组从大到小的排序方法
function arraySort(stack){
    stack.sort(function (x,y) {
        return x-y;
    });
    return stack
}
var {Logarithm} = require('./Logarithm')
Logarithm(5,arraySort,anthorStackSort,false)
