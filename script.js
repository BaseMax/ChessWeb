/**
*
* @Name : script.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2019-05-12, 2019-05-23
* @Released under : https://github.com/BaseMax/ChessWeb/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/ChessWeb
*
**/
let table=document.querySelector("#table")
let pieces=document.querySelectorAll(".piece")
let timeMe=true //true:bottom, false: top
let pieceMe=true //true:black, false:white
// console.log(pieces)

function get(x, y) {
	return pieces[(x-1) * 8 + (y-1)]
}

function typeMe() {
	return pieceMe === true ? "black" : "white"
}

function isPiece(piece) {
	// if(piece !== null) {}
	let classes=piece.classList
	if(classes.contains("black")) {
		return true
	}
	else if(classes.contains("white")) {
		return true
	}
	return false
}

function isPieceBoard(x, y) {
	let piece=get(x, y)
	let classes=piece.classList
	if(classes.contains("black")) {
		return true
	}
	else if(classes.contains("white")) {
		return true
	}
	return false
}

function typePiece(piece) {
	// rook, knight, king, queen, bishop, pawn
	let classes=piece.classList
	if(classes.contains("rook")) {
		return "rook"
	}
	else if(classes.contains("knight")) {
		return "knight"
	}
	else if(classes.contains("king")) {
		return "king"
	}
	else if(classes.contains("queen")) {
		return "queen"
	}
	else if(classes.contains("bishop")) {
		return "bishop"
	}
	else if(classes.contains("pawn")) {
		return "pawn"
	}
	return null
}

function getChildNumber(node) {
	return Array.prototype.indexOf.call(node.parentNode.children, node)
}

// function offerPiece(piece, pieceIndex, array, row, column) {
function offerPiece(piece, array, row, column) {
	let pieceIndex=row*8 + column
	pieceIndex++
	row++
	column++
	console.log("pieceIndex : " + pieceIndex)
	console.log("row : " + row)
	console.log("column : " + column)
	let type=typePiece(piece)
	// Types = rook, knight, king, queen, bishop, pawn
	let chooses=[]
	if(type === "rook") {
		for(var _column = 1; _column<=8 ; _column++) {
			if(_column === column) {
				continue
			}
			else if(isPieceBoard(row, _column)) {
				continue
			}
			chooses.push({row: row, column: _column})
		}
		for(var _row = 1; _row<=8 ; _row++) {
			if(_row === row) {
				continue
			}
			else if(isPieceBoard(_row, column)) {
				continue
			}
			chooses.push({row: _row, column: column})
		}
	}
	else if(type === "knight") {
		chooses.push()
	}
	else if(type === "king") {
		chooses.push()
	}
	else if(type === "queen") {
		chooses.push()
	}
	else if(type === "bishop") {
		chooses.push()
	}
	else if(type === "pawn") {
		chooses.push()
	}
	console.log(chooses)
}

// pieces.forEach(function(piece, index, array) {
pieces.forEach(function(piece, array) {
	piece.addEventListener("click", function() {
		// pieces.forEach(function(_piece, _index, _array) {
		pieces.forEach(function(_piece) {
			_piece.parentElement.classList.remove("selected")
		})
		if(piece.classList.contains(typeMe())) {
			piece.parentElement.classList.add("selected")
			let row=getChildNumber(piece.parentElement.parentElement)
			let column=getChildNumber(piece.parentElement)
			// console.log(getChildNumber(piece.parentElement))
			// console.log(getChildNumber(piece.parentElement.parentElement))
			// offerPiece(piece, index, array, row, column)
			offerPiece(piece, array, row, column)
		}
	})
})
