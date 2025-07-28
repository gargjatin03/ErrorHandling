// COMPILE TIME ERROR
// console.log(1;   //Syntax error


// RUN-TIME ERROR
// console.log(x);     //Reference error



//   ERROR HANDLING try-catch
try{
    console.log("try block starts here");
    console.log(x);                          // reference error
    console.log("try block ends here")   // this will not run due to error in previous line
}
catch(e){
   // define krte h, error k sath aap kya krna chahte h
   //retry logic
   //fallback mechanism
   //logging
   //custom error
   console.log(" I AM HERE")
   console.log("Your error is here: ", e)
}



// ERROR HANDLING finally
finally{
    console.log("I will run everytime");
}