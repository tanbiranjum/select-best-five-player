let players = [
  {
    name: "Lionel Messi",
    selected: false,
  },
  {
    name: "Neymar",
    selected: false,
  },
  {
    name: "Robert Lewandowski",
    selected: false,
  },
  {
    name: "Christiano Ronaldo",
    selected: false,
  },
  {
    name: "Luis Suarez",
    selected: false,
  },
  {
    name: "Ansu Fati",
    selected: false,
  },
];

const selectedPlayerList = [];

let totalPlayerCost = 0;
let managerCost = 0;
let coachCost = 0;
let totalCost = 0;

const cards = document.getElementsByClassName("cards")[0];
const playerList = document.getElementById("player-list");
const totalCalcForm = document.getElementById("total-price-form");
const playerCostForm = document.getElementById("player-price-form");
const totalPlayerCostHTML = document.getElementById("player-expanses");
const totalCostHTML = document.getElementById("total-cost");

playerCostForm.addEventListener("submit", calculateTotalPlayerCost);
totalCalcForm.addEventListener("submit", calculateTotalPrice);

function calculateTotalPlayerCost(e) {
  e.preventDefault();
  if (selectedPlayerList.length > 0) {
    const playerPriceCost = document.getElementById("player-price").value * 1;
    if (playerPriceCost) {
      const totalCost = selectedPlayerList.length * playerPriceCost;
      totalPlayerCostHTML.innerText = totalCost;
      totalPlayerCost = totalCost;
      return;
    }
    alert("Input can't be empty");
    return;
  }
  alert("You didn't selected any player");
}

function calculateTotalPrice(e) {
  e.preventDefault();
  const coachCost = document.getElementById("coach-price").value;
  const managerCost = document.getElementById("manager-price").value;
  const total =
    totalPlayerCost + parseFloat(coachCost) + parseFloat(managerCost);
  totalCostHTML.innerText = total;
}

function selectPlayer(event, index) {
  if (selectedPlayerList.length < 5) {
    players[index].selected = true;
    selectedPlayerList.push(players[index].name);
    renderPlayerListHTML();
    renderHTMLCard();
    return;
  }
  alert("Oops! You can't select more than five players");
}

function renderPlayerListHTML() {
  playerList.innerHTML = "";
  for (let i = 0; i < selectedPlayerList.length; i++) {
    playerList.innerHTML += `<li>${i + 1}. ${selectedPlayerList[i]}</li>`;
  }
}

function renderHTMLCard() {
  cards.innerHTML = "";
  for (let i = 0; i < players.length; i++) {
    cards.innerHTML += `
        <div>
        <p>Name: ${players[i].name}</p>
          <button ${
            players[i].selected ? "disabled" : ""
          } onClick="selectPlayer(event, ${i})">Select</button>
          <div>
          `;
  }
}

renderHTMLCard();
renderPlayerListHTML();
