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
];

const selectedPlayerList = [];

const cards = document.getElementsByClassName("cards")[0];

function selectPlayer(event, index) {
  players[index].selected = true;
  selectedPlayerList.push(players[index].name);
  console.log(selectedPlayerList);
  renderHTMLCard();
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
