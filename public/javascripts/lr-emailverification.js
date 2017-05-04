$SL.util.ready(function() {
    var raasoption = option;
    LoginRadiusRaaS.init(raasoption, 'emailverification', function(response) {
        $('#email-verification-result').append("Your email is verified, you can now login");
    
        console.log(response);
    }, function(errors) {
        alert('Error, please check console');
        //console.log(errors)
        $('#email-verification-result').append(errors[0].description);
    });
});
