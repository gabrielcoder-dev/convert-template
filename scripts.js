const USD = 4.86;
const EUR = 5.27;
const GBP = 6.13;

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

 amount.addEventListener("input", () => {
   const charactersRegex = /\D+/g;
   amount.value = amount.value.replace(charactersRegex, "")
 })

form.onsubmit = (e) => {
  e.preventDefault();
  switch (currency.value) {
    case "USD":
      convertAmount(amount.value, USD, "U$");
      break;
    case "EUR":
      convertAmount(amount.value, EUR, "€");
      break;
    case "GBP":
      convertAmount(amount.value, GBP, "£");
      break;
  }
};

 const convertAmount = (amount, price, symbol) =>{
    try {
      footer.classList.add("show-result");
      description.innerHTML = `${symbol} 1 = R$ ${price}`
      const convertedAmount = (amount * price).toFixed(2);
      result.innerHTML = `R$ ${convertedAmount}`;
    } catch (error) {
      console.log(error);
      footer.classList.remove("show-result");
    }
 }