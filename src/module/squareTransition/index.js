import Screen from './screen.js'

class SquareCoordinate {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

export default class AnimationController {
	constructor(canvas, squareWidth) {
		this.squares = [];
		this.tempSquares = [];
		this.screen = new Screen(canvas);
		this.squareWidth = squareWidth;
		this.rowSize = this.screen.width / this.squareWidth;
		this.columnSize = this.screen.height / this.squareWidth;
		this.setUpSquares();
	}

	setUpSquares() {
		for (let column = 0; column < this.columnSize; column++) {
			for (let row = 0; row < this.rowSize; row++) {
				this.squares.push(new SquareCoordinate(row * this.squareWidth, column * this.squareWidth))
			}
		}
	}

	getRandomSquare() {
		const randomIndex = Math.floor(Math.random() * this.squares.length)
		return this.squares.splice(randomIndex, 1)[0]
	}

	drawGrid(onComplete) {
		const drawingInterval = setInterval(() => {
			const square = this.getRandomSquare()
			this.screen.drawRectangle(
				square.x,
				square.y,
				this.squareWidth,
				this.squareWidth
			)

			this.tempSquares.push(square)
			if (this.squares.length) {

			} else {
				clearInterval(drawingInterval);
				this.squares = this.tempSquares;
				this.tempSquares = [];
				if(onComplete) onComplete()
			}
		}, 5);

	}

	clearGrid(onComplete) {
		const drawingInterval = setInterval(() => {
			const square = this.getRandomSquare()

			this.screen.clearRectangle(
				square.x,
				square.y,
				this.squareWidth,
				this.squareWidth
			)

			this.tempSquares.push(square)
			if (this.squares.length) {
				
			} else {
				clearInterval(drawingInterval)
				this.squares = this.tempSquares;
				this.tempSquares = [];
				if(onComplete) onComplete()
			}
		}, 5);
	}
}
