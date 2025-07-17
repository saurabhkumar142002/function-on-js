
{//functionsayMyName() 
//console.log("H");
//console.log("T");
//console.log("I");
//console.log("E");
}

// say myname()


//function addTwonumbers(number1,number2)
{
   // console.log(number1+number2);
}
function addTwonumbers(number1,number2){

let result = number1+number2
console.log("saurabh")
return result



}
const result = addTwonumbers(3,5)
//console.log ("result:",result);

function loginUserMessage(username){
    return '${username}just logged in'
}
//console.log(loginUserMessage("saurabh"))

//parameter ready

//function calculatecartprice(num1){
  //return num1
//}

//console.log(calculatecartprice(200,400,500))

//function calculatecartprice(val1,val2, num1){
  //return num1
//}
//console.log(calculatecartprice(200,400,500,2000))

const user={
    username:"saurabh",
    price:199
}
function handleobject(anyobject){
    console.log('username is ${anyobject.username}and price is ${anyobject.price}');
}

// handleobject(user)
handleobject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,600]

function returnsecondvalue(getArray){
    return getAray[1]
}
console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([200,400,500,1000]));