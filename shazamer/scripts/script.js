const playBtn = document.querySelector('.header_play');
const radioNavigation = document.querySelector('.radio-navigation');
const headerPreview = document.querySelector('.header-preview').querySelector('img');
const radioItem = document.querySelectorAll('.radio-item');
const Radio = document.querySelector('.radio');
const headerName = document.querySelector('.header-name');
const volumeBar = document.querySelector('#volume-bar');
const header = document.querySelector('.header');
const video = document.querySelector('video');
const screamBtn = document.querySelector('.scream-btn');
const download = document.querySelector('.currency-track__download').querySelector('span');


const radio = new Audio();
radio.type = 'audio/aac';

screamBtn.addEventListener('click', scream);

function scream(){
	video.style.display = 'block';
	video.play();
	video.requestFullscreen();
	radio.pause();
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const activate = () => {
	if(radio.paused) {
		radio.play();
		playBtn.classList.remove('fa-play');
		playBtn.classList.add('fa-pause');
		Radio.classList.remove('pause');
		Radio.classList.add('play');
	} else {
		radio.pause();
		playBtn.classList.remove('fa-pause');
		playBtn.classList.add('fa-play');
		Radio.classList.remove('play');
		Radio.classList.add('pause');
	}
	header.classList.add('active');
}
const radioSelect = elem => {
	radioItem.forEach( item => {
		item.classList.remove('select');
	})
	elem.classList.add('select');
}


if (window.matchMedia("(max-width: 490px)").matches){
	download.textContent = 'Скачать';
}



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
radioNavigation.addEventListener('change', event => {
	const target = event.target;
	radio.src = target.dataset.radioStation;
	const parrent = target.closest('.radio-item');
	radioSelect(parrent);
	const link = parrent.querySelector('img').getAttribute('src');
	headerPreview.src = link;
	activate();
	const title = parrent.querySelector('.radio-name').textContent;
	headerName.textContent = title;
})
playBtn.addEventListener('click', () => {
	activate(); 
})
volumeBar.addEventListener('input', () => {
	radio.volume = volumeBar.value / 100;
})