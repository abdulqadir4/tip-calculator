document.getElementById("tip-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const tipAmount = parseFloat(document.getElementById("tip-amount").value);
    const tipPercentage = tipAmount / 100;
    const tipAmountResult = (billAmount * tipPercentage).toFixed(2);
    const totalAmountResult = (billAmount + billAmount * tipPercentage).toFixed(2);
    document.getElementById("tip-amount-result").innerText = tipAmountResult;
    document.getElementById("total-amount-result").innerText = totalAmountResult;
    document.getElementById("results").classList.remove("hide");
  });