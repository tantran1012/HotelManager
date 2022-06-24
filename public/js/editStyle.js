(function ($) {

	const setDarkModeState = ( )=> {
		if(sessionStorage.getItem('darkMode') == 'true') {
			$('body').addClass('dark-mode');
			$('nav').addClass('navbar-dark');
			$('#darkModeSwitch').prop("checked", true);
		}
		else {
			$('body').removeClass('dark-mode');
			$('nav').removeClass('navbar-dark');
			$('#darkModeSwitch').prop("checked", false);
		}
	}
	
	setDarkModeState();

	$('#darkModeSwitch').on('click', function () {
		if ($(this).is(':checked')) {
			sessionStorage.setItem('darkMode','true');
			$('body').addClass('dark-mode');
			$('nav').addClass('navbar-dark');
		} else {
			sessionStorage.setItem('darkMode','false');
			$('body').removeClass('dark-mode');
			$('nav').removeClass('navbar-dark');
		}
	})
})(jQuery)
