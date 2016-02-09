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

router.get('/thank-you', function (req, res, next){
        res.render('thank-you')
});





module.exports = router;




    // res.render('payment', { username: req.session.username, menuItem: 'payment' });
