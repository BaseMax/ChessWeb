/**
*
* @Name : script.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2019-05-12
* @Released under : https://github.com/BaseMax/ChessWeb/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/ChessWeb
*
**/
let table=document.querySelector("#table")
let pieces=document.querySelectorAll(".piece")
let timeMe=true
// console.log(pieces)

function get(i, j) {
	return pieces[(i-1) * 8 + (j-1)]
}

function getChildNumber(node) {
	return Array.prototype.indexOf.call(node.parentNode.children, node)
}

// function offerPiece(piece, pieceIndex, array, row, column) {
function offerPiece(piece, array, row, column) {
	let pieceIndex=row*8 + column;
	pieceIndex++;
	row++;
	column++;
	console.log("pieceIndex : " + pieceIndex);
	console.log("row : " + row);
	console.log("column : " + column);
}

// pieces.forEach(function(piece, index, array) {
pieces.forEach(function(piece, array) {
	piece.addEventListener("click", function() {
		// pieces.forEach(function(_piece, _index, _array) {
		pieces.forEach(function(_piece) {
			_piece.parentElement.classList.remove("selected")
		})
		piece.parentElement.classList.add("selected")
		let row=getChildNumber(piece.parentElement.parentElement)
		let column=getChildNumber(piece.parentElement)
		// console.log(getChildNumber(piece.parentElement))
		// console.log(getChildNumber(piece.parentElement.parentElement))
		// offerPiece(piece, index, array, row, column);
		offerPiece(piece, array, row, column);
	})
})
