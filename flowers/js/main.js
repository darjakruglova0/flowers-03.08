
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('#site-navigation-mobile');

burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	menu.classList.toggle('active');

});

var clicked = '' //переменная для сохранения закрывающегося элемента
document.addEventListener('click', e => { //можно вешать и не на документ
	const targetId = e.target.getAttribute('data-target') || '' // достаем id элемента
	if(!targetId) return // если его нет, выходим из скрипта
	const target = document.getElementById(targetId) // ссылка на сам элемент
	if(clicked && clicked !== target) clicked.classList.remove('open') 
	//если это не первое открытие и не 2ой раз открывается текущий, то скрываем
	target.classList.add('open')
	clicked = target //сохраняем ссылку в замыкании
})