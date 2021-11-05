+$(function () {
    $('#nombre').on('focus', function () {
        $('#name').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoName.png) no-repeat")
            .css("background-size", "95%");
        $('#nombre').css("border-color", "#f5a111")
    }), $('#nombre').on('focusout', function () {
        $('#name').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoName.png) no-repeat")
            .css("background-size", "95%")
        $('#nombre').css("border-color", "grey")
    })

});
$(function () {
    $('#apellido').on('focus', function () {
        $('#lastname').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoLastname.png) no-repeat")
            .css("background-size", "95%")
        $('#apellido').css("border-color", "#f5a111")
    }), $('#apellido').on('focusout', function () {
        $('#lastname').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoLastname.png) no-repeat")
            .css("background-size", "95%")
        $('#apellido').css("border-color", "grey")
    })

});
$(function () {
    $('#pasahitza').on('focus', function () {
        $('#pass1').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoPassword.png) no-repeat")
            .css("background-size", "95%")
        $('#pasahitza').css("border-color", "#f5a111")
    }), $('#pasahitza').on('focusout', function () {
        $('#pass1').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoPassword.png) no-repeat")
            .css("background-size", "95%")
        $('#pasahitza').css("border-color", "grey")
    })

});
$(function () {
    $('#cont2').on('focus', function () {
        $('#pass2').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoPasswordRepeat.png) no-repeat")
            .css("background-size", "95%");
        $('#cont2').css("border-color", "#f5a111")
    }), $('#cont2').on('focusout', function () {
        $('#pass2').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoPasswordRepeat.png) no-repeat")
            .css("background-size", "95%")
        $('#cont2').css("border-color", "grey")
    })
});
$(function () {
    $('#mail').on('focus', function () {
        $('#email').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoMail.png) no-repeat")
            .css("background-size", "95%")
        $('#mail').css("border-color", "#f5a111")
    }), $('#mail').on('focusout', function () {
        $('#email').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoMail.png) no-repeat")
            .css("background-size", "95%")
        $('#mail').css("border-color", "grey")
    })
});
$(function () {
    $('#erabiltzailea').on('focus', function () {
        $('#user').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoUser.png) no-repeat")
            .css("background-size", "95%")
        $('#erabiltzailea').css("border-color", "#f5a111")
    }), $('#erabiltzailea').on('focusout', function () {
        $('#user').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoUser.png) no-repeat")
            .css("background-size", "95%")
        $('#erabiltzailea').css("border-color", "grey")
    })
});