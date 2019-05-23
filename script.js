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

function changePlayer() {
	if(timeMe === true) {
		timeMe=false;
	}
	else {
		timeMe=true;
	}
}

function get(x, y) {
	return pieces[(x-1) * 8 + (y-1)]
}

function getByIndex(index) {
	return pieces[index]
}

function parseIndex(index) {
	let row = Math.floor(index / 8) + 1
	let column=index - ((row-1) * 8) + 1
	// console.log(row)
	// console.log(column)
	return {row: row, column: column}
}

function getIndex(x, y) {
	return (x-1) * 8 + (y-1)
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

function isPieceItemBoard(x, y) {
	let piece=get(x, y)
	// console.log(piece)
	let classes=piece.classList
	// console.log(classes)
	// Types = rook, knight, king, queen, bishop, pawn
	if(classes.contains("rook")) {
		return true
	}
	if(classes.contains("knight")) {
		return true
	}
	if(classes.contains("king")) {
		return true
	}
	if(classes.contains("queen")) {
		return true
	}
	if(classes.contains("bishop")) {
		return true
	}
	if(classes.contains("pawn")) {
		return true
	}
	return false
}

function typePiece(piece) {
	// Types = rook, knight, king, queen, bishop, pawn
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
	// let pieceIndex=row*8 + column
	// pieceIndex++
	// row++
	// column++
	let pieceIndex=(row-1)*8 + (column-1)
	// console.log("pieceIndex : " + pieceIndex)
	// console.log("row : " + row)
	// console.log("column : " + column)
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
			if(row == 1) {
				// Soon
			}
			else {
				if(!isPieceItemBoard(row-1, column)) {
					chooses.push({row: row-1, column: column})
					if(row == 7) {
						chooses.push({row: row-2, column: column})
					}
				}
			}
		}
		else if(typeMe() === "white") {
			if(row == 8) {
				// Soon
			}
			else {
				if(!isPieceItemBoard(row+1, column)) {
					chooses.push({row: row+1, column: column})
					if(row == 2) {
						chooses.push({row: row+2, column: column})
					}
				}
			}
		}
	}
	// console.log(chooses)
	chooses.forEach(function(choose, index, array) {
		// console.log(choose)
		let piece=get(choose.row, choose.column)
		piece.parentNode.classList.add("cango")
	})
	// return chooses
	return chooses.length
}

// pieces.forEach(function(piece, index, array) {
pieces.forEach(function(piece, index, array) {
	piece.addEventListener("click", function() {
		// pieces.forEach(function(_piece, _index, _array) {
		let parent=piece.parentElement
		let parentClasses=parent.classList
		let parentParent=parent.parentElement

		let row=getChildNumber(parentParent) + 1
		let column=getChildNumber(parent) + 1

		if(parentClasses.contains("cango")) {
			let currentPiece
			let currentRow
			let currentColumn
			pieces.forEach(function(_piece, _index) {
				let _parent=_piece.parentElement
				let _parentClasses=_parent.classList
				_parentClasses.remove("cango");
				if(_parentClasses.contains("selected")) {
					_parentClasses.remove("selected")
					currentPiece=_piece
					let _position=parseIndex(_index)
					currentRow=_position.row
					currentColumn=_position.column
				}
			})
			// console.log(currentPiece)
			// console.log(currentRow)
			// console.log(currentColumn)
			// console.log(getIndex(row, column))

			// pieces[getIndex(row, column)]=currentPiece
			// newPiece=currentPiece
			let newPiece=pieces[getIndex(row, column)]
			newPieceParent=newPiece.parentNode
			newPieceParentClasses=newPiece.parentNode.classList
			if(currentPiece.classList.contains("white")) {
				newPiece.classList.add("white")
				newPiece.classList.remove("black")
			}
			else if(currentPiece.classList.contains("black")) {
				newPiece.classList.add("black")
				newPiece.classList.remove("white")
			}
			newPiece.classList.add(typePiece(pieces[getIndex(currentRow, currentColumn)]))
			// console.log(getIndex(row, column))

			// Types = rook, knight, king, queen, bishop, pawn
			currentPiece.classList.remove("rook")
			currentPiece.classList.remove("knight")
			currentPiece.classList.remove("king")
			currentPiece.classList.remove("queen")
			currentPiece.classList.remove("bishop")
			currentPiece.classList.remove("pawn")

			// pieces[getIndex(currentRow, currentColumn)]=currentPiece
			changePlayer();
		}
		else {
			pieces.forEach(function(_piece) {
				let _parent=_piece.parentElement
				let _parentClasses=_parent.classList
				_parentClasses.remove("selected")
				_parentClasses.remove("cango")
			})
			console.log(piece)
			console.log(piece.classList)
			console.log(typeMe())
			if(piece.classList.contains(typeMe())) {
				let check=isPieceItemBoard(row, column)
				console.log(check)
				if(check) {
					parentClasses.add("selected")
					// console.log(getChildNumber(piece.parentElement))
					// console.log(getChildNumber(piece.parentElement.parentElement))
					// offerPiece(piece, index, array, row, column)

					// let chooses=offerPiece(piece, array, row, column)
					// if(chooses.length == 0) {

					let choosesLength=offerPiece(piece, array, row, column)
					if(choosesLength == 0) {
						console.log("remove offer...")
						parentClasses.remove("selected")
					}
				}
			}
		}
	})
})
