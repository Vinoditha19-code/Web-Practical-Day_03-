//call back function
//a function passed as an argument	
const greet = (msg, fun)=>{
	console.log("Hi.." +msg)
	fun
}

greet("Good Morning", () => {
	console.log("My Name Is Vino")
	})
	
const multtwo = (n) => n*3
const myarr = (mult,...n) => {
	n.forEach((i) =>console.log(mult(i)))
}

myarr(multtwo,4,5,6,8,2)