(function () {

	/*
		* -------------------------------------------------------
		*  FORM REGISTRATION
		* -------------------------------------------------------
	*/

	let inputPhone = $('.form__control--tel');
	let inputPhoneLen;
	inputPhone.on('keyup input', function () {
		inputPhoneLen = inputPhone.attr('placeholder').length;
		//console.log(inputPhoneLen);
	});

	$('#formReg').validate({
		rules: {
			email: {
				required: true,
				email: true,
				minlength: 4,
				maxlength: 100
			},
			tel: {
				required: true,
				minlength: inputPhoneLen,
				maxlength: inputPhoneLen
			},
			checkboxReg: {
				required: true
			}
		},
		messages: {
			email: {
				required: "Обязательное поле",
				email: "Введите Email в формате example@gmail.com",
				minlength: "Введите корректный Email",
				maxlength: "Введите корректный Email"
			},
			tel: {
				required: "Обязательное поле",
				minlength: "Введите корректный номер телефона",
				maxlength: "Введите корректный номер телефона"
			},
			checkboxReg: {
				required: "Обязательное поле"
			}
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				target: '#formRegTarget',
				success: function (data) {

					parent.jQuery.fancybox.getInstance().close();

					window.location.href = 'https://google.com';

					$("#formReg").clearForm();
				}
			});

		}

	});


})();