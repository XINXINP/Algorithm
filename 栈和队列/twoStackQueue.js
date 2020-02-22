/*
 * @Descripttion: 🐉两个栈组成的队列
 * @Author: xinxin
 * @Date: 2020-02-12 21:34:12
 * @LastEditTime : 2020-02-13 20:14:42
 */

// 题目：由两个栈实现一个队列，支持队列的基本操作（add,poll,peek）
//依次输入5，6，4，3，1
//stackPush由栈底到栈顶[5,6,4,3,1]
//stackPop由栈底到栈顶是[1,3,4,6,5]
//注意点：1.由stackPush压入stackPop压入时，要将stackPush全部押入 2.出队时，如果stackPop有元素，不需要将stackPop压入

let stackPush = []
let stackPop = []
//入队如果队列已满，抛出异常
function add(ele){
    stackPush.unshift(ele)
}
// poll：将首个元素从队列中弹出，如果队列是空的，就返回null
function poll(){
    if(stackPop[0]){
        return stackPop.shift()
    }else if(stackPush[0]){
        for (let index = 0; stackPush.length>0; index++) {
            let  ele = stackPush.shift()
            stackPop.unshift(ele)   
        }
        console.log(stackPop)
        return stackPop.shift()
    }else{
        return null
    }
}

//查看首个元素，不会移除首个元素，如果队列是空的就返回null
function peek(){
    if(stackPop[0]){
        return stackPop[0]
    }else if(stackPush[0]){
        for (let index = 0; stackPush.length>0; index++) {
            let  ele = stackPush.shift()
            stackPop.unshift(ele)   
        }
        return stackPop[0]
    }else{
        return null
    }
}
let arr1= [5,6,4,3,1]
for (let ind = 0; ind < arr1.length; ind++) {
    const ele = arr1[ind];
    add(ele)
}
console.log(stackPush)
console.log(poll())
console.log(peek())