let playBut = document.querySelector(".play")
let keyboard = document.querySelector(".keyboard")
let game = document.querySelector(".game")
let word = document.querySelector(".word")

let currentWord = "привет"

function checkLetter(button, clickedLetter) {
	if (currenWord.includes(clickedLetter)) {
		if (letter === clickedLetter) {
		}
	}
}

playBut.addEventListener("click", () => {
	for (let i = 1072; i <= 1103; i++) {
		let button = document.createElement(`button`)
		button.innerHTML = String.fromCharCode(i)
		keyboard.appendChild(button)
		button.addEventListener("click", (e) =>
			initGame(e.target, String.fromCharCode(i))
		)
	}

	for (let i = 0; i < currentWord.length; i++) {
		word.innerHTML += "_"
	}
	playBut.style.display = "none"
	game.style.display = "flex"
})
