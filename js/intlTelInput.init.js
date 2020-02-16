(function () {

  'use strict';

  // intlTelInput
  const inputPhone = document.querySelector(".form__control--tel");

  const iti = window.intlTelInput(inputPhone, {
    defaultCountry: "ru",
    initialCountry: "ru",
    onlyCountries: ["az", "am", "by", "ge", "kg", "kz", "md", "ru", "tj", "tm", "ua", "uz"],
    //separateDialCode: true,
    autoPlaceholder: "aggressive",
    nationalMode: true,
    formatOnDisplay: true,
    geoIpLookup: function (callback) {
      $.get('https://ipinfo.io', function () {
      }, "jsonp").always(function (resp) {
        var countryCode = (resp && resp.country) ? resp.country : "";
        callback(countryCode);
      });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/js/utils.js?v=1", // just for formatting/placeholders etc
  });



  // countryChange   
  function countryChange() {
    let placeholderActive = this.getAttribute('placeholder');
    let placeholderLength = this.getAttribute('placeholder').length;
    this.setAttribute('minlength', placeholderLength);
    this.setAttribute('maxlength', placeholderLength);
    let newMask = placeholderActive.replace(/[1-9]/g, '0');    
    $(this).mask(newMask, {
      /*translation: {
        ' ': {
          pattern: /[\-]/,
          fallback: '-'
        },
        placeholder: "(___) ___-__-__"
      }*/
    });    
  }   

  // render dial code
  let itiSelectedFlag = document.querySelector('.iti__selected-flag');  
  let countryDialCode;
  function renderItiDialCode(){   
       countryDialCode = document.createElement("div");       
       countryDialCode.classList.add('iti__dialcode');  
       countryDialCode.textContent = `+${iti.getSelectedCountryData().dialCode}`;     
       itiSelectedFlag.appendChild(countryDialCode); 
  }  
  renderItiDialCode(); 

  // change dial code event countrychange
  inputPhone.addEventListener('countrychange', (e) => {        
    countryDialCode.textContent = `+${iti.getSelectedCountryData().dialCode}`;
  });

  function openCountryDropdown() {
    this.removeAttribute('maxlength');
    this.removeAttribute('minlength');    
  }

  // clear input phone
  function clearCountryDropdown() {
    this.value = '';  
  }

  inputPhone.addEventListener('input', countryChange);
  inputPhone.addEventListener('keyup', countryChange);  
  inputPhone.addEventListener('open:countrydropdown', openCountryDropdown);
  inputPhone.addEventListener('close:countrydropdown', clearCountryDropdown);


  // example show step 
  const formSubmitStep1 = document.querySelector('.form__submit--step-1');
  const formStep1 = document.querySelector('#form-step-1');
  const formStep2 = document.querySelector('#form-step-2');

  /*formSubmitStep1.addEventListener('click', (e) => {
    e.preventDefault();
    formStep1.style.display = 'none';
    formStep2.style.display = 'block';
  });*/


})();