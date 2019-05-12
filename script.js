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
let table=document.querySelector("#table");
let pieces=document.querySelectorAll(".piece");
console.log(pieces);
function get(i, j) {
	return pieces[(i-1) * 8 + (j-1)];
}
