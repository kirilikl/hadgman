let playBut = document.querySelector(".play")
let keyboard = document.querySelector(".keyboard")
let game = document.querySelector(".game")
let word = document.querySelector(".word")

let mistakes = 0
let currentWord = "привет"

function checkLetter(button, clickedLetter) {
	if (currentWord.includes(clickedLetter)) {
		// Replace all occurrences of the letter in the word
		let wordText = word.textContent
		let newWordText = ""
		for (let i = 0; i < currentWord.length; i++) {
			if (currentWord[i] === clickedLetter) {
				newWordText += clickedLetter
			} else {
				newWordText += wordText[i]
			}
			console.log(newWordText)
		}
		word.textContent = newWordText
		// Check if the word is complete
		if (newWordText === currentWord) {
			alert("You win!")
			// You can add more logic here for what happens after winning
		}
	} else {
		mistakes++
		// You can add more logic here for what happens after a mistake
		console.log("Mistakes: " + mistakes)
		if (mistakes == 5) {
			alert("you LOSE!!!")
		}
	}
	button.disabled = true
}

playBut.addEventListener("click", () => {
	for (let i = 1072; i <= 1103; i++) {
		let button = document.createElement(`button`)
		button.innerHTML = String.fromCharCode(i)
		keyboard.appendChild(button)
		button.addEventListener("click", (e) =>
			checkLetter(e.target, String.fromCharCode(i))
		)
	}

	for (let i = 0; i < currentWord.length; i++) {
		word.innerHTML += "_"
	}
	playBut.style.display = "none"
	game.style.display = "flex"
})
