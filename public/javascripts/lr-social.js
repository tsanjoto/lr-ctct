var siteUrl = document.URL;
var loginRadiusOptions = {};
loginRadiusOptions.login = true;

LoginRadius_SocialLogin.util.ready(function () {
    $ui = LoginRadius_SocialLogin.lr_login_settings;
    $ui.interfacesize = '';
    $ui.apikey = option.apikey;
    $ui.callback = siteUrl;
    $ui.lrinterfacecontainer = "interfacecontainerdiv";
    $ui.interfacesize = "";
    $ui.noofcolumns = 5;
    $ui.lrinterfacebackground = "";
    $ui.is_access_token = 1;
    LoginRadius_SocialLogin.init(loginRadiusOptions);
});

LoginRadiusSDK.setLoginCallback(function () {
    var token = LoginRadiusSDK.getToken();

    LoginRadiusSDK.getUserprofile( function(userprofile) {
        $('.userprofiletitle').append('<h2>Login Success</h2>');
        $('.userprofile').html('<ul>');
        $.each( userprofile, function(index, val) {
            if( typeof(val) == 'object' && val != null ){
                var content = '';
                $.each( val, function(valindex, valval) {
                    var i = valindex.toString();
                    content =+    '<li>' + i + ': ' + valval + '</li>';
                });
                $('.userprofile').append(
                    '<li><ul>' +
                    content +
                    '</ul></li>'
                );
            }else{
                $('.userprofile').append( '<li>' + index + ': ' + val + '</li>');
            }
        });
        $('.userprofile').append('</ul>');
    } );
} );



$SL.util.ready(function() {
    var raasoption = option;

    LoginRadiusRaaS.init(raasoption, 'sociallogin', function(response) {
            //alert('Succeed, check console for more information');
            //console.log(response);
        }, function(errors) {
            $('.userprofiletitle').append('<h2>Login Error, see console</h2>');
    }, "socialcontainer");
});
