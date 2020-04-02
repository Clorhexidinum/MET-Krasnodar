if (window.jQuery) {
    var ValidateModule = (function ($) {
        return {
            init: function () {
                $(document).ready(function () {
                    ValidateModule.initValidators();
                });
            },
            initValidators: function () {
                $('.js-form').each(function () {
                    var $this = $(this);
                    $this.validate({ errorPlacement: function(error, element) {} });
                });
                $(".js-required").each(function () {
                    $(this).rules("add", "required");
                });

                $(".js-email").each(function () {
                    $(this).rules("add", {
                        email: true
                    });
                });
                // $('.js-phone').mask('+7 (999) 999-99-99');
                $('.js-form').off().on('submit', function (e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                    else {
                        e.returnValue = false;
                    }
                    $('.js-form__success').removeClass('_active');
                    $('.js-form__errors').removeClass('_active').html('');
                    $('.g-recaptcha').removeClass('error');
                    if ($(this).valid()) {
                        ValidateModule.submit($(this));
                    }
                });
            },
            submit: function ($form) {
                var formData = false,
                    $btn = $form.find('input[type="submit"]'),
                    btnLabel = false;
                formData = $form.serialize();
                if ($btn.length) {
                    btnLabel = $btn.val();
                }
                $.ajax({
                    url: '/handlers/sendForm.php',
                    data: formData,
                    dataType: 'json',
                    method: 'post',
                    beforeSend: function () {
                        if (btnLabel) {
                            $btn.val('Отправляем...');
                        }
                    },
                    success: function (response) {
                        console.log(response, 'response');
                        $btn.val(btnLabel);
                        if (response.status === 'ok') {
                            $('.js-form__success').addClass('_active');
                        }
                        else {
                            ValidateModule.showError(response.msg,$form);
                        }
                        if(typeof grecaptcha !== 'undefined'){
                            grecaptcha.reset();
                        }
                    },
                    error: function (response) {
                        $btn.val(btnLabel);
                        ValidateModule.showError('Возникла ошибка при отправке запроса, напишите нам об этом на met@met.ru',$form);
                        if(typeof grecaptcha !== 'undefined'){
                            grecaptcha.reset();
                        }
                    }
                });
            },
            showError: function (response,$form) {
                if (typeof response === 'object') {
                    for (var key in response) {
                        if (response.hasOwnProperty(key)) {
                            var $obj = [];
                            if(key==='g-recaptcha-response'){
                                $obj = $form.find('.g-recaptcha').addClass('error');
                            }
                            else{
                                $obj = $form.find('[name="'+key+'"]');

                            }
                            if($obj.length){
                                $obj.removeClass('valid').addClass('error');
                            }
                        }
                    }
                }
                else if (typeof response === 'string') {
                    $form.find('.js-form__errors').addClass('_active').html(response);
                }
            }
        }
    })(jQuery);
    ValidateModule.init();
}
