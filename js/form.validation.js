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

					parent.jQuery.fancybox.getInstance().close();

					window.location.href = 'https://google.com';

					$("#formResetPassword").clearForm();
				}
			});
		}
	});


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

					parent.jQuery.fancybox.getInstance().close();

					window.location.href = 'https://google.com';

					$("#formNewPassword").clearForm();
				}
			});

		}

	});



	// show password
	function showPassword(e) {
		const target = e.target;
		const formPasswordControl = document.querySelectorAll('.form__control--password');
		
		if (target.classList.contains('form__password-i-eye')) {
			for (let i = 0; i < formPasswordControl.length; i++) {
				if (formPasswordControl[i].type === 'password') {
					formPasswordControl[i].type = 'text';
					target.classList.add('show');
				}
				else {
					formPasswordControl[i].type = 'password';
					target.classList.remove('show');
				}
			}
		}

	}
	window.addEventListener('click', showPassword);



})();