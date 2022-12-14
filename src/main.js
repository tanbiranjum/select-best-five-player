let players = [
  {
    name: 'Lionel Messi',
    image: 'Rectangle 144 (3).png',
    stats: '36 Goals . 120 Assist',
    selected: false,
  },
  {
    name: 'Neymar Jr.',
    image: 'Rectangle 144 (1).png',
    stats: '36 Goals . 120 Assist',
    selected: false,
  },
  {
    name: 'Kylian Mbappé',
    image: 'Rectangle 144.png',
    stats: '36 Goals . 120 Assist',
    selected: false,
  },
  {
    name: 'Sergio Ramos',
    image: 'Rectangle 144 (2).png',
    stats: '36 Goals . 120 Assist',
    selected: false,
  },
  {
    name: 'Renato Sanches',
    image: 'Rectangle 144 (4).png',
    stats: '36 Goals . 120 Assist',
    selected: false,
  },
  {
    name: 'Vítor Machado',
    image: 'Rectangle 144 (6).png',
    stats: '36 Goals . 120 Assist',
    selected: false,
  },
]

const selectedPlayerList = []
let totalPlayerCost = 0
let managerCost = 0
let coachCost = 0
let totalCost = 0

// HTML NODE
const cards = document.getElementsByClassName('cards')[0]
const playerList = document.getElementById('player-list')
const totalCalcForm = document.getElementById('total-price-form')
const playerCostForm = document.getElementById('player-price-form')
const totalPlayerCostHTML = document.getElementById('player-expanses')
const totalCostHTML = document.getElementById('total-cost')

// EVENT REGISTERING
playerCostForm.addEventListener('submit', calculateTotalPlayerCost)
totalCalcForm.addEventListener('submit', calculateTotalPrice)

function calculateTotalPlayerCost(e) {
  e.preventDefault()
  if (selectedPlayerList.length > 0) {
    const playerPriceCost = document.getElementById('player-price').value * 1
    if (isNumber(playerPriceCost)) {
      const totalCost = selectedPlayerList.length * playerPriceCost
      totalPlayerCostHTML.innerText = totalCost
      totalPlayerCost = totalCost
      return
    }
    alert('Please Enter Number')
    return
  }
  alert("You didn't selected any player")
}

/**
 * Calculate total expanses
 */
function calculateTotalPrice(e) {
  e.preventDefault()
  const coachCost = document.getElementById('coach-price').value * 1
  const managerCost = document.getElementById('manager-price').value * 1
  if (isNumber(coachCost) && isNumber(managerCost)) {
    const total =
      totalPlayerCost + parseFloat(coachCost) + parseFloat(managerCost)
    totalCostHTML.innerText = total
    return
  }
  alert('Please Input Valid Number!')
}

/**
 * Select Player & Push It to selectedPlayerList []
 * Re-render player card and player list to update state
 */
function selectPlayer(index) {
  if (selectedPlayerList.length < 5) {
    players[index].selected = true
    selectedPlayerList.push(players[index].name)
    renderPlayerListHTML()
    renderHTMLCard()
    return
  }
  alert("Oops! You can't select more than five players")
}

function renderPlayerListHTML() {
  playerList.innerHTML = ''
  for (let i = 0; i < selectedPlayerList.length; i++) {
    playerList.innerHTML += `<li class="py-2 text-gray-300">${i + 1}. ${
      selectedPlayerList[i]
    }</li>`
  }
}

function renderHTMLCard() {
  cards.innerHTML = ''
  for (let i = 0; i < players.length; i++) {
    cards.innerHTML += `
    <div class="bg-black pb-4 text-white border border-slate-300 mt-4">
						<div>
							<img src="./assets/${players[i].image}" alt="">
						</div>
						<div class="pt-2 flex flex-col items-center">
							<h2 class="text-center text-2xl font-bold">${players[i].name}</h2>
							<p class="text-center">36 Goals . 120 Assist</p>
							<button ${players[i].selected ? 'disabled' : ''} type="button" ${
      players[i].selected
        ? "class='w-4/5 bg-slate-300 py-1 mt-4'"
        : "class='w-4/5 bg-sky-600 py-1 mt-4'"
    } onClick="selectPlayer(${i})">SELECT</button>
						</div>
					</div>
          `
  }
}

// RENDER HTML
renderHTMLCard()
renderPlayerListHTML()

// UTILITY FUNCTION

/**
 * CHECK IF IT NUMBER OR NOT NaN
 */
function isNumber(value) {
  if (typeof value === 'number' && !isNaN(value)) {
    return true
  }
  return false
}
