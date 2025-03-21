//write a boolean function to find the given number is prime
function isPrime(num){
	let isPrime = true
		if(num == 0 || num ==1){
			isPrime = false
		}
		
		for(let i =2; i<num; i++){
			if(num % i == 0){
				isPrime = false
				break
			}
		}
		
	if(isPrime){
		console.log(num + " Is a Prime Number")
	}
	
	else{
		console.log (num + " number is not a prime number")
	}
return 0	
  
}
isPrime(4)
isPrime(7)
isPrime(10)