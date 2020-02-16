(function () {	

	/*
		* -------------------------------------------------------
		*  FORM NEW PASSWORD
		* -------------------------------------------------------
	*/
	$('#formNewPassword').validate({
		rules: {			
			passwordNew: {
				required: true,
				minlength : 5
			},
			passwordNewConfirm: {
				required: true,
				minlength : 5,
				equalTo : "#passwordNew"
			}
		},
		messages: {			
			passwordNew: {
				required: "Обязательное поле",
				minlength: "Пароль должен быть не менее 5 символов"
			},
			passwordNewConfirm: {
				required: "Обязательное поле",
				minlength: "Пароль должен быть не менее 5 символов",
				equalTo: "Пароли должны совпадать"
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				target: '#formNewPasswordTarget',
				success: function (data) {

					//parent.jQuery.fancybox.getInstance().close();

					window.location.href = 'https://google.com';

					$("#formNewPassword").clearForm();
				}
			});

		}

	});


})();