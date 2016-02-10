var express = require('express');
var router = express.Router();
var Order = require('../models/order');

/************************ GET home page route ************************/
/* . */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/************************ PAYMENT PAGE ROUTES ************************/

router.post('/payment', function (req, res, next) {
            // res.redirect('thank-you')
    console.log(req.session);
    if(req.session){
        stripe.charges.create({
          amount: 400,
          currency: "usd",
          source: req.body.stripeToken, // obtained with Stripe.js
          description: "Charge for " + req.body.stripeEmail
        }, function(err, charge) {
          // asynchronously called
          if(err){
            res.send('You got an err.' + err)
          }else{
            console.log(req.session.submitData);
            // res.redirect('thank-you')
          }

        // save to MongoDB
          var order = new Order{
            order.fullName,
            order.address1,
            order.address2,
            order.city,
            order.state,
            order.zip,
            order.username,
            order.password,
            order.accessLevel,
            order.matOption,
            order.styleOption,
            order.galantEmbroideryColor,
            order.vr4TextColor,
            order.carNumber,
            order.carNumberColor,
            order.shipping,
            order.totalCost
          };
          order.save;
        });
    }
});

router.get('/payment', function (req, res, next) {
    res.render('payment');
});




/************************ THANK-YOU PAGE ROUTE ************************/

router.get('/thank-you', function (req, res, next){
        res.render('thank-you')
});





/************************ DELIVERY PAGE ROUTES ************************/


router.get('/delivery', function (req, res, next) {
    // if(req.session.username){
        //They do belong here. Proceed with the page.
        // Check to see if they have prefs set already.
        // Account.findOne(
        //     { username: req.session.username }
        // ),
        // Render the choices view
        res.render('delivery');
        console.log("i'm in...");
        
    // }else{
    //     res.redirect('/');
    // }
});

router.post('/delivery', function (req, res, next) {
    if(req.session){
    // Make sure the user is logged in!      
    var newFullName = req.body.fullName;
    var newAddress1 = req.body.address1;
    var newAddress2 = req.body.address2;
    var newCity = req.body.city;
    var newState = req.body.state;
    var newZip = req.body.zip;
    var newDate = req.body.date;

    // var query = {username: req.session.username};
    var updateAddress = {
        fullName: newFullName, 
        address1: newAddress1, 
        address2: newAddress2, 
        city: newCity, 
        state: newState, 
        zip: newZip, 
        date: newDate
        };
    var options = {upsert: true};

        Account.findOneAndUpdate(query, updateAddress, options, function (err, account){
            if (err){
                res.send('There was an error saving your account.  Please re-enter or send this error to our help team: ' + err)
            }else{
                account.save;
                res.redirect('/payment');
            }
        })
    }
});



/************************ CONFIRMATION PAGE ROUTES ************************/
router.post('/confirmation', function (req, res, next) {
    req.session.submitData = req.body;
    console.log(req.session);
    res.render('confirmation', { submitData: req.body });

    // }
});

router.get('/confirmation', function (req, res, next) {
    res.render('confirmation', { submitData: req.body });

});


module.exports = router;




    // res.render('payment', { username: req.session.username, menuItem: 'payment' });
