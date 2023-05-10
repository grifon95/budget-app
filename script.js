// Selecting elements
const yourBalanceEl = document.querySelector(".balance-number");
const incomeEl = document.querySelector(".number--income");
const expensesEl = document.querySelector(".number--expenses");
const inputDescriptionEl = document.querySelector(".input--description");
const inputAmountEl = document.querySelector(".input--amount");
const addBtnEl = document.querySelector(".btn");
const closeBtnAllEl = document.querySelectorAll(".transaction__btn");
const transactionsListEl = document.querySelector(".transactions");

// Starting values
let balance = 4700;
let income = 5000;
let expenses = 300;
// App logic
addBtnEl.addEventListener("click", () => {
  if (!inputDescriptionEl.value || !inputAmountEl.value) {
    alert("You must enter both description of income/expense and amount");
  } else {
    if (Number(inputAmountEl.value) === 0) {
      alert("Amount cant be 0");
    } else {
      if (Number(inputAmountEl.value) > 0) {
        let li = `
        <li class="transaction transaction--income">
          <span class="transaction__text">${inputDescriptionEl.value}</span>
          <span class="transaction__amount">${inputAmountEl.value}</span>
          <button class="transaction__btn">X</button>
        </li>`;
        transactionsListEl.insertAdjacentHTML("beforeend", li);
        parseInt(incomeEl);
        income += Number(inputAmountEl.value);
        incomeEl.textContent = income;
        balance = income - expenses;
        yourBalanceEl.textContent = balance;
      } else {
        let li = `
      <li class="transaction transaction--expense">
        <span class="transaction__text">${inputDescriptionEl.value}</span>
        <span class="transaction__amount">${inputAmountEl.value}</span>
        <button class="transaction__btn">X</button>
      </li>`;
        transactionsListEl.insertAdjacentHTML("beforeend", li);
        parseInt(expensesEl);
        expenses -= Number(inputAmountEl.value);
        expensesEl.textContent = expenses;
        balance = income - expenses;
        yourBalanceEl.textContent = balance;
      }
    }
  }
});

for (let i = 0; i < closeBtnAllEl.length; i++) {
  closeBtnAllEl[i].addEventListener("click", function () {
    document.querySelector(".transaction").remove();
  });
}
