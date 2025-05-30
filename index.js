let mispar = 0
let skibidi = 6

let words = [
  "word", "test", "code", "game", "play", "quiz", "like",
  "blue", "list", "node",  "must", "data", "most",
  "miss", "lord", "rest", "five", "four"
]

let toGuess = words[randomInteger(0, words.length - 1)]
console.log("🔍 Secret word:", toGuess) // for testing

let inputElement = document.getElementById('wordId')
let container = document.getElementById('container')

function check() {
  let guess = inputElement.value.toLowerCase()

  if (guess.length !== 4) {
    alert("המילה חייבת להיות באורך של 4 אותיות!")
    return
  }

  let rowHTML = `<div class="guess-row">`

  for (let i = 0; i < 4; i++) {
    let letter = guess.charAt(i)
    rowHTML += `<div class="letter" style="background-color:${color(letter, i)};">${letter}</div>`
  }

  rowHTML += `</div>`
  container.innerHTML += rowHTML
  mispar++

  if (guess === toGuess) {
    alert("🎉 ניחשת נכון! ניצחת!")
    mispar = 0
    window.location.reload()
  }

  if (mispar === skibidi) {
    alert(`😢 הפסדת! המילה הייתה: ${toGuess}`)
    window.location.reload()
  }

  inputElement.value = ""
  inputElement.focus()
}

function color(letter, index) {
  if (toGuess.charAt(index) === letter) {
    return 'green'
  }
  if (toGuess.includes(letter)) {
    return 'yellow'
  }
  return 'red'
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
