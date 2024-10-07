//Step 1 is to write the alert message
const popMessage =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
  //this is the pop-up message the user will be seeing

//Step 2 is to assign all three variables to each vault combination number
const firstCode = 5 + 5 //this equals 10 using division
const secondCode = 4 * 10 //this equals 40 using multiplication
const thirdCode = 40 - 1 //this equals 39 using subtraction

//Step 3 is to combine all four parts
const vaultMessage = `${popMessage} 
${firstCode} - ${secondCode} - ${thirdCode}`;
//this will be in the order of the combination number

//Step 4 is to create a pop-up alert
alert(vaultMessage); //this is the alert that the user will see

