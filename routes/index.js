var express = require('express');
var router = express.Router();
var Order = require('../models/order');
var nodemailer = require('nodemailer');
var stripe = require("stripe")("sk_test_qdcjW5fecCmIPkjs1RJRbNpp");

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
            var orderNumber = "";
            var possible = "0123456789";

            for( var i=0; i < 8; i++ ){
                orderNumber += possible.charAt(Math.floor(Math.random() * possible.length));
            };


            console.log('=======================================================')
            console.log(req.session);
            console.log('=======================================================')


            console.log("orderNumber is -> " + orderNumber);
            req.session.submitData.orderNumber = orderNumber;


            console.log('=======================================================')
            console.log(req.session.submitData.totalCost);
            console.log('=======================================================')

            var order = new Order();

            order.fullName = req.session.submitData.fullName;
            order.address1 = req.session.submitData.address1;
            order.address2 = req.session.submitData.address2;
            order.city = req.session.submitData.City;
            order.state = req.session.submitData.State;
            order.zip = req.session.submitData.zip;
            order.password = req.session.submitData.password;
            order.accessLevel = req.session.submitData.accessLevel;
            order.matOption = req.session.submitData.matOption;
            order.styleOption = req.session.submitData.styleOption;
            order.galantEmbroideryColor = req.session.submitData.galantEmbroideryColor;
            order.vr4TextColor = req.session.submitData.vr4TextColor;
            order.carNumber = req.session.submitData.carNumber;
            order.carNumberColor = req.session.submitData.carNumberColor;
            order.shipping = req.session.submitData.shipping;
            order.totalCost = req.session.submitData.totalCost;
            order.email = req.session.submitData.email;
            order.phone = req.session.submitData.phone;
            order.orderNumber = req.session.submitData.orderNumber;


            order.save(function(err, order_Saved){
               if(err){
                   throw err;
                   console.log(err);
               }else{
                    var transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: 'turboflanaganmats@gmail.com',
                            pass: 'matpassword'
                        }
                    });

                    var text = "You have a new order of floormats.";
                    var mailOptions = {
                        from: 'Peter Flanagan <turboflanaganmats@gmail.com>',
                        to: 'Peter Flanagan <turboflanagan@gmail.com>',
                        subject: 'TurboMats Order',
                        text: text
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if(error){
                            console.log(error);
                            res.json({response: error});
                        }else{
                            console.log("message was successfully sent. Response was " + info.response);
                            res.json({response: "success"});
                        }
                    });


                    var transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: 'turboflanaganmats@gmail.com',
                            pass: 'matpassword'
                        }
                    });
                    var text = "This is a test email sent from my node server";
                    var mailOptions = {
                        from: 'Peter Flanagan <turboflanaganmats@gmail.com>',
                        to: 'Peter Flanagan <turboflanaganmats@gmail.com>',
                        subject: 'Matworks new mat order for Galant VR4',
                        text: text
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if(error){
                            console.log(error);
                            res.json({response: error});
                        }else{
                            console.log("message was successfully sent. Response was " + info.response);
                            res.json({response: "success"});
                        }
                    });


                    var transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: 'turboflanaganmats@gmail.com',
                            pass: 'matpassword'
                        }
                    })
                    var text = "Your order has been received and is in process.  You will be seeing your new custom mats soon!";
                    var mailOptions = {
                        from: 'Peter Flanagan <turboflanaganmats@gmail.com>',
                        to: 'Peter Flanagan <turboflanagan@gmail.com>',
                        subject: 'Your Mat Order Is Complete',
                        text: text
                    }

                    transporter.sendMail(mailOptions, function (error, info) {
                        if(error){
                            console.log(error);
                            res.json({response: error});
                        }else{
                            console.log("message was successfully sent. Response was " + info.response);
                            res.json({response: "success"});
                        }
                    })

                   console.log('saved!');
                }
            });
            console.log(order);
            res.redirect('thank-you');
            }        
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
    // save to MongoDB
        
        res.redirect('/payment');
    };
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

router.get('/data', function (req,res,next){
        Order.find({}, function (err, doc, next){
            res.json(doc);
        })
});





module.exports = router;




    // res.render('payment', { username: req.session.username, menuItem: 'payment' });
