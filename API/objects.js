var sample = { a: 10, b: 2, c: 3, d: 4, e: 24, f: 11, g: 100 };

let numbers = Object.values(sample);

for(let i=0; i<numbers.length; i++){
    var num = numbers[i]
    // console.log(num)
function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }
 console.log(`${num} is a prime?`,isPrime(num))
}

