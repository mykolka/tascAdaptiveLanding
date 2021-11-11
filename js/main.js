let items = document.querySelectorAll('.sliderItem');
let indecators = document.querySelectorAll('.indecatorSlide');
let currentIndecator = 0;
let currentItem = 0;
let itemInterval = setTimeout(nextItem,100);

function nextItem() {
	goToItem(currentItem+1);
}

function previousItem() {
	goToItem(currentItem-1);
}

function goToItem(n) {
    items[currentItem].className = 'sliderItem';
    currentItem = (n+items.length)%items.length;
    items[currentItem].className = 'sliderItemActive';

	indecators[currentIndecator].className = "indecatorSlide";
	currentIndecator = (n+indecators.length)%indecators.length;
	indecators[currentIndecator].className = "activeIndecator";
}

let right = document.getElementById('btnRight');
let left = document.getElementById('btnLeft');

right.onclick = function() {
nextItem();
};
left.onclick = function() {
previousItem();
};

let mobiMenu = document.getElementById("navMobile");
let closeBtn = document.getElementById("closeBtn");
let menu = document.getElementById("menu");

mobiMenu.addEventListener('click', () => {
	mobiMenu.style.display = 'none';
	closeBtn.style.display = 'block';
	menu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
	closeBtn.style.display = 'none';
	mobiMenu.style.display = 'block';
	menu.style.display = 'none';	
})

