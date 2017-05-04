$SL.util.ready(function() {
    var raasoption = option;
    LoginRadiusRaaS.init(raasoption, 'registration', function(response) {
        alert('Succeed, check console for more information');
        console.log(response);
    }, function(errors) {
        alert('Error, please check console');
        console.log(errors);
    }, "registration");
});
