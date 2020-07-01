console.log("Before prepare food");

function food (ali) {

    setTimeout( () => {
      
        console.log("prepare food");
         ali("The Food is ready");
    } , 10);
}

function preparefrenchtoast (french) {

    setTimeout(() => {
        console.log("Prepare french toast");
        french("French Toast are ready");
    }, 20)
}

function preparecoffee (cofee) {
    setTimeout(()=>{
        console.log("Prepare Coffee");
        cofee("coffee is ready bro");
    },30)
}

food(function callback (value) {
    console.log("The value of the food is =" , value)
    preparefrenchtoast(function frenchtoast (value) {
        console.log("The value of the french toast is = ", value);
        preparecoffee(function coffee (value) {
            console.log("The value of the coffee is ", value)
        }
        )
  });
}
);


console.log("After the food is prepared");