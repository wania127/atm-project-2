import inquirer from "inquirer";
let accountBalance: number = 25000;
let pinCode: number = 4268;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number", 
  },
]);
console.log(pinAnswer.pin);
if (pinAnswer.pin === pinCode) {
  console.log("you entered correct pinCode please proceed");
  let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please enter operation",
        type: "list",
        choices: ["withdraw", "checkBalance", "fastCash"],
      },
    ]);
    console.log(operationAns.operation);
    if (operationAns.operation === "withdraw") {
      let amountAns = await inquirer.prompt([
        { name: "amount",
         message: "Enter your amount",
          type: "number" },
      ]);
      if (amountAns.amount > accountBalance) {
        console.log("insufficient Balance");
      } else 
        (accountBalance -= amountAns.amount)
      {
        console.log(`your current balance is ${accountBalance}`);
      }
    
} else if (operationAns.operation === "checkBalance") {
  console.log(`your balance is ${accountBalance}`);
} else if (operationAns.operation === "fastCash") {
  let fastCashAmount = await inquirer.prompt([
    {
      name: "fastCash",
      message: "please select your amount",
      type: "list",
      choices: [2000, 3000, 5000],
    },
  ]);
  if (fastCashAmount.fastCash === 2000) {
    accountBalance -= 2000;
    console.log(`your remaining balance is ${accountBalance}`);
  } else if (fastCashAmount.fastCash === 3000) {
    accountBalance -= 3000;
      console.log(`your remaining balance is ${accountBalance}`);
    } else if (fastCashAmount.fastCash === 5000) {
      accountBalance -= 5000;
      console.log(`your remaining balance is ${accountBalance}`);
    }
  }
    else {
  console.log("Please enter correct pinCode");
}
