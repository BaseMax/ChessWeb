let table=document.querySelector("#table");
let pieces=document.querySelectorAll(".piece");
console.log(pieces);
function get(i, j) {
	return pieces[(i-1) * 8 + (j-1)];
}
