var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');




var app = express();

require('dotenv').config()


const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;


const stripe = require("stripe")(keySecret);

app.set("view engine", "ejs");
app.use(require("body-parser").urlencoded({extended: false}));

app.get("/", (req, res) =>
    res.render("index", {keyPublishable}));



app.post("/charge", (req, res) => {
    let amount;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-accessories11", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/men-accessories1", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});


app.post("/men-accessories2", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-accessories3", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/men-accessories4", (req, res) => {
    let amount=22500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/men-accessories5", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-accessories6", (req, res) => {
    let amount=22500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/men-luggage1", (req, res) => {
    let amount=16200;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-luggage2", (req, res) => {
    let amount=16200;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-luggage3", (req, res) => {
    let amount=16200;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/men-luggage4", (req, res) => {
    let amount=9900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-luggage5", (req, res) => {
    let amount=9900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-luggage6", (req, res) => {
    let amount=16200;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-pants1", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-pants2", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-pants3", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-pants4", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-pants5", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-pants6", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-shirt1", (req, res) => {
    let amount=13500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-shirt2", (req, res) => {
    let amount=13500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-shirt3", (req, res) => {
    let amount=13500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-shorts1", (req, res) => {
    let amount=16500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-shorts2", (req, res) => {
    let amount=15500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-shorts3", (req, res) => {
    let amount=15500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-shorts4", (req, res) => {
    let amount=15500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-shorts5", (req, res) => {
    let amount=14000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-shorts6", (req, res) => {
    let amount=14000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-sportscoats1", (req, res) => {
    let amount=49500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/men-sportscoats2", (req, res) => {
    let amount=13500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-sportscoats3", (req, res) => {
    let amount=13500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-sportscoats4", (req, res) => {
    let amount=19500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-sportscoats5", (req, res) => {
    let amount=17500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/men-sportscoats6", (req, res) => {
    let amount=29500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-suits1", (req, res) => {
    let amount=29900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-suits2", (req, res) => {
    let amount=29900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-suits3", (req, res) => {
    let amount=29900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-suits4", (req, res) => {
    let amount=29900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-suits5", (req, res) => {
    let amount=29900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-suits6", (req, res) => {
    let amount=29900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-ties1", (req, res) => {
    let amount=2900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-ties2", (req, res) => {
    let amount=2900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-ties3", (req, res) => {
    let amount=2900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-ties4", (req, res) => {
    let amount=2900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-ties5", (req, res) => {
    let amount=2900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/men-ties6", (req, res) => {
    let amount=2900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-accessories1", (req, res) => {
    let amount=9900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-accessories2", (req, res) => {
    let amount=9900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-accessories3", (req, res) => {
    let amount=9900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-accessories4", (req, res) => {
    let amount=9500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-accessories5", (req, res) => {
    let amount=9900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-accessories6", (req, res) => {
    let amount=11900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-bottoms1", (req, res) => {
    let amount=6400;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-bottoms2", (req, res) => {
    let amount=7000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-bottoms3", (req, res) => {
    let amount=12000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-bottoms4", (req, res) => {
    let amount=6800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-bottoms5", (req, res) => {
    let amount=5400;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-bottoms6", (req, res) => {
    let amount=5400;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-clothing1", (req, res) => {
    let amount=7500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-clothing2", (req, res) => {
    let amount=4300;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-clothing3", (req, res) => {
    let amount=5000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-clothing4", (req, res) => {
    let amount=4700;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-clothing4", (req, res) => {
    let amount=6400;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-clothing6", (req, res) => {
    let amount=4600;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-dresses1", (req, res) => {
    let amount=10900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-dresses2", (req, res) => {
    let amount=8900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-dresses3", (req, res) => {
    let amount=12800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-dresses4", (req, res) => {
    let amount=16800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-dresses5", (req, res) => {
    let amount=15800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-dresses6", (req, res) => {
    let amount=13800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-earrings1", (req, res) => {
    let amount=2000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-earrings2", (req, res) => {
    let amount=3000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-earrings3", (req, res) => {
    let amount=1000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-earrings4", (req, res) => {
    let amount=2000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-earrings5", (req, res) => {
    let amount=2400;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-earrings6", (req, res) => {
    let amount=2600;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-footwear1", (req, res) => {
    let amount=7900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-footwear2", (req, res) => {
    let amount=8900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-footwear3", (req, res) => {
    let amount=9900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-footwear4", (req, res) => {
    let amount=11000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-footwear5", (req, res) => {
    let amount=9900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-footwear6", (req, res) => {
    let amount=9900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-jackets1", (req, res) => {
    let amount=8900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-jackets2", (req, res) => {
    let amount=10300;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-jackets3", (req, res) => {
    let amount=7900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-jackets4", (req, res) => {
    let amount=10900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-jackets5", (req, res) => {
    let amount=16300;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-jackets6", (req, res) => {
    let amount=15500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-jewelry1", (req, res) => {
    let amount=1800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-jewelry2", (req, res) => {
    let amount=3800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-jewelry3", (req, res) => {
    let amount=3800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-jewelry4", (req, res) => {
    let amount=4000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-jewelry5", (req, res) => {
    let amount=3800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-jewelry6", (req, res) => {
    let amount=3800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-necklaces1", (req, res) => {
    let amount=4400;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-necklaces2", (req, res) => {
    let amount=6800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-necklaces3", (req, res) => {
    let amount=4000;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-necklaces4", (req, res) => {
    let amount=3800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-necklaces5", (req, res) => {
    let amount=3800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-necklaces6", (req, res) => {
    let amount=3600;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-ties1", (req, res) => {
    let amount=3800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-ties2", (req, res) => {
    let amount=3800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

app.post("/women-ties3", (req, res) => {
    let amount=3400;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-ties4", (req, res) => {
    let amount=3400;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-ties5", (req, res) => {
    let amount=3800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-ties6", (req, res) => {
    let amount=3800;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-tops1", (req, res) => {
    let amount=7900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-tops2", (req, res) => {
    let amount=4700;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-tops3", (req, res) => {
    let amount=4700;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-tops4", (req, res) => {
    let amount=8900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-tops5", (req, res) => {
    let amount=6900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});
app.post("/women-tops6", (req, res) => {
    let amount=8900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge"));
});

















var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter= require('./routes/login');
var menRouter= require('./routes/men-fashion');
var womenRouter= require('./routes/women-fashion');
var menluggageRouter= require('./routes/men-luggage');
var mentiesRouter= require('./routes/men-ties');
var menaccessoriesRouter= require('./routes/men-accessories');
var menshirtRouter= require('./routes/men-shirt');
var menpantsRouter= require('./routes/men-pants');
var menshortsRouter= require('./routes/men-shorts');
var mensportscoatsRouter= require('./routes/men-sportscoats');
var mensuitsRouter= require('./routes/men-suits');
var womenaccessoriesRouter= require('./routes/women-accessories');
var womenfootwearRouter= require('./routes/women-footwear');
var womenclothingRouter= require('./routes/women-clothing');
var womentiesRouter= require('./routes/women-ties');
var womenbottomsRouter= require('./routes/women-bottoms');
var womendressesRouter= require('./routes/women-dresses');
var womenjacketsRouter= require('./routes/women-jackets');
var womentopsRouter= require('./routes/women-tops');
var womenearringsRouter= require('./routes/women-earrings');
var womennecklacesRouter= require('./routes/women-necklaces');
var womenjewelryRouter= require('./routes/women-jewelry');



var menluggage1Router= require('./routes/men-luggage1');
var menluggage2Router= require('./routes/men-luggage2');
var menluggage3Router= require('./routes/men-luggage3');
var menluggage4Router= require('./routes/men-luggage4');
var menluggage5Router= require('./routes/men-luggage5');
var menluggage6Router= require('./routes/men-luggage6');


var menties1Router= require('./routes/men-ties1');
var menties2Router= require('./routes/men-ties2');
var menties3Router= require('./routes/men-ties3');
var menties4Router= require('./routes/men-ties4');
var menties5Router= require('./routes/men-ties5');
var menties6Router= require('./routes/men-ties6');

var menaccessories1Router= require('./routes/men-accessories1');
var searchRouter= require('./routes/search');




var menaccessories11Router= require('./routes/men-accessories11');
var menaccessories12Router= require('./routes/men-accessories12');



var menaccessories2Router= require('./routes/men-accessories2');
var menaccessories3Router= require('./routes/men-accessories3');
var menaccessories4Router= require('./routes/men-accessories4');
var menaccessories5Router= require('./routes/men-accessories5');
var menaccessories6Router= require('./routes/men-accessories6');


var menshirt1Router= require('./routes/men-shirt1');
var menshirt2Router= require('./routes/men-shirt2');
var menshirt3Router= require('./routes/men-shirt3');
var menshirt4Router= require('./routes/men-shirt4');


var menpants1Router= require('./routes/men-pants1');
var menpants2Router= require('./routes/men-pants2');
var menpants3Router= require('./routes/men-pants3');
var menpants4Router= require('./routes/men-pants4');
var menpants5Router= require('./routes/men-pants5');
var menpants6Router= require('./routes/men-pants6');


var menshorts1Router= require('./routes/men-shorts1');
var menshorts2Router= require('./routes/men-shorts2');
var menshorts3Router= require('./routes/men-shorts3');
var menshorts4Router= require('./routes/men-shorts4');
var menshorts5Router= require('./routes/men-shorts5');
var menshorts6Router= require('./routes/men-shorts6');




var mensportscoats1Router= require('./routes/men-sportscoats1');
var mensportscoats2Router= require('./routes/men-sportscoats2');
var mensportscoats3Router= require('./routes/men-sportscoats3');
var mensportscoats4Router= require('./routes/men-sportscoats4');
var mensportscoats5Router= require('./routes/men-sportscoats5');
var mensportscoats6Router= require('./routes/men-sportscoats6');



var mensuits1Router= require('./routes/men-suits1');
var mensuits2Router= require('./routes/men-suits2');
var mensuits3Router= require('./routes/men-suits3');
var mensuits4Router= require('./routes/men-suits4');
var mensuits5Router= require('./routes/men-suits5');
var mensuits6Router= require('./routes/men-suits6');


var womenaccessories1Router= require('./routes/women-accessories1');
var womenaccessories2Router= require('./routes/women-accessories2');
var womenaccessories3Router= require('./routes/women-accessories3');
var womenaccessories4Router= require('./routes/women-accessories4');
var womenaccessories5Router= require('./routes/women-accessories5');
var womenaccessories6Router= require('./routes/women-accessories6');



var womenfootwear1Router= require('./routes/women-footwear1');
var womenfootwear2Router= require('./routes/women-footwear2');
var womenfootwear3Router= require('./routes/women-footwear3');
var womenfootwear4Router= require('./routes/women-footwear4');
var womenfootwear5Router= require('./routes/women-footwear5');
var womenfootwear6Router= require('./routes/women-footwear6');



var womenties1Router= require('./routes/women-ties1');
var womenties2Router= require('./routes/women-ties2');
var womenties3Router= require('./routes/women-ties3');
var womenties4Router= require('./routes/women-ties4');
var womenties5Router= require('./routes/women-ties5');
var womenties6Router= require('./routes/women-ties6');




var womenclothing1Router= require('./routes/women-clothing1');
var womenclothing2Router= require('./routes/women-clothing2');
var womenclothing3Router= require('./routes/women-clothing3');
var womenclothing4Router= require('./routes/women-clothing4');
var womenclothing5Router= require('./routes/women-clothing5');
var womenclothing6Router= require('./routes/women-clothing6');






var womenbottoms1Router= require('./routes/women-bottoms1');
var womenbottoms2Router= require('./routes/women-bottoms2');
var womenbottoms3Router= require('./routes/women-bottoms3');
var womenbottoms4Router= require('./routes/women-bottoms4');
var womenbottoms5Router= require('./routes/women-bottoms5');
var womenbottoms6Router= require('./routes/women-bottoms6');





var womendresses1Router= require('./routes/women-dresses1');
var womendresses2Router= require('./routes/women-dresses2');
var womendresses3Router= require('./routes/women-dresses3');
var womendresses4Router= require('./routes/women-dresses4');
var womendresses5Router= require('./routes/women-dresses5');
var womendresses6Router= require('./routes/women-dresses6');




var womenjackets1Router= require('./routes/women-jackets1');
var womenjackets2Router= require('./routes/women-jackets2');
var womenjackets3Router= require('./routes/women-jackets3');
var womenjackets4Router= require('./routes/women-jackets4');
var womenjackets5Router= require('./routes/women-jackets5');
var womenjackets6Router= require('./routes/women-jackets6');


var womentops1Router= require('./routes/women-tops1');
var womentops2Router= require('./routes/women-tops2');
var womentops3Router= require('./routes/women-tops3');
var womentops4Router= require('./routes/women-tops4');
var womentops5Router= require('./routes/women-tops5');
var womentops6Router= require('./routes/women-tops6');




var womenjewelry1Router= require('./routes/women-jewelry1');
var womenjewelry2Router= require('./routes/women-jewelry2');
var womenjewelry3Router= require('./routes/women-jewelry3');
var womenjewelry4Router= require('./routes/women-jewelry4');
var womenjewelry5Router= require('./routes/women-jewelry5');
var womenjewelry6Router= require('./routes/women-jewelry6');




var womenearrings1Router= require('./routes/women-earrings1');
var womenearrings2Router= require('./routes/women-earrings2');
var womenearrings3Router= require('./routes/women-earrings3');
var womenearrings4Router= require('./routes/women-earrings4');
var womenearrings5Router= require('./routes/women-earrings5');
var womenearrings6Router= require('./routes/women-earrings6');




var womennecklaces1Router= require('./routes/women-necklaces1');
var womennecklaces2Router= require('./routes/women-necklaces2');
var womennecklaces3Router= require('./routes/women-necklaces3');
var womennecklaces4Router= require('./routes/women-necklaces4');
var womennecklaces5Router= require('./routes/women-necklaces5');
var womennecklaces6Router= require('./routes/women-necklaces6');










/*
app.get('/men-fashion',function(req,res){

    var posts=[
        {title:'simple post 2',author:'raymond'},
        {title:'simple post 3',author:'raymo'},
        {title:'simple post 4',author:'ra'},

    ]
    res.render('men-fashion.ejs',{posts: posts})

});

<% posts.forEach(function(post){ %>
    <div class="card">
        <div class="card-top">
            <h1 class="card-title"><%= post.title %></h1>
            <div class="card-body">
                <p class="card-title">From dressing for propriety to dressing to express yourself (even if expressing yourself meant throwing on a pair of jorts),
                    we’ve certainly come a long way. In 100 years, we have changed the game when it comes to fashion many, many times. Menswear has been influenced by music, war,
                    the economy, women’s fashion, cars, gangs, celebrities, sports, and so much more since before you were even born.
                    Think about that the next time you put on a fedora or a tie!</p>

            </div>
        </div>
    </div>

<%})%>






*/



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/men-fashion', menRouter);
app.use('/women-fashion', womenRouter);
app.use('/men-luggage', menluggageRouter);
app.use('/men-ties', mentiesRouter);
app.use('/men-accessories', menaccessoriesRouter);
app.use('/men-shirt', menshirtRouter);
app.use('/men-pants', menpantsRouter);
app.use('/men-shorts', menshortsRouter);
app.use('/men-sportscoats', mensportscoatsRouter);
app.use('/men-suits', mensuitsRouter);
app.use('/women-accessories', womenaccessoriesRouter);
app.use('/women-footwear', womenfootwearRouter);
app.use('/women-clothing', womenclothingRouter);
app.use('/women-ties', womentiesRouter);
app.use('/women-bottoms', womenbottomsRouter);
app.use('/women-dresses', womendressesRouter);
app.use('/women-jackets', womenjacketsRouter);
app.use('/women-tops', womentopsRouter);
app.use('/women-earrings', womenearringsRouter);
app.use('/women-necklaces', womennecklacesRouter);
app.use('/women-jewelry', womenjewelryRouter);





app.use('/men-luggage1', menluggage1Router);
app.use('/men-luggage2', menluggage2Router);
app.use('/men-luggage3', menluggage3Router);
app.use('/men-luggage4', menluggage4Router);
app.use('/men-luggage5', menluggage5Router);
app.use('/men-luggage6', menluggage6Router);



app.use('/men-ties1', menties1Router);
app.use('/men-ties2', menties2Router);
app.use('/men-ties3', menties3Router);
app.use('/men-ties4', menties4Router);
app.use('/men-ties5', menties5Router);
app.use('/men-ties6', menties6Router);



app.use('/men-accessories1', menaccessories1Router);
app.use('/search', searchRouter);



app.use('/men-accessories11', menaccessories11Router);
app.use('/men-accessories12', menaccessories12Router);


app.use('/men-accessories2', menaccessories2Router);
app.use('/men-accessories3', menaccessories3Router);
app.use('/men-accessories4', menaccessories4Router);
app.use('/men-accessories5', menaccessories5Router);
app.use('/men-accessories6', menaccessories6Router);


app.use('/men-shirt1', menshirt1Router);
app.use('/men-shirt2', menshirt2Router);
app.use('/men-shirt3', menshirt3Router);
app.use('/men-shirt4', menshirt4Router);



app.use('/men-pants1', menpants1Router);
app.use('/men-pants2', menpants2Router);
app.use('/men-pants3', menpants3Router);
app.use('/men-pants4', menpants4Router);
app.use('/men-pants5', menpants5Router);
app.use('/men-pants6', menpants6Router);



app.use('/men-shorts1', menshorts1Router);
app.use('/men-shorts2', menshorts2Router);
app.use('/men-shorts3', menshorts3Router);
app.use('/men-shorts4', menshorts4Router);
app.use('/men-shorts5', menshorts5Router);
app.use('/men-shorts6', menshorts6Router);



app.use('/men-sportscoats1', mensportscoats1Router);
app.use('/men-sportscoats2', mensportscoats2Router);
app.use('/men-sportscoats3', mensportscoats3Router);
app.use('/men-sportscoats4', mensportscoats4Router);
app.use('/men-sportscoats5', mensportscoats5Router);
app.use('/men-sportscoats6', mensportscoats6Router);



app.use('/men-suits1', mensuits1Router);
app.use('/men-suits2', mensuits2Router);
app.use('/men-suits3', mensuits3Router);
app.use('/men-suits4', mensuits4Router);
app.use('/men-suits5', mensuits5Router);
app.use('/men-suits6', mensuits6Router);



app.use('/women-accessories1', womenaccessories1Router);
app.use('/women-accessories2', womenaccessories2Router);
app.use('/women-accessories3', womenaccessories3Router);
app.use('/women-accessories4', womenaccessories4Router);
app.use('/women-accessories5', womenaccessories5Router);
app.use('/women-accessories6', womenaccessories6Router);



app.use('/women-footwear1', womenfootwear1Router);
app.use('/women-footwear2', womenfootwear2Router);
app.use('/women-footwear3', womenfootwear3Router);
app.use('/women-footwear4', womenfootwear4Router);
app.use('/women-footwear5', womenfootwear5Router);
app.use('/women-footwear6', womenfootwear6Router);




app.use('/women-ties1', womenties1Router);
app.use('/women-ties2', womenties2Router);
app.use('/women-ties3', womenties3Router);
app.use('/women-ties4', womenties4Router);
app.use('/women-ties5', womenties5Router);
app.use('/women-ties6', womenties6Router);





app.use('/women-clothing1', womenclothing1Router);
app.use('/women-clothing2', womenclothing2Router);
app.use('/women-clothing3', womenclothing3Router);
app.use('/women-clothing4', womenclothing4Router);
app.use('/women-clothing5', womenclothing5Router);
app.use('/women-clothing6', womenclothing6Router);



app.use('/women-bottoms1', womenbottoms1Router);
app.use('/women-bottoms2', womenbottoms2Router);
app.use('/women-bottoms3', womenbottoms3Router);
app.use('/women-bottoms4', womenbottoms4Router);
app.use('/women-bottoms5', womenbottoms5Router);
app.use('/women-bottoms6', womenbottoms6Router);






app.use('/women-dresses1', womendresses1Router);
app.use('/women-dresses2', womendresses2Router);
app.use('/women-dresses3', womendresses3Router);
app.use('/women-dresses4', womendresses4Router);
app.use('/women-dresses5', womendresses5Router);
app.use('/women-dresses6', womendresses6Router);




app.use('/women-jackets1', womenjackets1Router);
app.use('/women-jackets2', womenjackets2Router);
app.use('/women-jackets3', womenjackets3Router);
app.use('/women-jackets4', womenjackets4Router);
app.use('/women-jackets5', womenjackets5Router);
app.use('/women-jackets6', womenjackets6Router);




app.use('/women-tops1', womentops1Router);
app.use('/women-tops2', womentops2Router);
app.use('/women-tops3', womentops3Router);
app.use('/women-tops4', womentops4Router);
app.use('/women-tops5', womentops5Router);
app.use('/women-tops6', womentops6Router);




app.use('/women-jewelry1', womenjewelry1Router);
app.use('/women-jewelry2', womenjewelry2Router);
app.use('/women-jewelry3', womenjewelry3Router);
app.use('/women-jewelry4', womenjewelry4Router);
app.use('/women-jewelry5', womenjewelry5Router);
app.use('/women-jewelry6', womenjewelry6Router);





app.use('/women-earrings1', womenearrings1Router);
app.use('/women-earrings2', womenearrings2Router);
app.use('/women-earrings3', womenearrings3Router);
app.use('/women-earrings4', womenearrings4Router);
app.use('/women-earrings5', womenearrings5Router);
app.use('/women-earrings6', womenearrings6Router);




app.use('/women-necklaces1', womennecklaces1Router);
app.use('/women-necklaces2', womennecklaces2Router);
app.use('/women-necklaces3', womennecklaces3Router);
app.use('/women-necklaces4', womennecklaces4Router);
app.use('/women-necklaces5', womennecklaces5Router);
app.use('/women-necklaces6', womennecklaces6Router);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
