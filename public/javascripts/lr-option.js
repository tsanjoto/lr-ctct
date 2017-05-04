
var option = {};
option.apikey = "aad1d378-8613-429b-b728-bb2550e453f3";
option.appName = "lr-thompson";
//"http://lr-thompson.hub.loginradius.com/";
option.V2Recaptcha = true;
option.V2RecaptchaSiteKey = "6Ld4GR8UAAAAABtkCDSKADICV3yc6eA_JGDVVo-N";
option.inFormvalidationMessage = true;
option.enableLoginOnEmailVerification = true;
/** You can directly bind it with the correct url, the string operation is just to dynamically bind them**/
var path = window.location.href;
option.emailVerificationUrl = path.replace(path.substr(path.lastIndexOf('/')), "/email-verification");
option.forgotPasswordUrl = path.replace(path.substr(path.lastIndexOf('/')), "/reset-password");
