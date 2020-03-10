let money, time;

function start() {
  money = +prompt("Tell me what your budget per month?", "");
  time = prompt("Enter date like YYYY-MM-DD", "");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Tell me what your budget per month?", "");
  }
}

start();
let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true
};

function chooseExpenses() {
  for (let i = 1; i < 2; i++) {
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
      i = i - 1;
    }
  }
}

chooseExpenses();
appData.moneyPerDay = (appData.budget / 30).toFixed();
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

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("what size of savings?");
    let rate = +prompt("what it your rate?");

    appData.monthIncome = (save / 100 / 12) * rate;
    alert("income from savings will be " + appData.monthIncome);
  }
}

checkSavings();
