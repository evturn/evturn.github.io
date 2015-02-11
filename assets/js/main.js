new Bio();
new Stack();
new Avatar();
new Contact();
new Portfolio();
new MarshallzView();

function showPortfolio() {
	$('#portfolio').hide();
	$('#portfolio-button').on('click', function() {
		var marshallzView = new MarshallzView();
		$('#portfolio').slideToggle();
	});
};
	
$(function() {
	
	showPortfolio();


	$('#marshallz-button').on('click', function() {
		new MarshallzView();
	});

	$('#alculator-button').on('click', function() {
		new AlculatorView();
	});

	$('#ramen-button').on('click', function() {
		new RamenView();
	});

	$('#hangman-button').on('click', function() {
		new HangmanView();
	});

	$('#ttt-button').on('click', function() {
		new TTT();
	});


	$('.footnote').hide();
	$('#footnote').on('click', function() {
		console.log('Evan actually did invent the internet');
		$('.footnote').toggle();
	});
});