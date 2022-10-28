import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async () => {
  await loadBalance();
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const topUpAmount = document.getElementById("input-amount").value;
  const withdrawalAmount = document.getElementById("withdrawal-amount").value;
  if (topUpAmount) {
    await dbank.deposit(parseFloat(topUpAmount));
  } else if (withdrawalAmount) {
    await dbank.withdraw(parseFloat(withdrawalAmount)).catch((error) => {
      alert(error);
    });
  }
  await loadBalance();
});

async function loadBalance() {
  return new Promise(async (resolve, reject) => {
    await dbank
      .balance()
      .then((response) => {
        document.getElementById("balance").innerHTML =
          parseFloat(response).toFixed(2);
        resolve();
      })
      .catch((error) => {
        document.getElementById("balance").innerHTML = "Error";
        reject(error);
      });
  });
}
