/*
 * @Descripttion: 🐉对数器简单实现
 * @Author: xinxin
 * @Date: 2020-02-22 09:56:32
 * @LastEditTime: 2020-02-22 10:12:59
 */
//对数器实现,为了验证算法过程的疏漏
//适用于改变输入值本身，不返回新的数组
function getResult(stack,funName){
    funName(stack)
    return stack
}
function Logarithm(num,compareOne,compareTwo){
    //实现随机数列
    let arr = []
    for(let i = 0;i<num;i++){
        let numItem = parseInt(i *Math.random()*10)
        arr.push(numItem)
    }
    let arr2 = getResult(arr,compareTwo);
    let arr1 = getResult(arr,compareOne)
    let falseArr = []
    let k = 0
    let j = 0
    for(let i = 0,j=0,k=0;i<arr1.length;i++){
        if(arr1[i]==arr2[i]){
            j++
            process.stdout.write('√')
        }else{
            k++
            process.stdout.write('❌',k)
            falseArr.push(arr1[i])
        }
    }
    console.log(`结束`)
    console.log('------------------------------------------------')
    console.log(`本次测试用例是`)
    console.log(`${arr}`)
    console.log(`测试1函数的实验结果是`)
    console.log(`${arr1}`)
    console.log(`测试2函数的实验结果是`)
    console.log(`${arr2}`)
    console.log(`本次测试共测试${num}组，发生错误${k}组。`)
    }
    module.exports = {Logarithm};