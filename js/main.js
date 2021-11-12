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

let mobiMenuBtn = document.getElementById("navMobile");
let closeBtn = document.getElementById("closeBtn");
let mobileMenuBox = document.getElementById("mobileMenuBox");
let menu = document.createElement('div');


mobiMenuBtn.addEventListener('click', () => {
	mobiMenuBtn.style.display = 'none';
	closeBtn.style.display = 'block';
	
	menu.innerHTML = `
		<style>

			#menu{
				width: 100vw;
				padding: 58px 16px 31px;
				background: #FFFFFF;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 8;
			}	
			.menuItem{
				height: 78px;
				border-bottom:  0.5px solid #D9D9D9;	
			}	
			.menuItem a {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				text-decoration: none;
				font-weight: 500;
				font-size: 15px;
				line-height: 24px;
				color: #202020;
			}			
			.menuItem:last-child{
				border: none;
			}	

		</style>

		<div id="menu"> 
			<div class="menuItem"><a href="#home">Home</a></div>
			<div class="menuItem"><a href="#about">About Us </a></div>
			<div class="menuItem"><a href="#services">Services and Expertise </a></div>
			<div class="menuItem"><a href="#">Product</a></div>
			<div class="menuItem"><a href="#">Value Proposition</a></div>
			<div class="menuItem"><a href="#">Case Study</a></div>
			<div class="menuItem"><a href="#contactUS">Contact Us</a></div>
		</div>
	`
	mobileMenuBox.appendChild(menu);
})

closeBtn.addEventListener('click', () => {
	closeBtn.style.display = 'none';
	mobiMenuBtn.style.display = 'block';
	menu.innerHTML = ``;
})

