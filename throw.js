// // LET'S CREATE A CUSTOM(PERSONAL) ERROR
// try{
//     console.log(x);   //reference error
// }
// catch(e){
//     throw new Error("BHai pahle declare kro, fir print karna");
// }


let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid Json");
}