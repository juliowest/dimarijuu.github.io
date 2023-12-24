const mainContainer = document.querySelector(".main-container");
const treeContainer = document.createElement("pre");
const createSnow = (density)=>{
    for(let i=0;i < density; i++){
	const snowFlake= document.createElement("span");
	const random_horizontal_position = `${Math.floor(Math.random()*100)}%`;
	const random_fall_delay = `${Math.floor(Math.random()*100) + 1}s`;
	const random_fall_duration = `${Math.floor(Math.random() * 20) + 10}s`;
	const random_flake_size = `${Math.floor(Math.random()*7) +1}px`;
	const random_flake_opacity = Math.random().toFixed(2);
	snowFlake.classList.add("snow");
	snowFlake.style.width = random_flake_size;
	snowFlake.style.height = random_flake_size;
	snowFlake.style.opacity = random_flake_opacity;
	// snowFlake.style.animation = `fall ${random_fall_duration} ${random_fall_delay} linear infinite`;
        snowFlake.style.animation = `fall ${random_fall_duration} ${random_fall_delay} linear infinite, wind ${Math.floor(Math.random() * 10) + 5}s linear infinite`;

	snowFlake.style.right = random_horizontal_position;
	mainContainer.appendChild(snowFlake);
    }

};

createSnow(200);
