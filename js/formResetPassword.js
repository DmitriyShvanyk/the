(function () {
	
	/*
		* -------------------------------------------------------
		*  FORM RESET PASSWORD
		* -------------------------------------------------------
	*/
	$('#formResetPassword').validate({
		rules: {
			emailResetPassword: {
				required: true,
				email: true,
				minlength: 4,
				maxlength: 100
			}
		},
		messages: {
			emailResetPassword: {
				required: "Обязательное поле",
				email: "Введите Email в формате example@gmail.com",
				minlength: "Введите корректный Email",
				maxlength: "Введите корректный Email"
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				target: '#formResetPasswordTarget',
				success: function (data) {

					//parent.jQuery.fancybox.getInstance().close();

					window.location.href = 'https://google.com';

					$("#formResetPassword").clearForm();
				}
			});
		}
	});
	

})();