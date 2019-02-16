const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const unitools = require('./universal-tools');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express()

let user = encodeURIComponent('Admin'),
password = encodeURIComponent('Willy Wonka Chocolate Factory'),
authMechanism = 'DEFAULT',
authSource = 'admin';

const mongourl = (`mongodb://${user}:${password}@localhost:27017/?authMechanism=${authMechanism}&authSource=${authSource}`)
let db;

const client = new MongoClient(mongourl);

client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    db = client.db('becomethestars');
    
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies
app.use(cors({
    origin: 'http://localhost:3000'
}))

const port = 3001


app.get('/', (req, res) => res.send('Hello World!'))

app.post('/post/form', (req, res) => {
    const userData = req.body['form'];
    const paymentData = req.body['payment'];
    //console.log(userData, paymentData);
    
    let uid, oid, srn, sin;
    let rid = '';

    
    let urecip = false;
    let recipient_data = {};
    let extras_data = {};
    
    unitools.generateAlphanumericString(10, id => uid = id);
    unitools.generateAlphanumericString(10, id => oid = id, false);
    unitools.generateAlphanumericString(11, id => srn = id, false);
    unitools.generateAlphanumericString(10, id => sin = id, false);

    if (userData.receiving === 'no') {
        unitools.generateAlphanumericString(10, id => rid = id);
        urecip = true;
        recipient_data = {id: rid, name: userData.receiver_name, email: userData.receiver_email, message: userData.receiver_message};
    }


    if (userData.extra.astrology_package === 'yes')
        extras_data = {name: 'astrology_package',
                        price: 10,
                        other_information: userData.extra.star_sign}
        
    
    let package_data = {type: userData.package,
        extras: extras_data,
    };

    ordersDocument = {order_id: oid,
                        package: package_data, 
                        customer: {
                            id: uid,
                            first_name: userData.first_name,
                            last_name: userData.last_name,
                            email: userData.email
                        }, 
                        price: userData.price, 
                        is_user_recipient: urecip, 
                        recipient: recipient_data, 
                        paypal_details: {
                            payer_id: paymentData.payerID,
                            payment_id: paymentData.paymentID,
                            payment_token: paymentData.paymentToken,
                            return_url: paymentData.returnUrl
                        }, 
                        star_registration_number: srn,
                        logged: false,
                        shipped: false,
                    };

    starsDocument = {identification_number: sin,
                        name: userData.star_name,
                        location_coordinates: "",
                        location_hemisphere: userData.star_location,
                        type: userData.star_type,
                        unique: false,
                        star_registration_number: srn
                    };

    
        
        const collection_orders = db.collection('orders');
        const collection_stars = db.collection('stars');

        // Insert some documents
        collection_orders.insertOne(ordersDocument, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            assert.equal(1, result.ops.length);
            // console.log("Order Successfully Added to Database");
        });

        collection_stars.insertOne(ordersDocument, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            assert.equal(1, result.ops.length);
            // console.log("Star Successfully Added to Database");
        });

        

    res.send("Data Received")
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))