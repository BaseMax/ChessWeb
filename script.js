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
let pieces=table.querySelectorAll(".piece")
let timeMe=true //true:bottom(black), false: top(white)
let pieceMe=true //true:black, false:white
// console.log(pieces)

function get(x, y) {
	return pieces[(x-1) * 8 + (y-1)]
}

function typeMe() {
	return timeMe === true ? "black" : "white"
	// return pieceMe === true ? "black" : "white"
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
		if(typeMe() === "black") {
			if(row == 7) {
				chooses.push({row: row-2, column: column})
			}
			if(row == 1) {
				// Soon
			}
			else {
				chooses.push({row: row-1, column: column})
			}
		}
		else if(typeMe() === "white") {
			if(row == 2) {
				chooses.push({row: row+2, column: column})
			}
			if(row == 8) {
				// Soon
			}
			else {
				chooses.push({row: row+1, column: column})
			}
		}
	}
	// console.log(chooses)
	chooses.forEach(function(choose, index, array) {
		// console.log(choose)
		let piece=get(choose.row, choose.column)
		piece.parentNode.classList.add("cango")
	})
}

// pieces.forEach(function(piece, index, array) {
pieces.forEach(function(piece, index, array) {
	piece.addEventListener("click", function() {
		// pieces.forEach(function(_piece, _index, _array) {
		let parent=piece.parentElement
		let parentClasses=parent.classList
		if(parentClasses.contains("cango")) {

		}
		pieces.forEach(function(_piece) {
			let _parent=_piece.parentElement
			let _parentClasses=_parent.classList
			_parentClasses.remove("selected")
			_parentClasses.remove("cango")
		})
		if(piece.classList.contains(typeMe())) {
			parentClasses.add("selected")
			let row=getChildNumber(piece.parentElement.parentElement)
			let column=getChildNumber(piece.parentElement)
			// console.log(getChildNumber(piece.parentElement))
			// console.log(getChildNumber(piece.parentElement.parentElement))
			// offerPiece(piece, index, array, row, column)
			offerPiece(piece, array, row, column)
		}
	})
})
