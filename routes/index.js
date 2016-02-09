var express = require('express');
var router = express.Router();

/************************ GET home page route ************************/
/* . */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/************************ PAYMENT PAGE ROUTES ************************/
router.get('/payment', function (req, res, next) {
// if(req.session.username){
    res.render('payment');
    // }
});

router.post('/payment', function (req, res, next) {
            res.redirect('thank-you')
    
    // if(req.session.username){
    //     stripe.charges.create({
    //       amount: 400,
    //       currency: "usd",
    //       source: req.body.stripeToken, // obtained with Stripe.js
    //       description: "Charge for " + req.body.stripeEmail
    //     }, function(err, charge) {
    //       // asynchronously called
    //       if(err){
    //         res.send('You got an err.' + err)
    //       }else{
    //         res.redirect('thank-you')
    //       }
    //     });
    // }
});




/************************ THANK-YOU PAGE ROUTE ************************/

router.get('/thank-you', function (req, res, next){
        res.render('thank-you')
});





/************************ DELIVERY PAGE ROUTES ************************/


router.get('/delivery', function (req, res, next) {
    if(req.session.username){
        //They do belong here. Proceed with the page.
        // Check to see if they have prefs set already.
        Account.findOne(
            { username: req.session.username }
        ),
        // Render the choices view
        res.render('delivery', { username: req.session.username, menuItem: 'delivery' });
        
    }else{
        res.redirect('/');
    }
});

router.post('/delivery', function (req, res, next) {
    if(req.session.username){
    // Make sure the user is logged in!      
    var newFullName = req.body.fullName;
    var newAddress1 = req.body.address1;
    var newAddress2 = req.body.address2;
    var newCity = req.body.city;
    var newState = req.body.state;
    var newZip = req.body.zip;
    var newDate = req.body.date;

    var query = {username: req.session.username};
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


module.exports = router;




    // res.render('payment', { username: req.session.username, menuItem: 'payment' });
