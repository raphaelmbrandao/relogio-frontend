// Função para os ponteiros
function clock() {
	var clock = new Date();

	// Veriáveis de tempo para cada parametro
	var sec = clock.getSeconds() * 6;
	var min = clock.getMinutes() * 6 + sec/60;
	var hour = clock.getHours() * 15  + min/30;

	// Definindo rotações a partir das variáveis
	var rotateSec = 'rotate('+sec+'deg)';
	var rotateMin = 'rotate('+min+'deg)';
	var rotateHour = 'rotate('+hour+'deg)';

	// Aplicando nos elementos do DOM
	$(".sec").css('transform', rotateSec);
	$(".min").css('transform', rotateMin);
	$(".hour").css('transform', rotateHour);
}

// Função global
$(document).ready(function() {
	setInterval(clock, 1000);

	// Fade ao carregar elementos
	$('h1').fadeIn(1000);
	$('.engine').delay(1000).fadeIn(1000);
	$('.numbers').delay(500).fadeIn(1000);

	// Função do toogle no relógio no clique no botão
	$('button').on('click', function() {
		$('.clock-content').toggleClass('hide');

		$('button').html($('button').text() == 'Mostrar Relógio' ? 'Esconder Relógio' : 'Mostrar Relógio');
	});
});