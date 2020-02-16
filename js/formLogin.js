(function () {

	/*
		* -------------------------------------------------------
		*  FORM LOGIN
		* -------------------------------------------------------
	*/
	$('#formLogin').validate({
		rules: {
			emailLogin: {
				required: true,
				email: true,
				minlength: 4,
				maxlength: 100
			},
			passwordLogin: {
				required: true
			},
			checkboxLogin: {
				required: true
			}
		},
		messages: {
			emailLogin: {
				required: "Обязательное поле",
				email: "Введите Email в формате example@gmail.com",
				minlength: "Введите корректный Email",
				maxlength: "Введите корректный Email"
			},
			passwordLogin: {
				required: "Обязательное поле"
			},
			checkboxLogin: {
				required: "Обязательное поле"
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				target: '#formLoginTarget',
				success: function (data) {

					parent.jQuery.fancybox.getInstance().close();

					window.location.href = 'https://google.com';

					$("#formLogin").clearForm();
				}
			});

		}

	});


})();