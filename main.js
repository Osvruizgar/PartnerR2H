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
  