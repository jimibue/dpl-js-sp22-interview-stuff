
const add = (x,y) => {
    return x + y
 }
 
 const testAdd = () => {
     // asum all test passed
     let passed = true
     if(add(1,1) !== 2){
         console.log('failed at add(1,1) !== 2')
         passed = false
     }
     if(add(2,4) !== 6){
         console.log('failed at add(2,4) !== 2')
         passed = false
     }
     return passed
 }
 
 if(testAdd()){
     console.log('test passed')
 } else {
     console.log('test failed')
 }
 
let two = add('1', '1')
console.log(two)