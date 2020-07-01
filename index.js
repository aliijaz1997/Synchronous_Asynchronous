console.log("Before prepare food");

function food () {

   let promise = new Promise(function(resolve,reject) {
    setTimeout( () => {
      
        console.log("prepare food");
         resolve("The Food is ready");
    } , 10);
});
     return promise;

}

function preparefrenchtoast () {

    let promise = new Promise(function(resolve, reject) {

        setTimeout(() => {
            console.log("Prepare french toast");
            resolve("French Toast are ready");
        }, 20);
    
      
    });

    return promise;

}


function preparecoffee () {

      let promise = new Promise (function(resolve, reject) {

        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("coffee is ready bro");
        },30); 

      });
           return promise;
}

let ali = food();

ali.then(function(value) {
    console.log("The value of the food is =" , value)
     return preparefrenchtoast();

}).then(function(value) {
    console.log("The value of the french toast is = ", value);
     return preparecoffee();

}).then(function(value) {
    console.log("The value of the coffee is ", value)
}
)

console.log("After the food is prepared");