//Easy 1
function oddOrEven (numbers) {
    let even = [];
    let odd = [];
    
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i]);
        
        } else {
            odd.push(numbers[i]);
        }
    }
    // create an object with the odd and even array in it
    const arrayObject = {
        even,
        odd
      };
    
      return arrayObject;
}
  console.log(oddOrEven([12, 23, 49, 32, 27]));
  console.log(oddOrEven([11,4,2,12,15]));
 
  //Easy 2 
  const isPrime = (b) => {
    for(let i = 2; i <= b/2; i++){
       if(b % i === 0){
          return false;
       }
    };
    return true;
 };
 const generatePrime = num => {
    const arr = [];
    let i = 2;
    while(arr.length < num){
       if(isPrime(i)){
          arr.push(i);
       };
       i = i === 2 ? i+1 : i+2;
    };
    return arr;
 };
 console.log(generatePrime(10));


  //Medium1
let vowelChecker = function(x) {
  if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
    console.log(`${x} is a vowel`)
  } else {
    console.log("is not a vowel")
  }
}
vowelChecker("e");

//Medium 2

function areAnagram(str1,str2){
  // Get lengths of both strings
  let n1 = str1.length;
  let n2 = str2.length;

// If length of both strings is not same,
// then they cannot be anagram
 if (n1 != n2)
 return false;
// Sort both strings
 str1.sort();
 str2.sort();
 // Compare sorted strings
 for (let i = 0; i < n1; i++)
 if (str1[i] != str2[i])
     return false;

return true;
}

  /* Driver Code*/
  let str1=['t', 'e', 's', 't' ];
  let str2=['t', 't', 'e', 'w' ];
   
  // Function Call
if (areAnagram(str1, str2)) {
console.log("The two strings are  anagram of each other" )

}else {console.log ("The two strings are not anagram of each other") }

  // Medium 4
  const car = {
    make: "toyota",
    model: "GR86",
    year: 2020,
    mileage: 3000,
    color: "Neptune Blue",
    driveToWork: function() {
        console.log("Old Mileage: " + this.mileage);

        this.mileage = this.mileage + 33;

        console.log("New Mileage: " + this.mileage);
      },

      driveAroundWorld: function() {
        console.log("Old Mileage: " + this.mileage);

        this.mileage = this.mileage + 24000;

        console.log("New Mileage: " + this.mileage);
      },
      runErrands: function() {
          console.log("Old Mileage:" + this.mileage);
          this.mileage = this.mileage + 33;
          console.log("New Mileage: " + this.mileage)
      }
    };
    car.driveAroundWorld();
    car.driveToWork();
    car.driveAroundWorld();
    car.runErrands();
    
    //medium 3
    function postiveInteger(firstNum, secondNum) {
      firstNum = Math.abs(firstNum);
      secondNum = Math.abs(secondNum);
      while(secondNum) {
      let t = secondNum;
      secondNum = firstNum % secondNum;
      firstNum = t;
      }
      return firstNum;
    }
    console.log(postiveInteger(78,126))
