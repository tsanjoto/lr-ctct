var express = require('express');
var router = express.Router();
var fs = require('fs');
var ctctconfig = JSON.parse(fs.readFileSync('./ctct-config.json', 'utf8'));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register', errorMsgs: [] });
});

router.get('/success', function(req, res, next) {
  res.render('register-success', { title: 'Register Success' });
});

/* POST users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    var errorMessages = [];
    var email = req.body.email.trim();
    if (!email)
    {
        errorMessages.push('email is required')
    }
    
    if (req.body.password.length < 6)
    {
        errorMessages.push('password length needs to be at least 6 characters')
    }

    if (req.body.password != req.body.confirmPassword)
    {
        errorMessages.push('confirm password did not match')
    }
    
    if (req.body.emailSubscription == 'on')
    {
        //send to constant contact
        /*
        console.log('Sending to Constant Contact')
        console.log(global.ctctconfig)
        var client = new global.RestClient();
        var url = "https://api.constantcontact.com/v2/contacts"
        
        var args = {
            data: {
                "email_addresses":[{"email_address":email}],
                "lists":[{"id":global.ctctconfig.contactlistid}]
            },
            parameters: { "api_key": global.ctctconfig.apikey,
                          "action_by": "ACTION_BY_VISITOR"
                        },
            headers: {
                "Authorization": "Bearer " + global.ctctconfig.accesstoken,
                "Content-Type": "application/json"
             } // request headers
            };
            
        client.post(url, args, function (data, response) {
            if response.statusCode == 201
            {
                console.log("Added to Constant Constant Code");
            }else
            {
                console.log("Some error occurred on adding to ctct")
            }
        });*/
    }
    
    if (errorMessages.length > 0)
    {
        //error render
        res.render('register', {
        title: 'Register',
        errorMsgs: errorMessages,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        emailSubscription:req.body.emailSubscription
          });
        return
    }
    
    var formData =
    {
        "Email": [
            {
                "Type": "Primary",
                "Value": email
            }
        ],
        "Password": req.body.password,
        "IsEmailSubscribed": req.body.emailSubscription == 'on',
    };
    
    global.lrv2.authentication.register( formData, "http://localhost:3000/emailverification", "verfication-default").then( function( response )
    {
        console.log("SUCCESS")
        console.log( response );
        res.render('register-success', { title: 'Register Success', user:email });

    }).catch( function( error ) {
        console.log("ERROR")
        console.log( error );
        errorMessages.push(error.Description);
        res.render('register', {
        title: 'Register',
        errorMsgs: errorMessages,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        emailSubscription:req.body.emailSubscription
          });
    });
    
    
    

      



});

module.exports = router;
