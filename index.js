let money = +prompt("Tell me what your budget per month?", "");
let time = prompt("Enter date like YYYY-MM-DD", "");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};
for (let i = 0; i < 2; i++) {
  let a = prompt("Enter your suggested item", "");
  let b = prompt("How much will it cost?", "");

  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b === "string" &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50 &&
    b.length < 50
  ) {
    appData.expenses[a] = b;
  } else {
  }
}

appData.moneyPerDay = appData.budget / 30;
alert(`Dayli budget is ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 100) {
  console.log("it is minimum of the income");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("it is middle level of the income");
} else if (appData.moneyPerDay > 2000) {
  console.log("it is high level of the income");
} else {
  console.log("incorrect data");
}
