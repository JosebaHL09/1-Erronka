$(function () {
    $('#nombre').on('focus', function () {
        $('#name').css("background", "url(amarillo/account_circle.png) no-repeat")
            .css("background-size", "95%");
        $('#nombre').css("border-color", "#f5a111")
    }), $('#nombre').on('focusout', function () {
        $('#name').css("background", "url(gris/account_circle.png) no-repeat")
            .css("background-size", "95%")
        $('#nombre').css("border-color", "grey")
    })

});
$(function () {
    $('#apellido').on('focus', function () {
        $('#lastname').css("background", "url(amarillo/person_outline.png) no-repeat")
            .css("background-size", "95%")
        $('#apellido').css("border-color", "#f5a111")
    }), $('#apellido').on('focusout', function () {
        $('#lastname').css("background", "url(gris/person_outline.png) no-repeat")
            .css("background-size", "95%")
        $('#apellido').css("border-color", "grey")
    })

});
$(function () {
    $('#cont1').on('focus', function () {
        $('#pass1').css("background", "url(amarillo/lock.png) no-repeat")
            .css("background-size", "95%")
        $('#cont1').css("border-color", "#f5a111")
    }), $('#cont1').on('focusout', function () {
        $('#pass1').css("background", "url(gris/lock.png) no-repeat")
            .css("background-size", "95%")
        $('#cont1').css("border-color", "grey")
    })

});
$(function () {
    $('#cont2').on('focus', function () {
        $('#pass2').css("background", "url(amarillo/lock_open.png) no-repeat")
            .css("background-size", "95%");
        $('#cont2').css("border-color", "#f5a111")
    }), $('#cont2').on('focusout', function () {
        $('#pass2').css("background", "url(gris/lock_open.png) no-repeat")
            .css("background-size", "95%")
        $('#cont2').css("border-color", "grey")
    })
});
$(function () {
    $('#mail').on('focus', function () {
        $('#email').css("background", "url(amarillo/mail.png) no-repeat")
            .css("background-size", "95%")
        $('#mail').css("border-color", "#f5a111")
    }), $('#mail').on('focusout', function () {
        $('#email').css("background", "url(gris/mail.png) no-repeat")
            .css("background-size", "95%")
        $('#mail').css("border-color", "grey")
    })
});
$(function () {
    $('#usuario').on('focus', function () {
        $('#user').css("background", "url(amarillo/assignment_ind.png) no-repeat")
            .css("background-size", "95%")
        $('#usuario').css("border-color", "#f5a111")
    }), $('#usuario').on('focusout', function () {
        $('#user').css("background", "url(gris/assignment_ind.png) no-repeat")
            .css("background-size", "95%")
        $('#usuario').css("border-color", "grey")
    })
});






