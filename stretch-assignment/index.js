const blocksNodeList = document.querySelectorAll(".block");
const blocksList = Array.from(blocksNodeList);
 
function addlaunchOnClick(block) {
	console.log(block);
	let pos = 0;
	block.addEventListener("click", (ev) => {
		const id = setInterval(frame, 5);
		function frame() {
			pos == 350
				? clearInterval(id)
				: (pos++, (ev.target.style.left = `${pos}px`));
		}
	});
}

blocksList.forEach(addlaunchOnClick);
