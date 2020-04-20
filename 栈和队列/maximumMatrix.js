/*
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2020-04-18 19:32:36
 * @LastEditTime: 2020-04-18 22:00:32
 */
// 求最大子矩阵的大小
function getMatrix(arr){
let r = arr.length
let c = arr[0].length
let result = 0
for(let i = 0;i<r;i++){
    let obj = []

    for (let j = 0; j <c; j++) {
        let k = 0
        let m = i
        while(m>= 0){
            if(arr[m][j]===1){
                k++
                m--;
            }else {
            break
            }
        }
        obj.push(k)
    }
    //求组中
    console.log(obj);
    let max = 0
    let k = i+1
    let h = 0
    for (let n = 0; n < obj.length; n++) {
        if(obj[n]!==0){
            h++
            if(k>obj[n]){k = obj[n]}
            
            max = h*k>max?h*k:max
            
        }
        if(obj[n]==0){
            h = 0
            k = i+1
        } 
    }
    console.log("第"+(i+1)+"行",max); 
    result  = result>max?result:max
}
return result
}
console.log(getMatrix([[1,0,1,1],[1,1,1,1],[1,1,1,0]]));